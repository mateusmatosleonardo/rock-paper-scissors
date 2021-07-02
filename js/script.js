var elementos = document.querySelectorAll('.player-options div > img');

    for(var i = 0; i < elementos.length; i++){
        elementos[i].addEventListener('click',(t)=>{
            t.target.style.opacity = 1;
        });
    }