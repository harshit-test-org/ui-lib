import * as React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import Button from './'

const { Fragment } = React

storiesOf('Button', module)
  .add('primary button', () => (
    <Fragment>
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
    </Fragment>
  ))
  .add('inverted Button', () => (
    <Fragment>
      <Button varient="inverted">Normal</Button>
      <Button varient="inverted" disabled>
        Disabled
      </Button>
    </Fragment>
  ))
  .add('danger Button', () => (
    <Fragment>
      <Button varient="danger">Normal</Button>
      <Button varient="danger" disabled>
        Disabled
      </Button>
    </Fragment>
  ))
