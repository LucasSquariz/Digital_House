/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from 'react';
import Swal from 'sweetalert2';
import Header from './Header/header';
import Banner from './Banner/banner';
import Footer from './Footer/footer';

//imagens
import reptiliano from './Imgs/reptilianos.png';
import face from './Imgs/face.jpg';
import lgpd from './Imgs/lgpd4.jpg';


import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      listaProjetos: [
        {
          id: 0,
          img: reptiliano,         
          titulo: 'reptiliano.com'
        },
        {
          id: 1,
          img: face,          
          titulo: 'Desbloqueador de senhas para Facebook'
        },
        {
          id: 2,
          img: lgpd,          
          titulo: 'Como burlar a LGPD'
        }
      ]
    }
  }

  erro = () => {
    Swal.fire({
      title: 'Oh no!',
      text: 'Zuckerberg comprou esse projeto e proibiu a divulgação do código fonte!!',
      icon: 'error',
      confirmButtonText: 'Maldito Zuck 🤬'
    })
  }

  render() {
    return (
      <>
        <div className="App">
          <Header />
          <Banner />
          <h1 className="text-center">Projetos</h1>
          <div id="card" className="grid col-md-auto">

            {
              this.state.listaProjetos.map(({ id, img, titulo }) => {
                return (

                  <div key={id}>
                    <div className="card">
                      <img src={img} class="card-img-top" alt={titulo} onClick={this.erro} />
                      <div className="card-body">
                        <h5 className="card-title" onClick={this.erro}>{titulo}</h5>
                        
                      </div>
                    </div>
                  </div>

                )
              })
            }
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

