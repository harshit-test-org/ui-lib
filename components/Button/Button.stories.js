import * as React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import Button from './'

storiesOf('Button', module).add('with somet text test', () => <Button>Hello Button</Button>)
