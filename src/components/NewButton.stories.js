import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import NewButton from './NewButton';

const stories = storiesOf('NewButton', module)

const emojiArray = ["💪", "🏋️‍♂️", "🏃‍♂️"];

stories.addDecorator(withKnobs);

stories
    .add('default', () => 
    <NewButton
        onButtonClick={action('clicked')}
        emoji = {emojiArray}
        buttonContent={text("ButtonContent","New WOD")}>
    </NewButton> )
        .add('lang tekst', () => 
        <NewButton
            onButtonClick={action('clicked')}
            emoji = {emojiArray}
            buttonContent={text("ButtonContent","Nu vil jeg gerne have en ny workout, tak")}>
        </NewButton> );
