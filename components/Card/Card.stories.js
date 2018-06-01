import * as React from 'react'

import { storiesOf } from '@storybook/react'

import Card, {
  CardHeader,
  CardContent,
  CardActions
} from './'
import Typography from '../Typography'
import Button from '../Button'

storiesOf('Card', module).add('Basic', () => (
  <Card
    elevation={2}
    style={{
      maxWidth: '400px'
    }}
  >
    <CardHeader title="React" />
    <CardContent>
      <Typography component="p" margin={0}>
        React is Javascript library for making UI
        interfaces. It makes simple things like form
        handling hard and makes hard things like reusable
        components simple. It is awesome anyways.
      </Typography>
    </CardContent>
    <CardActions>
      <Button>View</Button>
    </CardActions>
  </Card>
))
