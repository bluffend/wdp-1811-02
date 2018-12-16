'use strict'
 function Stars() {
     var allStars = document.getElementsByClassName('star');
     function toggleStar(event) {
        var child = event.target;
        var parent = child.parentNode;
        var children = parent.children;
        var starCounter = 0;
        // sprawdź czy element ma klasę ".star"
        if (child.classList.contains('star')) {
            // usuń klasę .full na wszystkich gwiazdkach
            for (var i = 0; i < children.length; i++) {
                children[i].classList.remove('full');
            }
            // policz liczbę gwiazdek, która mają być zaznaczone
            while ((child = child.previousElementSibling) != null) starCounter++;
            //zaznacz gwiazdki  
            for (var a = 0; a <= starCounter; a++) {
                parent.children[a].classList.toggle('markedStar');
            }
        }
    };
     function clearAllStars(event) {
        var child = event.target;
        var parent = child.parentNode;
        var children = parent.children;
        // sprawdź czy element ma klasę ".star"
        if (child.classList.contains('star')) {
            // usuń klasy .markedStar i .full na wszystkich gwiazdkach
            for (var i = 0; i < children.length; i++) {
                children[i].classList.remove('markedStar', 'full');
            }
        }
    };
     function starMouseOverAndOut(event) {
        if (event.target.parentElement.classList.contains('highlightedStars')) {
            return;
        } else if (event.target.parentElement.classList.contains('stars')) {
            toggleStar(event);
        } else return;
    };
     // ustaw nasłuchiwanie eventów dla wszystkich gwiazdek
    for (var i = 0; i < allStars.length; i++) {
         allStars[i].addEventListener('mouseover', function (event) {
            starMouseOverAndOut(event);
        }, false);
         allStars[i].addEventListener('mouseout', function (event) {
            starMouseOverAndOut(event);
        }, false);
         allStars[i].addEventListener('click', function (event) {
            clearAllStars(event)
            toggleStar(event);
            event.target.parentElement.classList.add('highlightedStars');
        }, false);
    }
}
 Stars();