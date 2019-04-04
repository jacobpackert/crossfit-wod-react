import React from 'react';
import { storiesOf } from '@storybook/react';

import OldWorkoutScore from './OldWorkoutScore';

const wodContent = {
    "gsx$score": {
        "$t": "118"
    }
}

storiesOf('OldWorkoutScore', module)
    .add('default', () =>
    <OldWorkoutScore wodContent={ wodContent }></OldWorkoutScore>
    )