(function(){
    'use strict'

    var body = document.querySelector('body');
    var btns = document.getElementsByName('btn');
    var dark = document.getElementById('dark');
    var light = document.getElementById('light');

    btns.forEach(btn => {
        btn.addEventListener('click', function(){
            body.classList.toggle('dark');
            dark.classList.toggle('hidden')
            light.classList.toggle('hidden')
        }, false)
    })


})();