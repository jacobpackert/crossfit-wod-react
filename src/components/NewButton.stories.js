import React from 'react';
import { storiesOf } from '@storybook/react';

import NewButton from './NewButton';

const emojiArray = ["💪", "🏋️‍♂️", "🏃‍♂️"];

storiesOf('NewButton', module)
    .add('default', () => <NewButton emoji = {emojiArray} buttonContent={"New WOD"}></NewButton> );