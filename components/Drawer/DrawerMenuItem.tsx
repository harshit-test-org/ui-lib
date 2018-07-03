import * as React from "react";
import styled from "styled-components";
import theme from "../theme";
import Typography from "../Typography";

const DrawerMenuItemStyles = styled.div`
  font-family: ${props => props.theme.sansFont};
  display: flex;
  align-items: center;
  margin-bottom: 1.3rem;
  .jsui-drawermenu-icon {
    margin-right: 0.8rem;
    svg {
      height: 42px;
      width: 42px;
      fill: #ffffff;
    }
  }
  .jsui-drawermenu-text {
    flex: 1;
  }
`;

export interface Props {
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

const DrawerMenuItem: React.SFC<Props> = props => {
  const { icon, children, ...others } = props;
  return (
    <DrawerMenuItemStyles {...others}>
      <div className="jsui-drawermenu-icon">{icon}</div>
      <div className="jsui-drawermenu-text">
        <Typography type="h4" margin={0} color="#ffffff">
          {children}
        </Typography>
      </div>
    </DrawerMenuItemStyles>
  );
};

DrawerMenuItemStyles.defaultProps = {
  theme
};

export default DrawerMenuItem;
