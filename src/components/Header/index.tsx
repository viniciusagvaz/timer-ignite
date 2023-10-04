import { HeaderContainter } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import logoVV from '../../assets/vv-logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainter>
      <span>
        <img src={logoVV} alt="" />
      </span>
      <nav>
        <NavLink to="/home" title="Timer">
          <Timer size={24} />
        </NavLink>

        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainter>
  )
}
