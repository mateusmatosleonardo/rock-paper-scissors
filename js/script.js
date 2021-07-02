var elementos = document.querySelectorAll('.player-options div > img');

    for(var i = 0; i < elementos.length; i++){
        /* adicionando parameters t para chamar target pq é uma função CallBack */
        elementos[i].addEventListener('click',(t)=>{
            t.target.style.opacity = 1;
        });
    }