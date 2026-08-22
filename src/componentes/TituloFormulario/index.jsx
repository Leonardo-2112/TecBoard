import './titulo-formulario.estilos.css'

//props é um OBJETO
export function TituloFormulario({ children }){
  return(
    //Pega o filho de props
    <h2 className='titulo-form'>{children}</h2>
  )
}