/* HEADER */
//insere o header na página, com os botões, confere se o título da página inclui 'Fofocas' e se sim, aplica a opção de cirar card (não sendo possível criar cards nos outros htmls)

let header = `
<nav>
    <a href="./index.html"><img src="./img/fofoca.jpg" alt=""></a>
    <div>
        <ul>
            <li><a id="index" href="./equipe.html">Equipe</a></li>
            <li><a href="./contato.html">Contato</a></li>
        </ul>
    </div>
</nav>
`;

if(document.title.includes('Fofocas')) {
    header = `
    <nav>
        <a href="./index.html"><img src="./img/fofoca.jpg" alt=""></a>
        <div>
            <button id="addFofoca">Criar fofoca</button>
            <ul>
                <li><a id="index" href="./equipe.html">Equipe</a></li>
                <li><a href="./contato.html">Contato</a></li>
            </ul>
        </div>
    </nav>`
}

document.body.querySelector('header').innerHTML = header;

/* /HEADER */



/* FOOTER */

//Insere o footer na página, com o texto do copyright

let footer = `
<p>© Checkpoint I - Front End II</p>
`;

document.body.querySelector('footer').innerHTML = footer;

/* /FOOTER */

/* FIXED BUTTON */
//insere o botão de SaF - Serviço de atendimento ao fofoqueiro - logo acima do footer e fixo


let fixedButton = `
    <a id="fixedButton" href="https://www.facebook.com/Fofoqueiros-An%C3%B4nimos-578004255573249/" target="_blank" rel="noreferrer noopener".>
        <img src="./img/saf.png" alt="Serviço de Atendimento ao Fofoqueiro" title="SAF - Serviço de Atendimento ao Fofoqueiro">
    </a>
`
document.body.querySelector('section').innerHTML += fixedButton;

/* /FIXED BUTTON */