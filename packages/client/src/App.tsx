import { useEffect, useState } from 'react'

const API_BASE = '/api'

export default function App() {
  const [health, setHealth] = useState<{ ok?: boolean } | null>(null)

  useEffect(() => {
    fetch(`${API_BASE}/health`)
      .then((r) => r.json())
      .then(setHealth)
      .catch(() => setHealth({}))
  }, [])

  return (
    <div style={{ padding: '1rem', fontFamily: 'system-ui' }}>
      <h1>DDD Template</h1>
      <p>Client is running.</p>
      <p>Server health: {health?.ok === true ? '✓ OK' : health === null ? '…' : '✗'}</p>
    </div>
  )
}
