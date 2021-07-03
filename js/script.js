var elementos = document.querySelectorAll('.player-options div > img');

var playerOpt = "";

    function inimigoJogar(){
        /* o Math.random ele retorna pra gente um número entre 0 e 1 */
        /* depois multiplico por 3 para retornar 0, 1 e 2 */
        /* o Math.floor arredonda esse número */
        let rand = Math.floor(Math.random()*3);
        
        const enemyOptions = document.querySelectorAll('.enemy-options div');
            for(var i = 0; i < enemyOptions.length; i++){
                if(i == rand){
                    enemyOptions[i].childNodes[0].style.opacity = 1;
                }
            }
    }

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
            playerOpt = t.target.getAttribute('opt');

            inimigoJogar();
        });
    }