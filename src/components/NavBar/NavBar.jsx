import React from 'react';
import "./NavBar.css";
import CartWidget from './CartWidget';

function NavBar(props) {
  return (
    <div className="navBarCompleto">
        <div className='logoYTitulo'>
            <img src={props.imgurl} className="imgLogo"/>
            <h1>{props.titulo}</h1>
        </div>
        <div>
            <ul>
                <li>
                    <a>fideos</a>
                </li>
                <li>
                    <a>pastas rellenas</a>
                </li>
                <li>
                    <a>especiales</a>
                </li>
            </ul>
        </div>
        <CartWidget/>
    </div>
  )
}

export default NavBar