import * as React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import Appbar from './'

storiesOf('Appbar', module).add('Appbar Basic', () => (
  <Appbar />
))
