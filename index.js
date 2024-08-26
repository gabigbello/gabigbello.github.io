//CURSOR

$(document).ready(function() {
    const cursor = $('.cursor');
    const links = $('a');
    const buttons = $('button');

    $(window).on("mousemove", function(e) {
        let x = e.pageX;
        let y = e.pageY;

        cursor.each(function() {
            $(this).css({
                left: `${x}px`,
                top: `${y}px`
            });
        });
    });
    links.add(buttons).on('mouseenter', function() {
        cursor.addClass("hover");
    }).on('mouseleave', function() {
        cursor.removeClass("hover");
    });
});

//NAVBAR

const menu = $('.navbar a');

menu.on('click',function(){
    menu.removeClass('active');
    $(this).addClass('active');
})

//TIMELINE

const tabs = $('button.tab_btn');
const content = $('.content');

tabs.each(function(index,tab){
    $(tab).on('click',function(){
        tabs.removeClass('active');
        $(this).addClass('active');

        content.removeClass('active');
        content.eq(index).addClass('active');
    })
})

//CONHECIMENTOS E CERTIFICADOS
const filterbtn = $('.knowledge .conhecimentos ol li');
const filtercertificados = $('.certificados .certificadoscont ol li');
const cleanButton = $('#clean');
const plus_but = $('#others-course');

window.onload = function() {
    cleanButton.addClass('active');
    filtercertificados.addClass('active animate');
};

filterbtn.each(function(index, button) {
    $(button).on('click', function() {
        filterbtn.removeClass('active');
        $(this).addClass('active');

        filtercertificados.removeClass('active animate'); // Remove classes for all certificates

        const clickedButtonId = $(this).attr('id');

        if (clickedButtonId === 'clean') {
            // Clear filters and restart animation
            filtercertificados.removeClass('animate'); // Remove animation class to reset
            setTimeout(() => {
                filtercertificados.addClass('animate'); // Re-add animation class after reset
                filtercertificados.addClass('active'); // Ensure all items are active
            }, 10); // Small timeout to allow the class removal to take effect
        } else {
            filtercertificados.each(function() {
                if ($(this).attr('id') === clickedButtonId) {
                    $(this).addClass('active');
                }
            });

            if (cleanButton.hasClass('active')) {
                filtercertificados.addClass('animate');
            } else if ($('.knowledge .conhecimentos ol li.active').length === 0) {
                filtercertificados.addClass('animate');
            } else if (plus_but.hasClass('active')) {
                filtercertificados.addClass('animate');
            }
        }
    });
});

if (filterbtn.filter('.active').length === 0) {
    filtercertificados.addClass('animate');
}

//PROJETOS

const panels = $('.panel');

panels.on('click', function(event) {
    if ($(event.target).is('a') || $(event.target).closest('a').length) {
    }
    
    panels.removeClass('active');
    $(this).addClass('active');
});