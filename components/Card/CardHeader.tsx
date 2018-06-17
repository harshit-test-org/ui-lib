// @flow strict

import * as React from 'react'
import Typography from '../Typography'
import styled from 'styled-components'

import theme from '../theme'

export interface Props {
  title?: string
}

const StyledCardHeader = styled.div`
  display: flex;
  padding: 0.5rem;
`

StyledCardHeader.defaultProps = {
  theme
}

const CardHeader: React.SFC<Props> = ({ title, ...others }) => {
  return (
    <StyledCardHeader { ...others }>
      { title && (
        <Typography
          margin={ 0 }
          className="jsui-card-header-title"
          type="h4"
        >
          { title }
        </Typography>
      ) }
    </StyledCardHeader>
  )
}

export default CardHeader 
