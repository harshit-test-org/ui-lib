import * as React from 'react';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import defTheme from '../theme';

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
  h6: Headline;
} = {
  xl: {
    type: 'h1',
    size: '2.75rem',
    color: 'rgba(0,0,0,0.77)'
  },
  h1: {
    type: 'h1',
    size: '2.25rem',
    color: 'rgba(0,0,0,0.92)'
  },
  h2: {
    type: 'h2',
    size: '1.875rem',
    color: 'rgba(0,0,0,0.92)'
  },
  h3: {
    type: 'h3',
    size: '1.5rem',
    color: 'rgba(0,0,0,0.92)'
  },
  h4: {
    type: 'h4',
    size: '1.25rem',
    color: 'rgba(0,0,0,0.92)'
  },
  h5: {
    type: 'h5',
    size: '1.125rem',
    color: 'rgba(0,0,0,0.92)'
  },
  h6: {
    type: 'h6',
    size: '1rem',
    color: 'rgba(0,0,0,0.92)'
  }
};

export interface Props {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'xl' | 'default';
  className?: string;
  as?: string;
  margin?: number;
  style?: React.CSSProperties;
  color?: string;
  theme?: any;
  children: any;
}

const TypographyComponent = ({
  className,
  theme,
  children,
  type = 'default',
  ...props
}: Props) => {
  if (typeof children === 'undefined') {
    // tslint:disable-next-line:no-console
    console.warn('jsui: Children are required for typography');
    return null;
  }
  const Component =
    (headlineMapping[type] && headlineMapping[type].type) || 'span';
  return (
    <Component
      className={classNames(className, `jsui-typo-${type}`)}
      children={children}
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
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'xl';
  children: any;
  style?: React.CSSProperties;
}

const Typography = styled(TypographyComponent as any)`
  ${(props: TypographyStyledPropType) =>
    typeof props.margin !== 'undefined'
      ? `margin: ${props.margin}px;`
      : 'margin: 0.625rem 0'}
  font-family: ${props => props.theme.sansFont};
  font-size: 1rem;
  ${allStyles.map(i => i)}
   font-weight: normal;
  ${(props: TypographyStyledPropType) =>
    props.color ? `color:${props.color} !important;` : ''}
`;

Typography.defaultProps = {
  theme: defTheme
};

export default Typography;
