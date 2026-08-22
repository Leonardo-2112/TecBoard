import "./campo-entrada.estilos.css"

export function CampoDeEntrada(props){
  //Espalha todas as propriedades de props
  return <input {...props} className="campo-entrada-form"/>
}