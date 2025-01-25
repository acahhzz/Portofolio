// event scrolling

$('.page-scroll').on('click', function (e) {

    let element = $(this).attr('href');
    
    let jarak = $(element);

// console.log(jarak.offset().top)

    $('html, body').scrollTop();

    e.preventDefault();

});