import { useState } from 'react'
import './App.css'

export default function App() {
 

  return (
      <>
      <main>
        <header>  
            <button>
              record
            </button> 
          </header>
        <section className='pontos'>
          <img src=""  />
          <h1>
            <p>  </p> 
            </h1>
        </section>
        <section className='cards'>
        <div className="times"></div>
        <div className="times"></div>
        <div className="times"></div>
        <div className="times"></div>
        <div className="times"></div>
        </section>
      </main>
      <footer>
        <section className='inimigos'>
        <div className="monstros"></div>
        <div className="monstros"></div>
        <div className="monstros"></div>
        <div className="monstros"></div>
        <div className="monstros"></div>
        </section>
        <button>ver inimigos</button>
        <div className='res'>
        <button className='umacoisa'>reiniciar tudo</button>
        <button >reiniciar</button>
        </div>
      </footer>
    </>
  )
}

