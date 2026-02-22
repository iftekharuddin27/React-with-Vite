import { useState, useCallback } from 'react'
import './App.css'

function PasswordGeneratorApp() {
  const [length, setLength] = useState(12)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)

  const generatePassword = useCallback(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?'

    let chars = letters
    if (includeNumbers) chars += numbers
    if (includeSymbols) chars += symbols

    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)]
    }
    setPassword(result)
    setCopied(false)
  }, [length, includeNumbers, includeSymbols])

  const copyToClipboard = () => {
    if (!password) return
    window.navigator.clipboard.writeText(password)
    setCopied(true)
  }

  return (
    <div className="container">
      <h1>Password Generator</h1>

      <div className="password-box">
        <span className="password-text">
          {password || '—'}
        </span>
        <button className="copy-btn" onClick={copyToClipboard} disabled={!password}>
          Copy
        </button>
      </div>

      <div className="options">
        <div className="option-row">
          <label>Length: {length}</label>
          <input
            type="range"
            min={6}
            max={32}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

        <div className="option-row">
          <input
            type="checkbox"
            id="numbers"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          <label htmlFor="numbers">Include Numbers</label>
        </div>

        <div className="option-row">
          <input
            type="checkbox"
            id="symbols"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          <label htmlFor="symbols">Include Symbols</label>
        </div>
      </div>

      <button className="generate-btn" onClick={generatePassword}>
        Generate Password
      </button>

      {copied && <p className="copied-msg">✓ Copied to clipboard!</p>}
    </div>
  )
}

export default PasswordGeneratorApp
