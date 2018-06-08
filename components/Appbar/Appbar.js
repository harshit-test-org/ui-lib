// @flow strict

import * as React from 'react'
import styled from 'styled-components'
import shadows from '../utils/shadows'
import theme from '../theme'

const shadow = shadows[2]

const StyledAppBar = styled.header`
  font-family: ${props => props.theme.sansFont};
  display: flex;
  box-shadow: ${shadow};
  top: 0;
  left: auto;
  right: 0;
  position: absolute;
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
    <StyledAppBar {...props}>{props.children}</StyledAppBar>
  )
}

export { Appbar }
