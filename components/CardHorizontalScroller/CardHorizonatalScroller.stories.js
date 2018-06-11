import * as React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import CardHorizontalScroller from './'
import Card, {
  CardHeader,
  CardContent,
  CardActions
} from '../Card'
import Typography from '../Typography'
import Button from '../Button'

const Cards = () => (
  <Card
    elevation={2}
    style={{
      height: 'auto',
      minWidth: '250px'
    }}
  >
    <CardHeader title="React" />
    <CardContent>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. In faucibus condimentum condimentum. Ut
        vestibulum sit amet nibh id maximus. Nam eu placerat
        ex. Proin imperdiet massa sed mattis tincidunt.
        Fusce.
      </Typography>
    </CardContent>
    <CardActions>
      <Button>View</Button>
    </CardActions>
  </Card>
)

storiesOf('CardHorizontalScroller', module).add(
  'Basic',
  () => (
    <CardHorizontalScroller>
      {Array.from({ length: 15 }).map((_, i) => (
        <Cards key={i} />
      ))}
    </CardHorizontalScroller>
  )
)
