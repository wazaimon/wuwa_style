import { useState } from 'react'
import { Sparkle } from 'lucide-react'
// img importadas
import changli from './assets/changli.png'
import cantarella from './assets/cantarella.png'
import augusta from './assets/augusta.png'
import verina from './assets/verina.png'
import zhezhi from './assets/zhezhi.png'
import jinshi from './assets/jinshi.png'
import yinlin from './assets/yinlin.png'
import jiyan from './assets/jiyan.png'
import calcharo from './assets/calcharo.png'
import baizhi from './assets/baizhi.png'
import mortefi from './assets/mortefi.png'
import mecha from './assets/mecha.png'
import fdp from './assets/fdp.png'
import fleurdelys from './assets/fleurdelys.png'
import jue from './assets/jué.png'
import lorelei from './assets/lorelei.png'

import './App.css'

export default function App() {

  const [hoverMonster, setHoverMonster] = useState(null)

  return (
    <>
      <main>

        {/* HEADER */}
        <header>
          <h1 className='titulo'>Times</h1>

          <button className='record'>
            record
          </button>

          <button className='sair'>
            <Sparkle className='sparkle' />
            <Sparkle className='sparkle1' />
          </button>
        </header>

        {/* PONTOS (PREVIEW DO MONSTRO) */}
        <section className='pontos'>
          {hoverMonster && (
            <img src={hoverMonster} className="preview" />
          )}
        </section>

        {/* TIMES */}
        <section className='cards'>

          <div className="times">
            <div className="personagens"><img src={augusta} alt="Augusta" /></div>
            <div className="personagens"><img src={calcharo} alt="Calcharo" /></div>
            <div className="personagens"><img src={verina} alt="Verina" /></div>
          </div>

          <div className="times">
            <div className="personagens"><img src={calcharo} alt="Calcharo" /></div>
            <div className="personagens"><img src={yinlin} alt="Yinlin" /></div>
            <div className="personagens"><img src={baizhi} alt="Baizhi" /></div>
          </div>

          <div className="times">
            <div className="personagens"><img src={changli} alt="Changli" /></div>
            <div className="personagens"><img src={zhezhi} alt="Zhezhi" /></div>
            <div className="personagens"><img src={verina} alt="Verina" /></div>
          </div>

          <div className="times">
            <div className="personagens"><img src={jiyan} alt="Jiyan" /></div>
            <div className="personagens"><img src={mortefi} alt="Mortefi" /></div>
            <div className="personagens"><img src={baizhi} alt="Baizhi" /></div>
          </div>

          <div className="times">
            <div className="personagens"><img src={jinshi} alt="Jinhsi" /></div>
            <div className="personagens"><img src={cantarella} alt="Cantarella" /></div>
            <div className="personagens"><img src={verina} alt="Verina" /></div>
          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer>

        <section className='inimigos'>

          <div
            className="monstros"
            onMouseEnter={() => setHoverMonster(mecha)}
            onMouseLeave={() => setHoverMonster(null)}
          >
            <img src={mecha} alt="mecha" />
          </div>

          <div
            className="monstros"
            onMouseEnter={() => setHoverMonster(fdp)}
            onMouseLeave={() => setHoverMonster(null)}
          >
            <img src={fdp} className='fdp' alt="fdp" />
          </div>

          <div
            className="monstros"
            onMouseEnter={() => setHoverMonster(fleurdelys)}
            onMouseLeave={() => setHoverMonster(null)}
          >
            <img src={fleurdelys} alt="fleurdelys" />
          </div>

          <div
            className="monstros"
            onMouseEnter={() => setHoverMonster(jue)}
            onMouseLeave={() => setHoverMonster(null)}
          >
            <img src={jue} alt="jué" />
          </div>

          <div
            className="monstros"
            onMouseEnter={() => setHoverMonster(lorelei)}
            onMouseLeave={() => setHoverMonster(null)}
          >
            <img src={lorelei} className='lorelei' alt="Lorelei" />
          </div>

        </section>

        <div className="cont">
          <button className='ver'>ver inimigos</button>
        </div>

        <div className='res'>
          <button className='umacoisa'>reiniciar tudo</button>
          <button className='duascoisa'>reiniciar</button>
        </div>

      </footer>
    </>
  )
}