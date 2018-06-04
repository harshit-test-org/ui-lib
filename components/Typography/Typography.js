// @flow strict

import * as React from 'react'
import styled, { css } from 'styled-components'
import theme from '../theme'

const baseCss = css`
  font-family: ${props => props.theme.sansFont};
`

type Props = {
  type: string,
  component: string | Function,
  children: any,
  margin: number
}

type Headline = {
  type: string,
  size: string
}

const generateStyledTypography = (
  ctype: any,
  type: string,
  margin: number = 14
) => {
  const C = styled(ctype)`
    ${baseCss}
    font-size: ${(headlineMapping[type] &&
      headlineMapping[type].size) ||
      '1rem'};
    color: ${(headlineMapping[type] &&
      headlineMapping[type].color) ||
      '#000000'};
    margin: ${margin}px;
    font-weight: normal;   
  `

  C.defaultProps = {
    theme: theme
  }

  return C
}

const headlineMapping: {
  xl: Headline,
  h1: Headline,
  h2: Headline,
  h3: Headline,
  h4: Headline,
  h5: Headline
} = {
  xl: {
    type: 'h1',
    size: '3rem',
    color: 'rgba(0,0,0,0.75)'
  },
  h1: {
    type: 'h1',
    size: '2.6rem',
    color: 'rgba(0,0,0,0.75)'
  },
  h2: {
    type: 'h2',
    size: '2.3rem',
    color: 'rgba(0,0,0,0.87)'
  },
  h3: {
    type: 'h3',
    size: '2.125rem',
    color: 'rgba(0,0,0,0.87)'
  },
  h4: {
    type: 'h4',
    size: '1.5rem',
    color: 'rgba(0,0,0,0.87)'
  },
  h5: {
    type: 'h5',
    size: '1.25rem',
    color: 'rgba(0,0,0,0.87)'
  }
}
const Typography = (props: Props) => {
  const {
    type,
    component,
    children,
    margin,
    ...others
  } = props
  const ctype: string | Function =
    component ||
    (headlineMapping[type] && headlineMapping[type].type) ||
    'span'
  const StyledType = generateStyledTypography(
    ctype,
    type,
    margin
  )
  return <StyledType {...others}>{children}</StyledType>
}

export { Typography }
