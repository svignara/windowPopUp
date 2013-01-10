var windowPopUp = ( function(){

    return {
        
        init : function(){
            
            this.clickListen();
            
        },
        
        clickListen : function() {
            var screenWidth = window.screen.availWidth
            , screenHeight = window.screen.availHeight
            ;

            $('.windowPopUp').on('click', function(e){
  
            e.preventDefault();
            
            var element = $(this)
              , url = element.attr('href')
              , width = element.attr('data-popup-width')
              , height = element.attr('data-popup-height')
              , modalWidth = ( width > screenWidth ) ? screenWidth - 80 : width
              , modalHeight = ( height > screenHeight ) ? screenHeight - 80 : height
              , offsetLeft = (screenWidth - modalWidth) / 2
              , offsetTop = (screenHeight - modalHeight) / 2
              ;
    
                console.log(element, url, modalWidth, modalHeight, offsetTop, offsetLeft);
  
                window.open(url,'windowpopup','width='+ modalWidth +',height='+ modalHeight +',left='+ offsetLeft +',top='+ offsetTop +',screenX='+ offsetLeft +',screenY='+ offsetTop);

            });
        }
        
    }

}() );

$(document).ready(function(){
    windowPopUp.init();
});