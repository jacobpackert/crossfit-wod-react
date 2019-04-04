import React from 'react';
import { storiesOf } from '@storybook/react';
import WorkoutDescription from './WorkoutDescription';

const wodContent = {
    "gsx$name": {
        "$t": "11.8"
    },
    "gsx$description": {
        "$t": "do epic shit"
    }
}

console.log(wodContent)

storiesOf('WorkoutDescription', module)
    .add('default', () => < WorkoutDescription wodContent={wodContent} />);