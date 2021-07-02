var elementos = document.querySelectorAll('.player-options div > img');

var playerOpt = "";

    /* chamando função de reset */
    function resetOpacityPlayer(){
        for(var i = 0; i < elementos.length; i++){
            elementos[i].style.opacity = 0.4;
        }
    }

    for(var i = 0; i < elementos.length; i++){
        /* adicionando parameters t para chamar target pq é uma função CallBack */
        elementos[i].addEventListener('click',(t)=>{
            /* função para resetar opacidade */
            resetOpacityPlayer();
            t.target.style.opacity = 1;
        });
    }