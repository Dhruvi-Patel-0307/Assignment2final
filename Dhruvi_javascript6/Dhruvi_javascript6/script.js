$(document).ready(function () {
    // Accordion behavior
    $(".accordion-label").click(function () {
        $(this).next(".accordion-content").slideToggle();
        $(".accordion-content").not($(this).next()).slideUp();
    });
    
    // Hide all accordion contents initially
    $(".accordion-content").hide();
});
