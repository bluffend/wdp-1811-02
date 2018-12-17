var slider = tns({
    "container": ".blog-slider",
    "mode": "carousel",
    "items": 1,
    "slideBy": 1,
    "controls": false,
    "navContainer": ".blog-slider-dots",
    "gutter": 30,
    "edgePadding": 0,
    "speed": 250,
    "autoplay": true,
    "loop": true,
    "mouseDrag": true,
    "autoplayButtonOutput": false,
    responsive: {
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});