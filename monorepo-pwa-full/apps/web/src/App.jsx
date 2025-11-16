import React, { useEffect, useState } from 'react'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
export default function App() {
  const [apiMsg, setApiMsg] = useState('Carregando API...')
  const [cep, setCep] = useState('01001000')
  const [cepData, setCepData] = useState(null)
  useEffect(() => { fetch(`${API_URL}/api/hello`).then(r=>r.json()).then(d=>setApiMsg(d.ok?`API OK: ${d.msg}`:'Falha na API')).catch(()=>setApiMsg('Falha na API')) }, [])
  const buscarCep = async () => {
    try { const r = await fetch(`${API_URL}/api/cep/${cep}`); setCepData(await r.json()) } catch { setCepData({erro:true}) }
  }
  return (<main><h1>Bootcamp PWA</h1><p data-testid='api-ok'>{apiMsg}</p><input value={cep} onChange={e=>setCep(e.target.value)}/><button onClick={buscarCep}>Buscar</button>{cepData&&<pre>{JSON.stringify(cepData,null,2)}</pre>}</main>)
}