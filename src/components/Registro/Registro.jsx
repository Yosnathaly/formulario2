import React from 'react'
import SocialButton from '../SocialButton/SocialButton'
import Formulario from '../Formulario/Formulario'
import { Alert } from 'react-bootstrap'


const Registro = () => {



  return (
    <div>
      <h1>Registro</h1>
      {/* Utiliza SocialButton y pasa el icono como prop */}
      <SocialButton icon="facebook" />
      <SocialButton icon="github" />
      <SocialButton icon="linkedin" />
      <Formulario />
      <Alert />
    </div>
  );
}

export default Registro;
