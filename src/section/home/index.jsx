
import fundo from '../../assets/fundo2.jpg';
import foto from '../../assets/fotominha.jpg';

import './home.css'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Home() {

  return (
    <div id='home' className='home'>
      <div className="imgHome">
        <img src={fundo} alt='ImagemFundo' className='ImagenFundo' />
        <div className='todo'>
          <div className='title'>
            <h1>Bem Vindo</h1>
          </div>
          <div className='title2'>
            <h1>Portifolio Jardel Silva</h1>
          </div>
          <div className='iconsTodo' >
            <div className='linkedin'>
              <FaLinkedin size={80} className='icone' />
            </div>
            <div className='instagram'>
              <FaInstagram size={80} className='icone'/>
            </div>
            <div className='github'>
              <FaGithub size={80} className='icone'/>
            </div>
          </div>
          <img  src={foto} className='fotoperfil'/>
        </div>



      </div>
    </div>
  )
}