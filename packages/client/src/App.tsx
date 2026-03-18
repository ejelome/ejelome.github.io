import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL ?? ''

export default function App() {
  const [health, setHealth] = useState<{ ok?: boolean } | null>(null)

  useEffect(() => {
    fetch(`${API_URL}/api/health`)
      .then((r) => r.json())
      .then(setHealth)
      .catch(() => setHealth({}))
  }, [])

  return (
    <div style={{ padding: '1rem', fontFamily: 'system-ui' }}>
      <h1>ejelome</h1>
      <p>Client is running.</p>
      <p>Server health: {health?.ok === true ? '✓ OK' : health === null ? '…' : '✗'}</p>
    </div>
  )
}
