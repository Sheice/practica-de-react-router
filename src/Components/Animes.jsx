import React, { Fragment } from 'react';
import './../styles/Anime.css';


const Animes = ({title, info, img, alt}) => {
    return ( 
        <Fragment>
            <h2 className="title-anime">{title}</h2>
            <div className="container-img-anime">
                <p>{info}</p>
                <img src={img} alt={alt}/>
            </div>
        </Fragment>
     );
}
 
export default Animes;