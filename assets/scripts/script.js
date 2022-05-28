let applause = document.querySelector('#applause-button');

applause.addEventListener('click', function (event) {
    document.querySelector('#counter').innerText++;
});