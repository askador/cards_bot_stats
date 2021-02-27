/**
 * JQuery для анимации кнопки Подробнее
 */

var display = 'flex'

$('.game__bar.durak').on('click',function(){    
    $('.game__bar__ico.durak').toggleClass('open') 
    $('.game__stats.durak').slideToggle(300).toggleClass('open').css({'display' : display})
});


$(window).width(function (index, width) {
    console.log(width)
    if (width <= 1100) {
        display = 'block'
    }
    else {
        display = 'flex'
    }

    $('.game__stats.debertz.open').css({'display' : display})
})

$(window).resize(function(index) {
    if (index.target.innerWidth <= 1100) {
        display = 'block'
    }
    else {
        display = 'flex'
    }
    $('.game__stats.debertz.open').css({'display' : display})
})