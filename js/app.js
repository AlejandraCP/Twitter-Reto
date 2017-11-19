var boxText = document.getElementById('insert-text');
var button = document.getElementById('save');
var lista = document.getElementById('container-text');
var counter = document.getElementById('counter');

button.addEventListener('click', tweet);
boxText.addEventListener('keyup', countChar);
boxText.addEventListener('keyup', buttonAble);

var numChar = parseInt(counter.dataset.number);

function tweet(event) {
    if (boxText.value) {
        var li = document.createElement('li');
        var parragr = document.createElement('p');
        var span = document.createElement('span');
        parragr.textContent = boxText.value;
        li.appendChild(parragr);
        lista.appendChild(li);
        parragr.appendChild(span);
        boxText.value = '';
        span.textContent = ' ' + time();
    }
}

function countChar() {
    counter.textContent = numChar;
    numChar = 139 - boxText.textLength;
    if (numChar < 0) {
        button.removeEventListener('click', tweet);
        counter.classList.add('charRed');
        counter.classList.remove('char130');
        counter.classList.remove('char120');
    } else if (numChar < 10) {
        button.addEventListener('click', tweet);
        counter.classList.add('char120');
        counter.classList.remove('charRed');
        counter.classList.remove('char130');
    } else if (numChar < 20) {
        button.addEventListener('click', tweet);
        counter.classList.add('char130');
        counter.classList.remove('char120');
    } else if (numChar >= 0) {
        button.addEventListener('click', tweet);
    } else if (numChar >= 0 || numChar <= 120) {
        counter.classList.add('charBlack');
        counter.classList.remove('char130');
        counter.classList.remove('char120');
    }
}

function buttonAble() {
    if (numChar < 0) {
        button.classList.add('buttonDisable');
    } else if (numChar >= 0) {
        button.classList.remove('buttonDisable');
    }
}