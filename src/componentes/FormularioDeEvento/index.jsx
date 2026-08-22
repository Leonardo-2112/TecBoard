import "./formulario-de-evento.estilos.css"

import { CampoDeEntrada } from '../CampoDeEntrada'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { Label } from '../Label'
import {TituloFormulario} from '../TituloFormulario'
 
export function FormularioDeEvento(){
  return(
    <form className='form-evento'>
      {/* Passa o elemento para o parametro componente(função) */}
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>

      <CampoDeFormulario >
        <Label htmlFor="nome">
          Qual é o nome do evento?
        </Label>
        
        <CampoDeEntrada
          type="text" 
          id='nome' 
          placeholder='Summer dev hits'
        />
      </CampoDeFormulario>
    </form>
  )
}