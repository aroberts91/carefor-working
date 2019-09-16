import React, {useState} from 'react';
import {
    Grid,
    MenuItem,
    Checkbox,
    FormControlLabel
} from "@material-ui/core/index";
import ExPanel from '../../../global/components/ExPanel';

import GridContainer from '../../../global/components/GridContainer';
import SnackBar from "../../../global/components/SnackBar";
import { FormInput } from "../../../global/components/FormInput";

export default function BackgroundDetails( props ) {
    const { onSelectChange, onCheckChange, onInputBlur } = props;
    const {
        country_of_birth,
        nationality,
        ni_number,
        place_of_birth,
        ethnicity,
        first_language,
        religion,
        marital_status,
        dependants,
        sexual_orientation,
        interpreter_required
    } = props;

    const { countries, nationalities, ethnicities, languages, religions, marital_statuses, sexual_orientations } = props;

    return (
        <>
            <ExPanel
                title='Background Details'
            >
                <GridContainer spacing={3}>
                    <GridContainer spacing={10}>
                        <Grid item xs={4}>
                            <FormInput
                                label='Country of Birth'
                                id='country_of_birth'
                                value={ country_of_birth }
                                onChange={ onSelectChange( 'country_of_birth' ) }
                                fullWidth
                                select
                            >
                                {
                                    countries.map(({ name, id }) => {
                                        return <MenuItem key={ id } value={ name } >{ name }</MenuItem>
                                    })
                                }
                            </FormInput>
                        </Grid>
                        <Grid item xs={4}>
                            <FormInput
                                label='Nationality'
                                id='nationality'
                                value={ nationality }
                                onChange={ onSelectChange( 'nationality' ) }
                                fullWidth
                                select
                            >
                                {
                                    nationalities.map(({ name, id }) => {
                                        return <MenuItem key={ id } value={ name } >{ name }</MenuItem>
                                    })
                                }
                            </FormInput>
                        </Grid>
                        <Grid item xs={4}>
                            <FormInput
                                label='NI Number'
                                id='ni_number'
                                defaultValue={ ni_number }
                                onBlur={ onInputBlur }
                                fullWidth
                            />
                        </Grid>
                    </GridContainer>
                    <GridContainer spacing={10}>
                        <Grid item xs={4}>
                            <FormInput
                                label='Place of Birth'
                                id='place_of_birth'
                                defaultValue={ place_of_birth }
                                onBlur={ onInputBlur }
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormInput
                                label='Ethnicity'
                                id='ethnicity'
                                value={ ethnicity }
                                onChange={ onSelectChange( 'ethnicity' ) }
                                fullWidth
                                select
                            >
                                {
                                    ethnicities.map(({ name, id }) => {
                                        return <MenuItem key={ id } value={ name } >{ name }</MenuItem>
                                    })
                                }
                            </FormInput>
                        </Grid>
                        <Grid item xs={4}>
                            <FormInput
                                label='Religion'
                                id='religion.id'
                                value={ religion.id }
                                onChange={ onSelectChange('religion.id') }
                                fullWidth
                                select
                            >
                                {
                                    religions.map(({ name, id }) => {
                                        return <MenuItem key={ id } value={ id } >{ name }</MenuItem>
                                    })
                                }
                            </FormInput>
                        </Grid>
                    </GridContainer>
                    <GridContainer spacing={ 10 }>
                        <Grid item xs={4}>
                            <FormInput
                                label='First Language'
                                id='first_language'
                                value={ first_language }
                                onChange={ onSelectChange('first_language') }
                                fullWidth
                                select
                            >
                                {
                                    languages.map(({ name, id }) => {
                                        return <MenuItem key={ id } value={ name } >{ name }</MenuItem>
                                    })
                                }
                            </FormInput>
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={ interpreter_required }
                                        onChange={ onCheckChange( 'interpreter_required' ) }
                                        value="interpreter_required"
                                        color="primary"
                                    />
                                }
                                label="Interpreter Required"
                            />
                        </Grid>
                    </GridContainer>
                    <GridContainer spacing={ 10 }>
                        <Grid item xs={4}>
                            <FormInput
                                label='Sexual Orientation'
                                id='sexual_orientation'
                                value={ sexual_orientation }
                                onChange={ onSelectChange('sexual_orientation') }
                                fullWidth
                                select
                            >
                                {
                                    sexual_orientations.map(( orientation, index ) => {
                                        return <MenuItem key={ index } value={ orientation } >{ orientation }</MenuItem>
                                    })
                                }
                            </FormInput>
                        </Grid>
                        <Grid item xs={4}>
                            <FormInput
                                label='Marital Status'
                                id='marital_status'
                                value={ marital_status }
                                onChange={ onSelectChange('marital_status') }
                                fullWidth
                                select
                            >
                                {
                                    marital_statuses.map(( status, index ) => {
                                        return <MenuItem key={ index } value={ status } >{ status }</MenuItem>
                                    })
                                }
                            </FormInput>
                        </Grid>
                        <Grid item xs={4}>
                            <FormInput
                                label='Dependants'
                                id='dependants'
                                defaultValue={ dependants }
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