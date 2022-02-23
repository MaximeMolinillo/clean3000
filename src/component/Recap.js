import React from 'react';
import { Link } from 'react-router-dom';
import clientItems from './Client';
import client from './Client'
//import App from '/src/App'
//import Client from '/src/App.js'
import Header from './Header';
// import nvclient from './Client';



const Recap = () => {
    return (
        <div className='recap-container'>
            <header className="App-header">
                <Header />
            </header>
            <div className='smallcontainer'>

                <div>
                    <h1>Fiche client</h1>

                    <ul className='fiche'>
                        <li>nom du client {`${client.name.value}`}</li>
                        <li>Dates des travaux
                            {Date.value}
                            {/* {`${client.date.value}`}  */}
                        </li>
                        <li>Observations du client
                            {/* {`${client.observations.value}`} */}
                        </li>
                        <li>Nom du technicien
                            {/* {`${client.technicien.value}`}  */}

                        </li>
                    </ul>


                </div>

                <div>
                    {clientItems}
                </div>
                <div>
                    <Link to={'/'}>
                        <button>
                            <h3>
                                Retour à l'accueil
                            </h3>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Recap