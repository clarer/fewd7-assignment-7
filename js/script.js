$(document).ready(function() {

    $('#hamburger').click(function() {
        console.log('menu clicked!');
        $('#show-this-on-click').slideToggle('slow');
    });

});