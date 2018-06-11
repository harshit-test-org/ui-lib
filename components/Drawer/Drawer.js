// @flow strict
import * as React from 'react'
import styled from 'styled-components'
import Typography from '../Typography'
import theme from '../theme'
import shadows from '../utils/shadows'

const shadow = shadows[6]

const DrawerStyle = styled.div`
  width: ${props => props.width || '200px'};
  font-family: ${props => props.theme.sansFont};
  box-shadow: ${shadow};
  height: 100%;
  min-height: 100vh;
  background: ${props => props.theme.primaryColor};
  .logo {
    display: flex;
    background: ${props => props.theme.primaryLightColor};
    .jsui-drawer-title {
      color: #ffffff;
    }
    img {
      width: 50px;
      height: 100%;
    }
  }
`

DrawerStyle.defaultProps = {
  theme
}

type Props = {
  logo: {
    title: string,
    img: string
  }
}

const Drawer = ({
  logo: { title, img },
  ...others
}: Props) => (
  <DrawerStyle {...others}>
    <div className="logo">
      <img src={img} alt="logo" />
      <Typography
        className="jsui-drawer-title"
        type="h4"
        margin={8}
      >
        {title}
      </Typography>
    </div>
  </DrawerStyle>
)

export { Drawer }
