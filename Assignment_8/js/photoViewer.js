(function($) {
    $.fn.photoViewer = function() {
        return this.each(function() {
            var $imgContainer = $(this);
            var $mainImg = $imgContainer.find('#main-img');

            // Using .on() with event delegation for efficiency
            $imgContainer.on({
                mouseover: function() {
                    $(this).css({
                        'cursor': 'pointer', // Changed from 'default' to 'pointer' for user interaction
                        'border-color': 'red'
                    });
                },
                mouseout: function() {
                    $(this).css({
                        'cursor': 'pointer', // Consistent cursor style for interactive elements
                        'border-color': 'grey'
                    });
                },
                click: function() {
                    var imgURL = $(this).attr('src');
                    $mainImg.fadeOut(100, function() {
                        $(this).attr('src', imgURL).fadeIn(100);
                    });
                }
            }, 'img'); // Event delegation for img elements
        });
    };
})(jQuery);

$(document).ready(function() {
    $('#img-container').photoViewer();
});
