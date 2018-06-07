import * as React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import Blanket from './'

storiesOf('Blanket', module).add('basic', () => (
  <Blanket isTinted={true} />
))
