import * as React from "react";
import styled from "styled-components";
import theme from "../theme";
import shadows from "../utils/shadows";

const shadow = shadows[6];

export interface P {
  theme: any;
  width: string;
}

const DrawerStyle = styled.div`
  width: ${(props: P) => props.width || "200px"};
  font-family: ${(props: P) => props.theme.sansFont};
  box-shadow: ${shadow};
  height: 100%;
  padding: 0.5rem;
  min-height: 100vh;
  background: ${(props: P) => props.theme.primaryGradient};
  .logo {
    img {
      width: 50px;
      height: 50px;
    }
    margin-bottom: 1.5rem;
  }
`;

DrawerStyle.defaultProps = {
  theme
};

export interface Props {
  logo?: string;
}

const Drawer: React.SFC<Props> = ({ logo, children, ...others }) => (
  <DrawerStyle {...others}>
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
    {children}
  </DrawerStyle>
);

export default Drawer;
