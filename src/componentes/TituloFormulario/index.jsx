//props é um OBJETO
export function TituloFormulario({ children }){
  return(
    //Pega o filho de props
    <h2>{children}</h2>
  )
}