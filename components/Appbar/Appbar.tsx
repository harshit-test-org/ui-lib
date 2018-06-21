import * as React from 'react'
import styled from 'styled-components'
import shadows from '../utils/shadows'
import theme from '../theme'

const shadow = shadows[2]

const StyledAppBar = styled.header`
  font-family: ${props => props.theme.sansFont};
  box-shadow: ${shadow};
  display: flex;
  align-items: center;
  min-height: 3.5rem;
  width: 100%;
`

StyledAppBar.defaultProps = {
  theme
}



const Appbar: React.SFC = (props) => {
  return (
    <StyledAppBar { ...props }>{ props.children }</StyledAppBar>
  )
}

export default Appbar
