import * as React from 'react'
import styled, { css } from 'styled-components'
import theme from '../theme'
import classNames from 'classnames'
import shadows from '../utils/shadows'

const CardStyled = styled.div`
  background: #ffffff;
  transition: all 0.15s ease-in-out;
  padding: 0.5rem;
  ${shadows.map(
    (shadow, index) =>
      css`
        &.jsui-card-shadow-${index} {
          box-shadow: ${shadow};
        }
        &.jsui-card-shadow-${index}:hover {
          box-shadow: ${shadows[index + 1] || shadow};
        }
      `
  )};
`

CardStyled.defaultProps = {
  theme
}

export interface Props {
  children: any,
  elevation: number,
  style?: React.CSSProperties
}

const Card: React.SFC<Props> = ({
  elevation,
  children,
  ...others
}) => {
  return (
    <CardStyled
      { ...others }
      className={ classNames({
        [`jsui-card-shadow-${elevation}`]: !!elevation
      }) }
    >
      { children }
    </CardStyled>
  )
}

export default Card 
