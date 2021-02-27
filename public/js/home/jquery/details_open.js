/**
 * JQuery для анимации кнопки Подробнее
 */
$('.details__bar').on('click',function(){    
    $('.details__ico').toggleClass('open') 
    $('.details__text').slideToggle(300).toggleClass('open')
});