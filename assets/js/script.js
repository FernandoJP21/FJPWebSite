$(document).ready(function () {

    // toggle mobile menu
    $('[data-toggle="toggle-nav"]').on('click', function () {
        $(this).closest('nav').find($(this).attr('data-target')).toggleClass('hidden');
        return false;
    });

    // feather icons
    feather.replace();

    // smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]');

    // tiny slider
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

    function updateCounter() {
        const startDate = new Date('2024-01-12');
        const currentDate = new Date();

        const timeDifference = currentDate - startDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        document.getElementById('counter').innerText = `Hace ${daysDifference} día(s) por Fernando`;
    }

    // Update the counter every second (1000 milliseconds)
    setInterval(updateCounter, 1000);

    // Initial update
    updateCounter();
});