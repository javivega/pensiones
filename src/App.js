import logo from './logo.svg';
import './App.css';

import NewsRoom from './components/NewsRoom.jsx';
import Chip from './components/Chip.jsx';

import ArrowDown from './icons/arrow-down.svg'
import Asteriscs from './assets/asteriscs.png'
import NewsData from './data/newsRoomData.json' // Importa el objeto completo
import Ratio from './assets/Frame 115.png'

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
      <article className='ratio-section'>
        <h2> Número de trabajadores por pensionista</h2>
        <div className='ratio-section--chip-container'>
          <Chip>2020</Chip>
          <Chip>2050</Chip>
        </div>
        <img src={Ratio} alt="" />
        <aside className='ratio-section--description 2020'>
          <h4>Cada pensión es pagada por 3 trabajadores.
          Para 1209384 pensiones existen 1029834 trabajadores.</h4>
          <span>2:1</span>
        </aside>
        <aside className='ratio-section--description 2050'>
          <h4>Cada pensión es pagada por 3 trabajadores.
          Para 1209384 pensiones existen 1029834 trabajadores.</h4>
          <span>1:1</span>
        </aside>
      </article>
    </>
  )
}

export default App;