var gallerySlider1 = tns({
    "container": ".gallerySlider1",
    "mode": "carousel",
    "items": 1,
    "gutter": 6,
    "edgePadding": 0,
    "fixedWidth": 70,
    "slideBy": "page",
    "prevButton": ".gSliderPrev1",
    "nextButton": ".gSliderNext1",
    "nav": false,
    "speed": 250,
    "loop": false,
    "mouseDrag": true,
});

var gallerySlider2 = tns({
    "container": ".gallerySlider2",
    "mode": "carousel",
    "items": 1,
    "gutter": 6,
    "edgePadding": 0,
    "fixedWidth": 70,
    "slideBy": "page",
    "prevButton": ".gSliderPrev2",
    "nextButton": ".gSliderNext2",
    "nav": false,
    "speed": 250,
    "loop": false,
    "mouseDrag": true,
});

var gallerySlider3 = tns({
    "container": ".gallerySlider3",
    "mode": "carousel",
    "items": 1,
    "gutter": 6,
    "edgePadding": 0,
    "fixedWidth": 70,
    "slideBy": "page",
    "prevButton": ".gSliderPrev3",
    "nextButton": ".gSliderNext3",
    "nav": false,
    "speed": 250,
    "loop": false,
    "mouseDrag": true,
});

var gallerySlider4 = tns({
    "container": ".gallerySlider4",
    "mode": "carousel",
    "items": 1,
    "gutter": 6,
    "edgePadding": 0,
    "fixedWidth": 70,
    "slideBy": "page",
    "prevButton": ".gSliderPrev4",
    "nextButton": ".gSliderNext4",
    "nav": false,
    "speed": 250,
    "loop": false,
    "mouseDrag": true,
});

const galleryPath = ["featured", "topseller", "saleoff", "toprated"];

let galleryMenu = document.querySelectorAll('.gallery-menu__link');
let thumbs = document.querySelectorAll('.js-galleryThumbs');
let bigImages = [];

function currentActiveMenu() {
    for (var item = 0; item < galleryMenu.length; item++)
        if (galleryMenu[item].classList.contains('active'))
            return item;
}

function preloadBigImages() {
    for (folder = 0; folder < galleryPath.length; folder++)
        for (var file = 0; file < 6; file++) {
            bigImages[folder * 6 + file] = new Image();
            bigImages[folder * 6 + file].src = "images/gallery/" + galleryPath[folder] + "/" + (("0" + (file + 1)).slice(-2)) + ".jpg";
        }
}

function clickLink() {
    let bigImageNode = document.querySelector('#nav-galleryContent .active .gallery-tabcontent__big-image');
    let currMenu = currentActiveMenu();

    function currentActiveThumb() {
        for (var item = (currMenu * 6); item < ((currMenu + 1) * 6); item++) {
            if (thumbs[item].classList.contains('thumbnails-image--active'))
                return item;
        }
    }

    if (!this.classList.contains('thumbnails-image--active')) {
        let activeThumb = currentActiveThumb();

        thumbs[activeThumb].classList.replace('thumbnails-image--active', 'thumbnails-image');

        this.classList.replace('thumbnails-image', 'thumbnails-image--active');
        activeThumb = currentActiveThumb();

        setTimeout(() => {
            bigImageNode.src = bigImages[activeThumb].src;
            bigImageNode.parentElement.style.opacity = "1";
        }, 250 / 2);

        bigImageNode.parentElement.style.opacity = "0";
    }
}

for (var item = 0; item < thumbs.length; item++) {
    thumbs[item].addEventListener('click', clickLink, false);
};

preloadBigImages();
