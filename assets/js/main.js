/**
 * Menu Fixo
 */


/**
 * Dark mode
 * Pega o botão
 */

let mode = document.querySelector('.changeMode');

/**
 * Se o botão for clicado
 */

mode.onclick = () => {

    /**
     * Pega as veriaveis para adicionar a cor escura
     */

    // let body = document.querySelector('body');
    // let mostragem = document.querySelector('.mostragem');
    // let cards = document.querySelectorAll('.card');
    // let destaques__card = document.querySelectorAll('.destaques__card');
    // let rodape = document.querySelector('.rodape');
    // let rodape__copyright = document.querySelector('.rodape__copyright');


    // body.style.background = "var(--darkmode-one)";
    // mostragem.style.background = "var(--darkmode-two)";
    // for (var i = 0; i < cards.length; i++) {
    //     cards[i].style.backgroundColor = "var(--darkmode-three)";
    // }
    // for (var i = 0; i < destaques__card.length; i++) {
    //     destaques__card[i].style.backgroundColor = "var(--darkmode-three)";
    // }
    // rodape.style.background = "var(--darkmode-two)";
    // rodape__copyright.style.background = "var(--darkmode-three)";
    
    document.querySelector('.changeMode').classList.toggle('light-mode');
    document.querySelector('.changeMode').classList.toggle('dark-mode');

}
