import React, { useState } from 'react'
import Counter from './Counter'
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext()

function App() {
  console.log("Render App")
  const [theme, setTheme] = useState('green')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={0} />
      CounterHooks
      <CounterHooks initialCount={0} />
      <button onClick={() => setTheme(prevTheme => 
        prevTheme === 'green' ? 'blue' : 'green'
      )}>Toggle Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;
