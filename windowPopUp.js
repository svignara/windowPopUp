$('.windowPopUp').on('click', function(e){
  
  e.preventDefault();
  
  var element = $(this)
    , url = element.attr('href')
    , modalWidth = element.attr('data-popup-width')
    , modalHeight = element.attr('data-popup-height')
    , offsetLeft = (window.screen.availWidth - modalWidth) / 2
    , offsetTop = (window.screen.availHeight - modalHeight) / 2
    ;
    
  console.log(element, url, modalWidth, modalHeight, offsetTop, offsetLeft);
  
  window.open(url,'windowpopup','width='+ modalWidth +',height='+ modalHeight +',left='+ offsetLeft +',top='+ offsetTop +',screenX='+ offsetLeft +',screenY='+ offsetTop);

});