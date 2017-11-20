var boxText = document.getElementById('insert-text');
var button = document.getElementById('save');
var counter = document.getElementById('counter');

button.addEventListener('click', tweet);
boxText.addEventListener('keydown', areaSize);
boxText.addEventListener('keyup', countChar);

// función que crea tweet en html
function tweet(event) {
  if (boxText.value && boxText.value !== ' ') {
    var textTweet = boxText.value;
    var doTweet = document.createElement('div');
    var containerTweet = document.querySelector('.container-tweet');
    doTweet.textContent = textTweet + ' ' + time();
    containerTweet.appendChild(doTweet);
    boxText.value = '';
    counter.textContent = 140;
    doTweet.classList.add('tweet-style');
  }
}

// función que regula el tamaño de textarea
function areaSize(event) {
  var numberColum = boxText.getAttribute('cols');
  var numberRow = boxText.getAttribute('rows');
  if (boxText.value.length !== 0) {
    if (event.keyCode == 13 || parseInt(boxText.value.length) % 80 == 0) {
      var rowsFinal = parseInt(numberRow) + 1;
      boxText.setAttribute('rows', rowsFinal);
    } else if (event.keyCode == 8) {
      rowsFinal = parseInt(numberRow) - 1;
      boxText.setAttribute('rows', rowsFinal);
    }
  } else if (boxText.value.length == 0) {
    rowsFinal = 2;
    boxText.setAttribute('rows', rowsFinal);
  }
}

// función que cuenta caracteres y cambia de color al contador
function countChar() {
  var numChar = boxText.value.length;
  var showNumberChar = 140 - numChar;
  counter.textContent = showNumberChar;
  if (numChar > 0 && numChar < 119) {
    counter.classList.add('char-black');
    counter.classList.remove('char130');
    counter.classList.remove('char120');
    counter.classList.remove('char-red');
    button.addEventListener('click', tweet);
  } else if (numChar >= 120 && numChar <= 130) {
    counter.classList.add('char120');
    counter.classList.remove('char130');
    counter.classList.remove('char-black');
    counter.classList.remove('char-red');
    button.addEventListener('click', tweet);
  } else if (numChar > 130 && numChar <= 140) {
    counter.classList.add('char130');
    counter.classList.remove('char120');
    counter.classList.remove('char-black');
    counter.classList.remove('char-red');
    button.addEventListener('click', tweet);
  } else if (numChar > 140) {
    button.removeEventListener('click', tweet);
  }
}

// función que proporciona hora actual
function time() {
  var actualDate = new Date();
  var actualHour = actualDate.getHours() + ':' + actualDate.getMinutes();
  return actualHour;
}
