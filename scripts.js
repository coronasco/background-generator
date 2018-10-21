let css = document.getElementsByTagName('h1')[0];
let col1 = document.getElementById('color1');
let col2 = document.getElementById('color2');
let bg = document.getElementById('bg');

function setGradient() {
          bg.style.background = 'linear-gradient(to right, ' + col1.value + ', ' + col2.value + ')';
}

col1.addEventListener('input', setGradient);

col2.addEventListener('input', setGradient);
