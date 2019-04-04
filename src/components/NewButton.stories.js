import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NewButton from './NewButton';

const emojiArray = ["💪", "🏋️‍♂️", "🏃‍♂️"];

storiesOf('NewButton', module)
    .add('default', () => 
    <NewButton
        onButtonClick={action('clicked')}
        emoji = {emojiArray}
        buttonContent={"New WOD"}>
    </NewButton> );