import React from 'react';
import { Btn} from './btn';
import { storiesOf } from '@storybook/react';



storiesOf('Button', module)
    .add('outlined', () => (
            <>
                <Btn    
                >
                    click me
                </Btn>
            </>
    ));
