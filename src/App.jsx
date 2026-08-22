import './App.css'

//props é um OBJETO
function TituloFormulario({ children }){
  return(
    //Pega o filho de props
    <h2>{children}</h2>
  )
}

function CampoDeFormulario({ children }){
  return(
    <h2>
      {children}
    </h2>
  )
}

function Label({ children, htmlFor }){
  return(
    <label htmlFor={htmlFor}>
      {children}
    </label>
  )
}

function CampoDeEntrada(props){
  //Espalha todas as propriedades de props
  return <input {...props}/>
}

function FormularioDeEvento(){
  return(
    <form className='form-evento'>
      {/* Passa o elemento para o parametro componente(função) */}
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>

      <CampoDeFormulario>
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

function App() {

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioDeEvento />
    </main>
  )
}

export default App
