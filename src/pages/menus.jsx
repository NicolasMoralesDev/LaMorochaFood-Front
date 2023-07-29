
import { traerMenus } from '@/helpers/getOfertas';
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Card from "react-bootstrap/Card";

const menus = () => {

  const [menus, setMenus] = useState([]);


  const traerData = async () => {
    const response = await traerMenus();
    setMenus(response);

    console.log(menus);

  }

  useEffect(() => {

    traerData()

  }, [traerData])

  return (


    <>
      <Head>
        <title>La Morocha - Menus</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="styles-sheets" href="../stylescomponents.css" />
      </Head>
      <div className="subnav">
        <a href="#titulo-ofertas">pizzas</a>
        <a href="#">Empanadas</a>
        <a href="#">hamburguesa</a>
        <a href="#">extras</a>
      </div>
      <main className='main-menus p-2'>
        <h4 id='titulo-ofertas' className='text-center fs-2'>PIZZA</h4>
        <div className="contenedor-card-menus">

          {
            menus.map((index) => (

              <Card id="cardd" className="card-ofertas text-light" key={index.id}>
                <div className="img-oferta">
                  <Card.Img variant="top" src={index.img} />
                </div>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <Card.Title className="text-center">{index.nombre}</Card.Title>
                  <Card.Title className="text-center">
                    {index.descripcion}
                  </Card.Title>
                  <Card.Title className="text-center">$ {index.precio}</Card.Title>
                  <button type="button" className="bt">
                    <span className="button__text">Pedir</span>
                    <span className="button__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        stroke="currentColor"
                        height="24"
                        fill="none"
                        className="svg"
                      >
                        <line y2="19" y1="5" x2="12" x1="12"></line>
                        <line y2="12" y1="12" x2="19" x1="5"></line>
                      </svg>
                    </span>
                  </button>
                </Card.Body>
              </Card>
            ))}
        </div>
      </main>
    </>

  )
}

export default menus