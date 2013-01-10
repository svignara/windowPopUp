var windowPopUp = ( function(){

    return {
        
        init : function(){
            
            this.clickListen();
            
        },
        
        clickListen : function() {            

            $('.windowPopUp').on('click', function(e){
  
            e.preventDefault();
            
            var availableWidth = window.screen.availWidth
              , availableHeight = window.screen.availHeight
              , availableLeft = window.screen.availLeft
              , screenWidth = window.screen.width
              , screenHeight = window.screen.height
              , element = $(this)
              , url = element.attr('href')
              , width = element.attr('data-popup-width')
              , height = element.attr('data-popup-height')
              , modalWidth = ( width > availableWidth ) ? screenWidth - 80 : width
              , modalHeight = ( height > availableHeight ) ? availableHeight - 80 : height
              , offsetLeft = (availableWidth - modalWidth) / 2
              , offsetTop = (availableHeight - modalHeight) / 2
              ;
              
              /*acount for users with dual-monitors (first for when monitor on left,
               *second condition for when monitor on right)
               */
                if (availableLeft < 0){
                    offsetLeft = availableLeft + offsetLeft;
                }else if (availableLeft > 0){
                    offsetLeft = availableLeft + (offsetLeft);
                }
    
                console.log(element, url, modalWidth, modalHeight, offsetTop, offsetLeft);
  
                window.open(url,'windowpopup','width='+ modalWidth +',height='+ modalHeight +',left='+ offsetLeft +',top='+ offsetTop +',screenX='+ offsetLeft +',screenY='+ offsetTop);

            });
        }
        
    }

}() );

$(document).ready(function(){
    windowPopUp.init();
});