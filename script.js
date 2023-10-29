window.addEventListener('scroll', function(){
    var header = document.getElementById('h1');
    header.classList.toggle('sticky', window.scrollY >0);
});

// Container and for Features variables

const container = document.querySelector('.container');
const features = document.getElementById('features');

// Box 1, 2, 3 open buttons variables

const openBox1 = document.querySelector('.button-open-feature-box1');
const openBox2 = document.querySelector('.button-open-feature-box2');
const openBox3 = document.querySelector('.button-open-feature-box3');

// Now for the close button variables

// To make the open buttons functioning

openBox1.addEventListener('click', function(){
    container.classList.add('feature-box1-open');
});

openBox2.addEventListener('click', function(){
    container.classList.add('feature-box2-open');
});

openBox3.addEventListener('click', function(){
    container.classList.add('feature-box3-open');
});

// To make the close buttons functioning

const closeBox1 = document.querySelector('.button-close-feature-box1');
const closeBox2 = document.querySelector('.button-close-feature-box2');
const closeBox3 = document.querySelector('.button-close-feature-box3');

closeBox1.addEventListener('click', function(){
    container.classList.remove('feature-box1-open');
});

closeBox2.addEventListener('click', function(){
    container.classList.remove('feature-box2-open');
});

closeBox3.addEventListener('click', function(){
    container.classList.remove('feature-box3-open');
});