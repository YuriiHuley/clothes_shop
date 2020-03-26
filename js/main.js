$('.title').click(function(){
    $('.description').slideUp(); // закриваємо всі
    // якщо поточний опис не відкритий, то можемо його відкрити
    if($(this).closest('.detailAccordeon').find('.description').is(':hidden')){
        $(this).closest('.detailAccordeon').find('.description').slideDown(); // відкриваємо поточний
    }
});
