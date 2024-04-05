$(document).ready(function() {

    function toggleVisibility(textElement, isVisible) {
        if (isVisible) {
            textElement.css('visibility', 'visible');
        } else {
            textElement.css('visibility', 'hidden');
        }
    }

    // Loop through each skill icon
    $('.skill').each(function() {
        var icon = $(this);
        var iconClasses = icon.attr('class');

        var textElement = $('.' + iconClasses.split(' ')[1]).eq(1);

        icon.hover(
            function() {
                toggleVisibility(textElement, true);
            },
            function() {
                toggleVisibility(textElement, false);
            }
        );
    });

});
