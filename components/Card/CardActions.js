// @flow strict

import * as React from 'react'
import theme from '../theme'
import styled from 'styled-components'

const StyledCardActions = styled.div`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
`

StyledCardActions.defaultProps = {
  theme
}

const CardActions = (props: { children: any }) => {
  return (
    <StyledCardActions>{props.children}</StyledCardActions>
  )
}

export { CardActions }
