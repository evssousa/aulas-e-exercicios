import { useState } from 'react'

export default function App() {
  // criar as chamadas de state / estados
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [cidade, setCidade] = useState('')
  const [cadastro, setCadastro] = useState('')

  function enviarCadastro() {
    setCadastro(`${nome} tem ${idade} anos e mora em ${cidade}`)
  }

  return (
    <div>
      <h2>Cadastro</h2>
      <input 
        type="text" 
        placeholder='Nome' 
        value={nome} 
        onChange={(e) => setNome(e.target.value)} // carrega o novo valor
      />

      <input 
        type="number" 
        placeholder='Idade' 
        value={idade} 
        onChange={(e) => setIdade(e.target.value)}
      />

      <input 
        type="text" 
        placeholder='Cidade' 
        value={cidade} 
        onChange={(e) => setCidade(e.target.value)}
      />

      <button onClick={enviarCadastro}>Enviar</button>
      <p>{cadastro}</p>
    </div>
  )
}
