import React from 'react'
import Head from 'next/head'


const conocenos = () => {
  return (
    <>
      <Head>
        <title>La Morocha - Conocenos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Conoce a quienes comforman nuestro gran equipo!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="styles-sheets" href="../stylescomponents.css" />
      </Head>
      <div className='body-sobre-nosotros '>
        <div className="contenedor-nosotros">
          <h1>La Morocha</h1>
          <hr className='hrsobrenosotros' />
          <div className="cont-img-sobrenosotros">

            <img src="/lamorochalogo2.jpg" alt="lamorochalogo" />
          </div>
          <h2>como surgio?</h2>
          <div className="sobrenosotrosuno">
            <div className="hamburguesauno-nosotros">
              <img className='imguno' src="/fondo3.jpg" alt="hamburguesa" /></div>
            <div className="textouno">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, consectetur nostrum? Distinctio dolor illo assumenda saepe alias quae exercitationem. Odit ipsum, earum eum expedita dolores quisquam ducimus tenetur aliquid ex.</p></div>
          </div>
          <div className="sobrenosotrosdos">
            <div className="textodos">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, consectetur nostrum? Distinctio dolor illo assumenda saepe alias quae exercitationem. Odit ipsum, earum eum expedita dolores quisquam ducimus tenetur aliquid ex.</p></div>
            <div className="hamburguesdos-nosotros">
              <img src="/fondo5.jpg" alt="hamburguesa" /></div>
          </div>
          <h2>Nuestro equipo</h2>
          <div className="equipocontenedor">
            <img src="/personauno.jpg" alt="empleado1" />
            <img src="/personauno.jpg" alt="empleado2" />
            <img src="/personauno.jpg" alt="empleado3" />
          </div>
        </div>


      </div>

    </>

  )
}

export default conocenos