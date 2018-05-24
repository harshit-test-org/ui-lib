// @flow
import * as React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  background: teal;
`

type Props = {
  children: any
}

class Button extends React.Component<Props> {
  render() {
    return <ButtonStyled>{this.props.children}</ButtonStyled>
  }
}

export { Button }
