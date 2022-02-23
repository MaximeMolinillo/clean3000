

import React from 'react';
import Header from './component/Header';
import './stylesheet/app.scss'
import { Link } from 'react-router-dom';
//import Client from './client';
import { useState } from 'react';
//import Client from './component/Client';



const App = () => {
  const [client, setClient] = useState(
    {
      name: "",
      date: "",
      observations: "",
      technicien: ""
    }

  );


  //  const getClient = async () =>

  const handlechange = (key, value) => {
    setClient({
      ...client,
      [key]: value
    });
  }

  const handleSubmit = (e) => {
    e.prenventDefault();

  }
  //}
  // class Client extends Component {
  //  state={
  //    client:"",
  //    date:"",
  //    observations:""
  //  }

  // handlechange = event => {
  //   this.setState({
  //     client: event.currentTarget.value
  //   });

  //   handleSubmit = event => {
  //     event.preventDefault();

  //     const id = new Date().getTime();
  //     const nom = this.state.client;

  //     this.props.AddClient({ id, nom});
  //     this.setState({ client: ""})
  //   }
  // }



  // }
  // const listClient = client.map
  //   (clients => {
  //     return (
  //       <Client
  //         key={clients.id }
  //         name={clients.name}
  //         date={clients.date}
  //         observations={clients.observations}
  //         technicien={clients.technicien}
  //  />
  // )
  //   })

  // function getValue() {
  //   let input = document.getElementById("in").value;
  //   // e.prenventDefault();
  //   alert(input)
  // }

  // let nameUser = document.querySelector('.inputName');
  // nameUser.addEventListener("change", ()=> {
  // nameUser = nameUser.value;

  // })



  return (
    <div className="App-container">
      <header className="App-header">
        <Header />
      </header>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Avis de passage</h1>
        <div>
          <label htmlFor="inputName">Nom entreprise / ou client</label>
          <input
            placeholder='Entrez votre nom'
            type="text"
            className='inputName'
            value={client.name}
            id='in'
            onChange={(e) => handlechange("name", e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="inputDate">
            Notre technicien est intervenu pour l'entretien de la vitrerie le :
          </label>
          <input
            placeholder='Entrez la date du jour'
            type="text"
            id='in'
            className='inputDate'
            value={client.date}
            onChange={(e) => handlechange("date", e.target.value)} />
        </div>

        <div>
          <label htmlFor="inputObs">
            OBSERVATIONS :
            {/* <textarea > */}
            <imput
              placeholder='Entrez vos remarques sur l' intervention
              type="text"
              id='in'
              className='inputObs'
              value={client.observations}
              onChange={(e) => handlechange("obervations", e.target.value)}
              cols="30" rows="10"
            />

          </label>
          <textarea />
        </div>

        <div>
          <label htmlFor="inputTech">Nom du technicien ayant éfféctué les travaux</label>
          <input
            placeholder='Entrez nom technicien'
            type="text"
            id='in'
            className='inputTech'
            value={client.technicien}
            onChange={(e) => handlechange("technicien", e.target.value)} />


        </div>
        {/* <button type='button' onClick={getValue()}>Enregistrer</button> */}

      </form>
      <div className='thanks'>
        <h2> CLEAN 3000 vous remercie pour votre confiance.</h2>
      </div>


      {/* <div>
  {listClient}
</div> */}

      <div className='btn'>
        <Link to={'/recap'}>
          <button className='link'>
            <h3>Récapitulatif</h3>
          </button>
        </Link>

      </div>
      <div>
        <img src="./clean3000-starter/logo-clean3000-mini.png" alt="" />
      </div>
    </div>
  );
}
//}
export default App;
