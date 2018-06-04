import * as React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import Spinner from './'

storiesOf('Spinner', module).add('xl', () => (
  <Spinner size="xlarge" />
))
