'use strict';

mainApp.controller('CarouselCtrl', function ($rootScope, $scope, $modal) {
    var slides = $scope.slides = [];
    slides.push({ image: 'lawyers-img/1.jpg' });
    slides.push({ image: 'lawyers-img/2.jpg' });
    slides.push({ image: 'lawyers-img/3.jpg' });
    slides.push({ image: 'lawyers-img/4.jpg' });
    slides.push({ image: 'lawyers-img/5.jpg' });
    slides.push({ image: 'lawyers-img/6.jpg' });
});