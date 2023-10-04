import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/timer-ignite/" element={<Home />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  )
}
