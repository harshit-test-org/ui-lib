import * as React from "react";
import styled, { css, StyledComponentClass } from "styled-components";
import classNames from "classnames";
import theme from "../theme";

export interface Headline {
  type: string;
  size: string;
  color: string;
}

const headlineMapping: {
  xl: Headline;
  h1: Headline;
  h2: Headline;
  h3: Headline;
  h4: Headline;
  h5: Headline;
} = {
  xl: {
    type: "h1",
    size: "3rem",
    color: "rgba(0,0,0,0.75)"
  },
  h1: {
    type: "h1",
    size: "2.6rem",
    color: "rgba(0,0,0,0.75)"
  },
  h2: {
    type: "h2",
    size: "2.3rem",
    color: "rgba(0,0,0,0.87)"
  },
  h3: {
    type: "h3",
    size: "2.125rem",
    color: "rgba(0,0,0,0.87)"
  },
  h4: {
    type: "h4",
    size: "1.5rem",
    color: "rgba(0,0,0,0.87)"
  },
  h5: {
    type: "h5",
    size: "1.25rem",
    color: "rgba(0,0,0,0.87)"
  }
};

export interface Props {
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "xl";
  className?: string;
  children?: any;
  component?: any;
}

const TypographyComponent: React.SFC<Props> = ({
  className,
  component,
  type = "default",
  ...props
}) => {
  const Component =
    component ||
    (headlineMapping[type] && headlineMapping[type].type) ||
    "span";
  return (
    <Component
      className={classNames(className, `jsui-typo-${type}`)}
      {...props}
    />
  );
};

export interface StyleValue {
  size: string;
  color: string;
}

const allStyles = Object.entries(headlineMapping).map(
  (current: [string, any]) => {
    const type = current[0];
    const val: StyleValue = current[1];
    return css`
      &.jsui-typo-${type} {
        font-size: ${val.size};
        color: ${val.color};
      }
    `;
  }
);

export interface TypographyStyledPropType {
  color?: string;
  margin?: number;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "xl";
  children?: any;
}

const Typography = styled(TypographyComponent)`
  ${(props: TypographyStyledPropType) =>
    typeof props.margin !== "undefined" ? `margin: ${props.margin}px;` : ""}
  font-family: ${props => props.theme.sansFont};
  ${allStyles.map(i => i)}
   font-weight: normal;
  ${(props: TypographyStyledPropType) =>
    props.color ? `color:${props.color} !important;` : ""}
`;

Typography.defaultProps = {
  theme
};

export default Typography;
