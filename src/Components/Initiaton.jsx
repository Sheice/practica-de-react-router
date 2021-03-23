import React from 'react';
import attack from './../img/attack.jpg';
import bleach from './../img/bleach.jpg';
import kimetsu from './../img/kimetsu.jpg';
import naruto from './../img/naruto.jpg';
import onePiece from './../img/onePiece.jpg';
import './../styles/Initiaton.css';


const Initiaton = () => {
    return ( 
        <div className="container-indes">
            <div className="title-info">
                <h2 className="subtitle-index">¿No sabes que ver?</h2>
                <p className="info-index">Aquí te mostramos varios animes muy buenos para entretenerte mucho tiempo. Algunos animes son muy largos como <strong>One Piece </strong> 
                que contiene mas de 900 capitulos, pero cada anime que verás aquí son de primera calidad, para que puedas disfrutar a pleno de un buen anime.</p>
            </div>
             <div className="container-img">
                 <img src={attack} alt="imágen de Attack On Tittan"/>
                 <img src={bleach} alt="imágen de Bleach"/>
                 <img src={onePiece} alt="imágen de One Piece"/>
                 <img src={kimetsu} alt="imágen de Kimetsu No Yaiba"/>
                 <img className="naruto" src={naruto} alt="imágen de Naruto"/>
             </div>
        </div>
     );
}
 
export default Initiaton;