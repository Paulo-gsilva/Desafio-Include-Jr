import 'core-js/stable';
import './assets/css/style.scss';

import araki1 from './assets/img/hirohiko-araki.jpg';
import araki2 from './assets/img/hirohiko-araki-2.jpg';
import araki3 from './assets/img/hirohiko-araki-3.jpg';
import art1 from './assets/img/arte1.jpg';
import art2 from './assets/img/arte2.jpg';
import art3 from './assets/img/arte3.jpg';
import art4 from './assets/img/arte4.jpg';
import art5 from './assets/img/arte5.jpg';
import manga1 from './assets/img/part1.jpeg';
import manga2 from './assets/img/part2.jpeg';
import manga3 from './assets/img/part3.jpeg';
import manga4 from './assets/img/part4.jpeg';
import manga5 from './assets/img/part5.jpg';
import manga6 from './assets/img/part6.jpg';
import manga7 from './assets/img/part7.jpeg';
import manga8 from './assets/img/part8.jpg';
import intro from './assets/img/jojointro.png';
const arrayManga = [manga1, manga2, manga3, manga4, manga5, manga6, manga7, manga8];
const arrayArt = [art1, art2, art3, art4, art5];
const arrayAraki = [araki1, araki2, araki3];
const authorImg = document.querySelectorAll('.author-img');
const divArt = document.querySelectorAll('.art-img');
const divManga = document.querySelectorAll('.manga-img');
const introImg = document.querySelector('.intro-img');

function showArakiImages() {
    authorImg.forEach((img, index) => {
        let i = arrayAraki[index];
        img.setAttribute('src', i);
    });
}

function showIntroJogoImage() {
    introImg.setAttribute('src', intro);
}

function showArtJojo() {
    divArt.forEach((img, index) => {
        let i = arrayArt[index];
        img.setAttribute('src', i);
    });
}

function showMangaJojo() {
    divManga.forEach((manga, index) => {
        let i = arrayManga[index];
        manga.setAttribute('src', i);
    });
}


showArakiImages();
showArtJojo();
showMangaJojo();
showIntroJogoImage()