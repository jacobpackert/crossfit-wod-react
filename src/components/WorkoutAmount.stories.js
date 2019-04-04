import React from 'react';
import { storiesOf } from '@storybook/react';

import WorkoutAmount from './WorkoutAmount';

storiesOf('WorkoutAmount', module)
    .add('default', () => < WorkoutAmount />);