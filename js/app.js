var boxText = document.getElementById('insert-text');
var button = document.getElementById('save');
var lista = document.getElementById('container-text');
var counter = document.getElementById('counter');

button.addEventListener('click', tweet);

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