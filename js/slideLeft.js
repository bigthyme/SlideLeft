//By: Anthony Singhavong
//jquery plugin: slideLeft
//The plugin will take any div called sidePanel and slide it left. 

(function($)
{
    $.fn.slideLeft = function()
    {
    	var bounceTimer = setTimeout(function(){
            console.log('Timer Started!');
            $('#panelHandle').effect("bounce", { direction:'left', times:3}, 900);
        }, 2000);

        $('#panelHandle').click(function(event) {
            clearTimeout(bounceTimer);
            console.log('Timer Terminated!');
            //On Hover animate slide panel when hovered on
            $('#sidePanel').stop(true, false).animate({
                'left': '0px'
            }, 800);
            //Stops DOM from loading up events for this object.
            event.stopPropagation();
            //Prevent default behavior of this object. 
            event.preventDefault();
        });
          $('html').click(function() {
                //$('#panelHandle').show().delay(700);
                jQuery('#sidePanel').animate({
                left: '-289px'
                }, 500);
             });
    };
})(jQuery);

$(document).ready(function()
{
    $("").slideLeft();
});