import React from 'react';
import { storiesOf } from '@storybook/react';
import DescriptionContainer from './DescriptionContainer';

const wodContent1 = {
    "gsx$name": {
        "$t": "11.8"
    },
    "gsx$description": {
        "$t": "do epic shit"
    },
    "gsx$score": {
        "$t": "118"
    }
}


storiesOf('DescriptionContainer', module)
    .add('default', () =>
    <DescriptionContainer wodContent={ wodContent1 } />
    )