$(document).ready(function () {

    $('[data-toggle="toggle-nav"]').on('click', function () {
        $(this).closest('nav').find($(this).attr('data-target')).toggleClass('hidden');
        return false;
    });

    feather.replace();

    var scroll = new SmoothScroll('a[href*="#"]');

    $('#slider-1').slick({
        infinite: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });

    $('#slider-2').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        customPaging: function (slider, i) {
            return '<div class="bg-white br-round w-1 h-1 opacity-50 mt-5" id=' + i + '> </div>'
        },
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, ]
    });

    function updateCounter(elementId) {
        const startDate = new Date('2024-07-19');
        const currentDate = new Date();

        const timeDifference = currentDate - startDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        document.getElementById(elementId).innerText = `Hace ${daysDifference} día(s) por Fernando`;
    }

    setInterval(() => {
        updateCounter('counter1');
        updateCounter('counter2');
        updateCounter('counter3');
        updateCounter('counter4');
    }, 1000);

    updateCounter('counter1');
    updateCounter('counter2');
    updateCounter('counter3');
    updateCounter('counter4');
});
