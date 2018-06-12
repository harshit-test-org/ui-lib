import * as React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import classNames from 'classnames'
import Button from '../Button'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import Drawer, { DrawerMenuItem } from './'

const HomeIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 10 16"
      version="1.1"
      fill="#fff"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
      />
    </svg>
  )
}

const HeadPhonesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" opacity=".1" fill="none" />
    <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z" />
  </svg>
)

const TrendingIcon = () => {
  return (
    <svg
      viewBox="0 0 12 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
      />
    </svg>
  )
}

const NewsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
  </svg>
)

const LayoutContainer = styled.div`
  display: flex;
`

const DrawerWithExpansion = styled(Drawer)`
  transition: all 0.4s ease-in-out;
  padding: 1.5rem;
  &.jsui-drawer-collapsed {
    width: 45px;
  }
`

const DrawerMenuItemWithExpansion = styled(DrawerMenuItem)`
  &.jsui-draweritem-collapsed {
    & .jsui-drawermenu-text {
      display: none;
    }
    & .logo > img {
      margin-left: -4px;
    }
  }
`

class Layout extends React.Component {
  state = {
    open: true
  }
  handleExpansionToggle = () => {
    this.setState(s => ({
      open: !s.open
    }))
  }
  render() {
    return (
      <LayoutContainer>
        <DrawerWithExpansion
          className={classNames({
            'jsui-drawer-collapsed': this.state.open
          })}
          logo="https://uploads.codesandbox.io/uploads/user/e59603ee-ad08-4d84-8a86-840c67d4ddfc/RQ---logo.png"
        >
          <DrawerMenuItemWithExpansion
            className={classNames({
              'jsui-draweritem-collapsed': this.state.open
            })}
            icon={<HomeIcon />}
          >
            Repositories
          </DrawerMenuItemWithExpansion>
          <DrawerMenuItemWithExpansion
            className={classNames({
              'jsui-draweritem-collapsed': this.state.open
            })}
            icon={<HeadPhonesIcon />}
          >
            Talks
          </DrawerMenuItemWithExpansion>
          <DrawerMenuItemWithExpansion
            className={classNames({
              'jsui-draweritem-collapsed': this.state.open
            })}
            icon={<TrendingIcon />}
          >
            Featured
          </DrawerMenuItemWithExpansion>
          <DrawerMenuItemWithExpansion
            className={classNames({
              'jsui-draweritem-collapsed': this.state.open
            })}
            icon={<NewsIcon />}
          >
            News
          </DrawerMenuItemWithExpansion>
        </DrawerWithExpansion>
        <div>
          <Button onClick={this.handleExpansionToggle}>
            Collapse
          </Button>
        </div>
      </LayoutContainer>
    )
  }
}

storiesOf('Drawer', module).add('primary drawer', () => (
  <Layout />
))
