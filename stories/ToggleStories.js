import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { Toggle } from '../src/scripts';

storiesOf('Toggle', module)
  .addWithInfo('Controlled with knobs', 'Toggle controlled with knobs', () => (
    <Toggle
      label={ text('label', 'Toggle Label') }
      required={ boolean('required') }
      error={ text('error') }
      checked={ boolean('checked') }
      disabled={ boolean('disabled') }
      onChange={ action('change') }
    />
  ))
  .addWithInfo('Default', 'Toggle control', () => (
    <Toggle onChange={ action('change') } />
  ))
  .addWithInfo('Checked', 'Toggle control with checked status', () => (
    <Toggle checked onChange={ action('change') } />
  ))
  .addWithInfo('Disabled', 'Toggle control with disabled status', () => (
    <Toggle disabled onChange={ action('change') } />
  ))
;
