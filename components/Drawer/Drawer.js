// @flow strict
import * as React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import shadows from '../utils/shadows'

const shadow = shadows[6]

const DrawerStyle = styled.div`
  width: ${props => props.width || '200px'};
  font-family: ${props => props.theme.sansFont};
  box-shadow: ${shadow};
  height: 100%;
  padding: 0.5rem;
  min-height: 100vh;
  background: ${props => props.theme.primaryGradient};
  .logo {
    img {
      width: 50px;
      height: 100%;
    }
    margin-bottom: 1.5rem;
  }
`

DrawerStyle.defaultProps = {
  theme
}

type Props = {
  logo: {
    title: string,
    img: string
  },
  children: any
}

const Drawer = ({ logo, children, ...others }: Props) => (
  <DrawerStyle {...others}>
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
    {children}
  </DrawerStyle>
)

export { Drawer }
