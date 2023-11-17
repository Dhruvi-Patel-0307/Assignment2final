$(document).ready(function () {
    $.ajax({
        url: 'Dhruvi.json',
        dataType: 'json',
        success: function (data) {
            populateTable(data);

            $('th').on('click', function () {
                var column = $(this).data('column');
                sortTable.call(this, column); 
            });
        },
        error: function (error) {
            console.error('Error fetching character data:', error);
        }
    });
});

function populateTable(data) {
    var tbody = $('#charactersTable tbody');
    tbody.empty();

    $.each(data, function (index, character) {
        var row = $('<tr>');
        row.append($('<td>').text(character.firstName));
        row.append($('<td>').text(character.lastName));
        row.append($('<td>').text(character.age));
        row.append($('<td>').text(character.date));
        tbody.append(row);
    });
}

function sortTable(column) {
    var tbody = $('#charactersTable tbody');
    var rows = tbody.find('tr').toArray().sort(comparator(column));

    
    var ascending = $(this).hasClass('asc');

   
    if (ascending) {
        rows = rows.reverse();
        $(this).removeClass('asc');
        $(this).find('.chevron').html('&#x25BC;'); 
    } else {
        $(this).addClass('asc');
        $(this).find('.chevron').html('&#x25B2;'); 
    }

    tbody.empty();
    tbody.append(rows);
}

function comparator(column) {
    return function (a, b) {
        var valA = $(a).find('td:eq(' + $('th[data-column="' + column + '"]').index() + ')').text();
        var valB = $(b).find('td:eq(' + $('th[data-column="' + column + '"]').index() + ')').text();

        if (!isNaN(valA) && !isNaN(valB)) {
            return parseInt(valA, 10) - parseInt(valB, 10);
        } else {
            return valA.localeCompare(valB);
        }
    };
}
