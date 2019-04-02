import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import WorkoutAmount from './WorkoutAmount';

storiesOf('WorkoutAmount', module)
    .add('default', () => < WorkoutAmount />);