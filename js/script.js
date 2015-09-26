$(document).ready(function() {

    $('.mobile').click(function(e) {
        e.preventDefault();
        console.log('menu clicked!');
        $('#show-this-on-click').slideToggle('slow', function() {
        });
    });

});