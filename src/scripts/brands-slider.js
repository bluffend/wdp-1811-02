const brandsSlider = tns({
    container: '.brandsSlider',
    loop: true,
    items: 1,
    slideBy: 'page',
    nav: false,
    gutter: 25,
    edgePadding: 20,
    autoplay: true,
    center: true,
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    controlsContainer: "#brands-controls",
    responsive: {
        640: {
            items: 2,
        },
        
        768: {
            items: 3,
        },
        900: {
            items: 4,
        },
        1200: {
            items: 6,
        }
    }
});
