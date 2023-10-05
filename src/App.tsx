import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { CyclesContextProvider } from './contexts/CyclesContent'
import { Footer } from './components/Footer'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <Footer />

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
