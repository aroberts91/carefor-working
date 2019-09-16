import React, {useState} from 'react';
import {
    Grid,
    MenuItem,
} from "@material-ui/core/index";
import { FormInput } from "../../../global/components/FormInput";
import ExPanel from '../../../global/components/ExPanel';

import GridContainer from '../../../global/components/GridContainer';

export default function PhysicalAppearance( props ) {
    const { onInputBlur } = props;

    const {
        height,
        weight,
        hair_colour,
        eye_colour,
    } = props;

    return (
        <>
            <ExPanel
                title='Physical Appearance'
            >
                <GridContainer spacing={3}>
                    <GridContainer spacing={10}>
                        <Grid item xs={4}>
                            <FormInput
                                label='Height'
                                id='height'
                                defaultValue={ height }
                                onBlur={ onInputBlur }
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormInput
                                label='Weight'
                                id='weight'
                                defaultValue={ weight }
                                onBlur={ onInputBlur }
                                fullWidth
                            />
                        </Grid>
                    </GridContainer>
                    <GridContainer spacing={10}>
                        <Grid item xs={4}>
                            <FormInput
                                label='Hair Colour'
                                id='hair_colour'
                                defaultValue={ hair_colour }
                                onBlur={ onInputBlur }
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormInput
                                label='Eye Colour'
                                id='hair_colour'
                                defaultValue={ eye_colour }
                                onBlur={ onInputBlur }
                                fullWidth
                            />
                        </Grid>
                    </GridContainer>
                </GridContainer>
            </ExPanel>
        </>
    )
}