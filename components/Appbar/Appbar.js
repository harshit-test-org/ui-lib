// @flow strict

import * as React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const StyledAppBar = styled.header`
  font-family: ${props => props.theme.sansFont};
  display: flex;
  background: ${props => props.theme.primaryColor};
  padding: 0.5rem;
  img {
    width: 40px;
    height: auto;
  }
`

StyledAppBar.defaultProps = {
  theme
}

type Props = {
  children: any
}

const Appbar = (props: Props) => {
  return (
    <StyledAppBar>
      <img
        src="https://beta.javascript.af/static/logo.png"
        alt="logo"
      />
      {props.children}
    </StyledAppBar>
  )
}

export { Appbar }
