// @flow strict

import * as React from 'react'
import styled, { css } from 'styled-components'
import theme from '../theme'

const baseCss = css`
  font-family: ${props =>
    props.theme.sansFont || theme.sansFont};
`

type Props = {
  type: string,
  component: string | Function,
  children: any
}

type Headline = {
  type: string,
  size: string
}

const generateStyledTypography = (
  ctype: any,
  type: string
) => {
  return styled(ctype)`
    ${baseCss}
    font-size: ${headlineMapping[type].size};
    color: ${headlineMapping[type].color};
  `
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
    size: '6rem',
    color: 'rgba(0,0,0,0.75)'
  },
  h1: {
    type: 'h1',
    size: '3.75rem',
    color: 'rgba(0,0,0,0.75)'
  },
  h2: {
    type: 'h2',
    size: '3rem',
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
class Typography extends React.Component<Props> {
  render() {
    const {
      type,
      component,
      children,
      ...others
    } = this.props
    const ctype: string | Function =
      component || headlineMapping[type].type || 'span'
    const StyledType = generateStyledTypography(ctype, type)

    return <StyledType {...others}>{children}</StyledType>
  }
}

export { Typography }
