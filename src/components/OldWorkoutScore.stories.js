import React from 'react';
import { storiesOf } from '@storybook/react';

import OldWorkoutScore from './OldWorkoutScore';

const wodContent = {
    "gsx$score": {
        "$t": "118"
    }
}

const wodContent2 = {
    "gsx$score": {
        "$t": "10 runder og 8 dødløft"
    }
}

storiesOf('OldWorkoutScore', module)
    .add('default', () =>
    <OldWorkoutScore wodContent={ wodContent }></OldWorkoutScore>
    )
    .add('tekst', () =>
    <OldWorkoutScore wodContent={ wodContent2 }></OldWorkoutScore>
    )
    