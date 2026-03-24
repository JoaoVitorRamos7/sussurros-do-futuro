
import { Link } from "react-router-dom"

function Home() {
    return (
        <main>
            <section id="section-title"><h1>Susurros do Futuro</h1></section>
            <section id="about">
                <h1 id='title-about'>Sobre</h1>
                <p id='text-about'>
                    <span> Susurros do futuro é uma iniciativa criada pelo desenvolvedor João Almeida.</span>
                    <span> Pautado inicialmente por uma conversa entre seu parceiro de desenvolvimento Lúcio Brito. Lúcio se comprementeu  e prestou surporte para a realização e entrega do software. </span><br />
                    <span> O objetivo é trabalhar as hard-skills com um desenvolvimento maduro para a criação de software em conjuto com <br /> boas práticas que o mercado de T.I espera de um Engenheiro de Software. </span>
                    <span> Apesar de João não possuir graduação em nenhuma área da tecnologia, seu desejo e curiosidade transformou esta <br /> barreira um desafio a ser comprido. </span>
                    <span> Sobre a escolhe da stack para o desenvolvimento, João e Lúcio avaliaram que para facilitar a entrega do software,<br /> e alcançar o objetivo de ingressar o João na área, a utilização da linguagem de programação JavaScript é essencial. </span>
                </p>
            </section>
            <section id="start-game">
                <p>Está confuso em qual área ingressar na tecnologia?</p>
                <Link id='button-start-game'  to="/fluxo">Jogue agora</Link>
            </section>
        </main>
    )
}

export default Home