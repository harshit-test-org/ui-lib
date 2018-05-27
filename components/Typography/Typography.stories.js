import * as React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import Typography from './'

storiesOf('Typography', module)
  .add('xl', () => (
    <Typography type="xl">Heading 1</Typography>
  ))
  .add('h1', () => (
    <Typography type="h1">Heading 1</Typography>
  ))
  .add('h2', () => (
    <Typography type="h2">Heading 2</Typography>
  ))
  .add('h3', () => (
    <Typography type="h3">Heading 3</Typography>
  ))
  .add('h4', () => (
    <Typography type="h4">Heading 4</Typography>
  ))
  .add('h5', () => (
    <Typography type="h5">Heading 5</Typography>
  ))
  .add('fallback', () => (
    <Typography type="something">
      Fallback when no valid type prop
    </Typography>
  ))
