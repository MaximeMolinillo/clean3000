
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const NotFound = () =>
    <div className='smallcontainer'>
          
        <h2 className='error'>Erreur 404 page non touvée</h2>
        <header className="App-header">
                <Header />
            </header>
     <Link  className='sC' to={"/"}>Retour à l'accueil</Link>
    </div>
export default NotFound