import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { CyclesContextProvider } from './contexts/CyclesContent'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

/* 
import { Button } from './components/Button
'
<Button variant="primary" />
<Button variant="secondary" />
<Button variant="danger" />
<Button variant="success" />
<Button /> */
