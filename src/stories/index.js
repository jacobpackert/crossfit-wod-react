import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

// import { NewButton } from '../components'
import { WorkoutAmount } from '../components'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('NewButton', module)
//   .add('with text', () => <NewButton>Hello Button</NewButton>)
  // .add('with some emoji', () => (
  //   <NewButton onClick={action('clicked')}>
  //     <span role="img" aria-label="so cool">
  //       😀 😎 👍 💯
  //     </span>
  //   </NewButton>
  // ))
  ;
