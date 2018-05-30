// @flow
import React from 'react'
import styled from 'styled-components'
import themeGlobal from '../theme'
import classNames from 'classnames'

const ButtonComp = styled.button`
  font-family: ${props => props.theme.monospaceFont};
  font-size: 1rem;
  background: ${props => props.theme.primaryColor};
  color: #ffffff;
  border: none;
  margin: 0.5rem;
  opacity: 0.9;
  padding: 0.5rem 1rem;
  border-radius: 1.2rem;
  cursor: pointer;
  transition: 0.3s ease-in-out all;
  &.jsui-button-secondary {
    background: ${props => props.theme.secondaryColor};
    color: #ffffff;
  }
  &.jsui-button-secondary:hover {
    background: ${props => props.theme.secondaryDarkColor};
    color: #ffffff;
  }
  &.jsui-button-danger {
    background: ${props => props.theme.dangerColor};
    color: #ffffff;
  }
  &.jsui-button-danger:hover {
    background: ${props => props.theme.dangerDarkColor};
    color: #ffffff;
  }
  &.jsui-button-secondary:hover {
    background: ${props => props.theme.schoolDarkColor};
    color: #ffffff;
  }
  &.jsui-button-inverted {
    background: #ffffff;
    color: ${props => props.theme.primaryColor};
    border: 2px solid
      ${props => props.theme.primaryDarkColor};
  }
  &.jsui-button-inverted:hover {
    background: ${props => props.theme.primaryColor};
    color: #ffffff;
    opacity: 1;
    border: 2px solid ${props => props.theme.primaryColor};
  }
  &:hover {
    color: #ffffff;
    opacity: 1;
    background: ${props => props.theme.primaryDarkColor};
    border: none;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  &:active {
    opacity: 1;
  }
`

type Props = {
  children: any,
  varient: ?string
}

const Button = (props: Props) => {
  const { varient, children, ...others } = props
  return (
    <ButtonComp
      {...others}
      className={classNames({
        [`jsui-button-${varient}`]: varient
      })}
    >
      {children}
    </ButtonComp>
  )
}

Button.defaultProps = {
  theme: themeGlobal
}

export { Button }
