import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/18597341?s=460&u=d4a6479fae12995534739952864c145a83431836&v=4" alt="Wellerson Prenholato"/>
                        <div>
                            <strong>Wellerson Prenholato</strong>
                            <span>Programação</span>
                        </div>
                    </header>

                    <p>Descrição bla bla bla </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$70,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsAppIcon} alt="WhatsApp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;