$(document).ready(function () {
    // Event handler for opening the box
    $('#open-box').on('click', function() {
        $("#box-container").show();
    });

    // Event handler for closing the box
    $('#close').on('click', function() {
        $("#box-container").hide();
    });

    // Initialize your custom photo viewer plugin
    $('#photo-viewer').customPhotoViewer();

    // Event handler for clicking on a thumbnail
    $('.thumbnail').on('click', function(e) {
        e.preventDefault();
        var newSrc = $(this).attr('href');

        // Update the photo viewer with the clicked image
        $('#main-img').fadeOut(100, function() {
            $(this).attr('src', newSrc).fadeIn(100);
        });

        // Update active thumbnail styling
        $('.thumbnail').removeClass('active');
        $(this).addClass('active');
    });

    // Automatically click the first thumbnail to display the first image
    $('.thumbnail').first().click();

    // Event handler for clicking a photo box to show modal
    $('#photo-viewer').on('click', '.photo-box', function(e) {
        e.preventDefault();

        // Clone the image and adjust styling for modal
        var $clonedImage = $(this).find('img').clone().css({
            marginLeft: 0,
            marginTop: 0,
            width: '800px',
            height: '450px'
        });

        // Set the cloned image in the modal and display it
        $('#modal-image').html($clonedImage);
        $('#modal').show();
    });

    // Close the modal when the close button is clicked
    $('#modal').on('click', '.close-modal', function() {
        $('#modal').hide();
    });
});
