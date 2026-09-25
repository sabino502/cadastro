import { useState } from 'react'

import './styles.css'



function App() {

  const [registros, setRegistro] = useState([])

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")





  return (
    <div className='container'>
      <form onSubmit={adicionarRegistro}>
        <h1>Cadastro</h1>
        <div className='campo'>
          <label for="nome">Nome</label>
          <input value={nome} onChange={e => setNome(prevNome => e.target.value)} type='text' placeholder='digite seu nome' id='nome' required />
        </div>
        <div className='campo'>
          <label for="email">E-mail</label>
          <input value={email} onChange={e => setEmail(prevEmail => e.target.value)} type='email' placeholder='digite seu email' id='email' required />
        </div>
        <div className='campo'>
          <label for="senha">Senha</label>
          <input value={senha} onChange={e => setSenha(prevSenha => e.target.value)} type='password' placeholder='digite sua senha' id='senha' required />
        </div>

        <button>Cadastrar</button>
      </form>

      {registros.map((posicao) => (
        <div className='registros'>
          <div className='registro'>
            <span>Nome: {posicao.nome}</span>
            <span>Email: {posicao.email}</span>
          </div>
        </div>
      ))}
    </div >
  )
  function adicionarRegistro(e) {

    e.preventDefault()

    setRegistro(prevRegistro => [
      ...prevRegistro,
      {
        nome,
        email,
        senha

      }
    ])


    setNome("")
    setEmail("")
    setSenha("")

    document.querySelector("#nome")
  }

}

export default App
