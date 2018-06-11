// // @flow strict

import * as React from 'react'
import styled, { css } from 'styled-components'
import classNames from 'classnames'
import theme from '../theme'

type Headline = {
  type: string,
  size: string
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

type Props = {
  type: string,
  className: string,
  children: any
}

const TypographyComponent = ({
  className,
  component,
  type = 'default',
  ...props
}: Props) => {
  const Component =
    component ||
    (headlineMapping[type] && headlineMapping[type].type) ||
    'span'
  return (
    <Component
      className={classNames(className, `jsui-typo-${type}`)}
      {...props}
    />
  )
}

const allStyles = Object.entries(headlineMapping).map(
  current => {
    const type = current[0]
    const val = current[1]
    return css`
      &.jsui-typo-${type} {
        font-size: ${val.size};
        color: ${val.color};
      }
    `
  }
)

const Typography = styled(TypographyComponent)`
  ${props =>
    typeof props.margin !== 'undefined'
      ? `margin: ${props.margin}px;`
      : ''}
  font-family: ${props => props.theme.sansFont};
  ${allStyles.map(i => i)}
   font-weight: normal;
  ${props =>
    props.color ? `color:${props.color} !important;` : ''}
`

Typography.defaultProps = {
  theme
}

export { Typography }
