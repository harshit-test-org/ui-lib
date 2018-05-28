// @flow
import * as React from 'react'
import styled, { withTheme } from 'styled-components'
import themeGlobal from '../theme'

const ButtonSty = styled.button`
  font-family: ${props =>
    props.theme.monospaceFamily ||
    themeGlobal.monospaceFont};
  font-size: 1rem;
  background: ${props =>
    !props.inverted
      ? props.color ||
        props.theme.primaryColor ||
        themeGlobal.primaryColor
      : '#fff'};
  color: ${props =>
    props.inverted
      ? props.color ||
        props.theme.primaryColor ||
        themeGlobal.primaryColor
      : '#ffffff'};
  border: ${props =>
    props.inverted
      ? `2px solid ${props.color ||
          props.theme.primaryColor ||
          themeGlobal.primaryColor}`
      : 'none'};
  margin: 0.5rem;
  opacity: 0.9;
  padding: 0.5rem 1rem;
  border-radius: 1.2rem;
  cursor: pointer;
  transition: 0.2s ease all;
  &:hover {
    color: #ffffff;
    opacity: 1;
    background: ${props =>
      props.color ||
      props.theme.primaryDarkColor ||
      themeGlobal.primaryDarkColor};
    border: 'none';
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    color: ${props =>
      props.inverted
        ? props.color ||
          props.theme.primaryColor ||
          themeGlobal.primaryColor
        : '#ffffff'};
    background: ${props =>
      !props.inverted
        ? props.color ||
          props.theme.primaryColor ||
          themeGlobal.primaryColor
        : '#ffffff'};
  }
  &:active {
    opacity: 1;
  }
`

const Button = withTheme(
  ({ theme, danger, children, ...others }) => (
    <ButtonSty
      color={
        danger
          ? (theme && theme.dangerColor) ||
            themeGlobal.dangerColor
          : null
      }
      {...others}
    >
      {children}
    </ButtonSty>
  )
)

export { Button }
