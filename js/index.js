$(document).ready(function() {
    $('.tab_container').on('click', '.t-link-box:not(.show)', function() {
        if (!$(this).hasClass('active')) {
            $('.tab_container').find('.t-link-box.active').toggleClass('active');
            $(this).toggleClass('active');    
            $('.sliders').find('div.active').slideUp(300).toggleClass('active');
            $(`#${$(this).attr('data-target')}`).slideDown(300).toggleClass('active');
        }
    });
});