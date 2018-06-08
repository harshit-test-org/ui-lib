import * as React from 'react'
import styled from 'styled-components'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import Drawer from './'
import Appbar from '../Appbar'
import Typography from '../Typography'

const Layout = styled.div`
  display: flex;
  flex: 1;
`

const drawerWidth = 220

const AppbarWithShift = styled(Appbar)`
  margin-left: ${drawerWidth}px;
  width: calc(100% - ${drawerWidth}px);
`

// Only to override storybook padding
const DrawerWithShift = styled(Drawer)`
  position: absolute;
  top: 0;
`

storiesOf('Drawer', module).add('basic', () => (
  <React.Fragment>
    <Layout>
      <DrawerWithShift
        logo={{
          img: 'https://beta.javascript.af/static/logo.png',
          title: 'Javascript AF'
        }}
        width={`${drawerWidth}px`}
      />
      <AppbarWithShift>
        <Typography type="h4">Home</Typography>
      </AppbarWithShift>
    </Layout>
  </React.Fragment>
))
