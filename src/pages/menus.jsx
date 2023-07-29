
import { traerCategorias } from '@/helpers/admi';
import { traerMenus } from '@/helpers/getOfertas';
import Head from 'next/head'
import React, { Fragment, useEffect, useState } from 'react'
import Card from "react-bootstrap/Card";
import NavBars from '@/components/NavBars'

const menus = () => {

  const [menus, setMenus] = useState([]);
  const [categorias, setCate] = useState([]);
  const [seccion, setSeccion] = useState("");




  const traerData = async () => {
    const response = await traerMenus();
    const responseCate = await traerCategorias();
    setMenus(response);
    setCate(responseCate);
  }

  useEffect(() => {

    traerData();

  }, [ seccion])

  return (


    <>
      <Head>
        <title>La Morocha - Menus</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="styles-sheets" href="../stylescomponents.css" />
      </Head>
      <NavBars/>
      <div className="subnav">{
        categorias.map(index => (
          <>
            <a href="#" onClick={() => setSeccion(index.nombre)} key={index._id}>{index.nombre}</a>
          </>

        ))
      }
      </div>
      <main className='main-menus p-2  '>
        
        {
          categorias.map(i => (
            <Fragment key={i.nombre}>
              
              <div className="contenedor-card-menus" id='contm'>

              <h4 id='titulo-ofertas' className='text-center fs-2'>{i.nombre}</h4>
                {
                  menus.map((index) => (
                    index.categoria.nombre === i.nombre?
                    <Fragment key={index.nombre}> 
                        <Card id="cardd" className="card-ofertas text-light">
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
                     </Fragment> : <></>
                 
                  ))}
              </div>

            </Fragment>


          ))
        }



      </main>
    </>

  )
}

export default menus