import React from 'react'
import { Formulario } from './Formulario';
import useLetras from '../hooks/useLetras';
import { Alerta } from './Alerta';
import { Letra } from './Letra';

export const AppLetras = () => {

  const { alerta, letra, loading } = useLetras();

  return (
    <>
        <header>Buscador de letras de canciones</header>

        <Formulario />

        <main>
            {
                alerta ? <Alerta>{alerta}</Alerta> : 
                letra ? <Letra /> : 
                loading ? <Alerta>Cargando...</Alerta> : 
                <p className='text-center'>Busca letras de tus artistas favoritos</p>
            }
        </main>
    </>
  )
}
