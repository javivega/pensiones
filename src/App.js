import logo from './logo.svg';
import './App.css';

import NewsRoom from './components/NewsRoom.jsx';

import ArrowDown from './icons/arrow-down.svg'
import Asteriscs from './assets/asteriscs.png'
import NewsData from './data/newsRoomData.json' // Importa el objeto completo

function App(){
  return(
    <>
      <article className='hero-section'>
        <div className='hero-section--container'>
         <section className='hero-section--upper-row'>
            <aside className='hero-section--subtitle'>
              <p>El futuro de las pensiones está en riesgo, y las generaciones más jóvenes serán las más afectadas. Descubre por qué es importante entenderlo ahora.</p>
            </aside>
            <aside className='hero-section--scroll-down'>
              <span>Scroll</span>
              <div className='hero-section--upper-row--icon-container'>
                <img src={ArrowDown} alt="arrow right"></img>
              </div>
            </aside>
          </section>
          <main className='hero-section--lower-row'>
            <NewsRoom News={NewsData.news}/> {/* Pasa la propiedad 'news' como prop */}
            <section className='hero-section--title'>
              <h1>¿Por qué te deberías preocupar por las <span className='hero-section--chip'><img src={Asteriscs} alt="" /></span> pensiones?</h1>
            </section>
          </main>
        </div>
      </article>
    </>
  )
}

export default App;