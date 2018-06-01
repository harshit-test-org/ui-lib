// @flow strict

import * as React from 'react'
import theme from '../theme'
import styled from 'styled-components'

const StyledCardContent = styled.div`
  padding: 0.5rem;
`

StyledCardContent.defaultProps = {
  theme
}

const CardContent = (props: { children: any }) => {
  return (
    <StyledCardContent>{props.children}</StyledCardContent>
  )
}

export { CardContent }
