import logo from './logo.svg';
import './App.css';

import NewsRoom from './components/NewsRoom.jsx';
import Chip from './components/Chip.jsx';
import CardInfo from './components/CardInfo.jsx';

import ArrowDown from './icons/arrow-down.svg'
import Asteriscs from './assets/asteriscs.png'
import NewsData from './data/newsRoomData.json' // Importa el objeto completo
import pensionsExp from './assets/pensions-exp.png'
import Ratio from './assets/Frame 115.png'
import Pyramid from './assets/ex-pyramid.png'
import NominaGraph from './assets/nomina-graph.svg'
import ChipContainer from './components/ChipContainer.jsx';


function App(){
  const Pensionists = [
    {
      chip: "2020"
    },
    {
      chip: "2050"
    }
  ]

  const PyramidData = [
  
    {
        "chip": "1990",
        "title": "title",
        "description": "España tenía aproximadamente 38,8 millones de habitantes. La población joven era predominante, con una base amplia de personas en edad laboral y una proporción menor de personas mayores."
    },
    {
        "chip": "2000",
        "title": "title",
        "description": "La población aumentó a cerca de 40,9 millones. Aunque seguía habiendo una proporción significativa de jóvenes, comenzaba a notarse un ligero envejecimiento de la población."
    },
    {
        "chip": "2010",
        "title": "title",
        "description": "La población alcanzó aproximadamente 47 millones. Este incremento se debió en parte a la inmigración. Sin embargo, continuaba la tendencia hacia el envejecimiento, con un aumento en la esperanza de vida y una disminución en la tasa de natalidad."
    },
    {
        "chip": "2020",
        "title": "title",
        "description": "La población se situó en torno a 47,3 millones. La estructura demográfica reflejaba un notable envejecimiento, con una proporción creciente de personas mayores de 65 años y una disminución en la población joven, lo que planteaba desafíos para el sistema de pensiones y el mercado laboral."
    },
    {
        "chip": "2030",
        "title": "title",
        "description": "Se estima que la población disminuirá a aproximadamente 46 millones. La tendencia al envejecimiento se acentuará, con una mayor proporción de personas en edades avanzadas y una reducción en la población en edad laboral, lo que podría afectar la sostenibilidad del sistema de pensiones públicas."
    },
    {
        "chip": "2040",
        "title": "title",
        "description": "Las proyecciones indican una población de alrededor de 45 millones. El envejecimiento poblacional será más pronunciado, con un incremento significativo en la proporción de personas mayores de 80 años, aumentando la presión sobre los sistemas de salud y pensiones."
    },
    {
        "chip": "2050",
        "title": "title",
        "description": "Se anticipa una reducción de la población a cerca de 43 millones. La estructura demográfica mostrará una base estrecha en las cohortes jóvenes y una cima ancha en las edades avanzadas, reflejando una población predominantemente envejecida y planteando retos económicos y sociales significativos."
    },
    {
        "chip": "2060",
        "title": "title",
        "description": "Las proyecciones sugieren una población de aproximadamente 41 millones. La tendencia de envejecimiento continuará, con una proporción considerable de la población en edades muy avanzadas, lo que requerirá adaptaciones en las políticas públicas relacionadas con las pensiones y la atención sanitaria."
    }
    
]; 



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
        <ChipContainer
          direction = "horizontal"
          chips = {Pensionists}
        />
        <img src={Ratio} alt="" />
        <aside className="ratio-section--description year-2020">
          <h4>Cada pensión es pagada por 3 trabajadores.
          Para 1209384 pensiones existen 1029834 trabajadores.</h4>
          <span>2:1</span>
        </aside>
        <aside className='ratio-section--description'>
          <h4>Cada pensión es pagada por 3 trabajadores.
          Para 1209384 pensiones existen 1029834 trabajadores.</h4>
          <span>1:1</span>
        </aside>
      </article>

      <article className='pyramid-section'>
        <h2>envejecimiento poblacional</h2>
        <section className='pyramid-section--container'>
          <ChipContainer direction="vertical" chips={PyramidData}/>
          <div className='pyramid-section--image-container'>
            <img src={Pyramid} alt="" />
          </div>
        </section>  
      </article>

      <article className='expenditure-section'>
        <h2>Gasto insostenible</h2>
        <section className='expenditure-section--container'>
          <CardInfo title="El mayor gasto del gobierno" description="Las pensiones ocupan la primera posici’on del gasto gubernamental de España, con un 24%"/>
          <img src={pensionsExp} alt="" />
          <div className='expenditure-section--percentage'>
            <h4>42%</h4>
            <span>190.684.246.150€</span>
          </div>
        </section>
      </article>

      <article className='taxes-section'>
        <h2>¿Y si subimos más los impuestos?</h2>
        <section className='taxes-section--paper'>
          <h4>Nómina</h4>
          <div className='taxes-section--paper--mid'>
            <div>
              <p>Salario bruto <span>2.083€</span></p>
              <p>Coste para la empresa <span>2.500€</span></p>
              <p>salario neto <span>1.500€</span></p>
            </div>
            <img src={NominaGraph} alt="" />
          </div>
          <div className='taxes-section--paper--end'>
            <div className='tag'><span>Impuestos sobre coste total de nómina</span></div>
            <p><span>~</span>40%</p>
          </div>
        </section>
      </article>
    </>
  )
}

export default App;