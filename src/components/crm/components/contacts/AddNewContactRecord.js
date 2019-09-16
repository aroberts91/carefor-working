import React, { useState } from 'react';
import ExPanel from "../../../global/components/ExPanel";
import GridContainer from "../../../global/components/GridContainer";
import {FormInput} from "../../../global/components/FormInput";
import {Checkbox, FormControlLabel, Grid, MenuItem} from "@material-ui/core";

export default function AddNewContactRecord() {
    const [ state, setState ] = useState({
        title: '',
        firstname: '',
        surname: '',
        relationship: '',
        contact_type: '',
        email: '',
        telephone: '',
        mobile: '',
        address_1: '',
        address_2: '',
        city: '',
        county: '',
        postcode: '',
        living_with_user: false,
        invoice_address: false,
        referrer: false
    });

    const {
        title,
        firstname,
        surname,
        relationship,
        contact_type,
        email,
        telephone,
        mobile,
        address_1,
        address_2,
        city,
        county,
        postcode,
        living_with_user,
        invoice_address,
        referrer
    } = state;

    function onInputChange( e ) {
        setState({ ...state, [e.target.id]: e.target.value });
    }

    const onCheckChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    const onSelectChange = name => event => {
        setState({ ...state, [name]: event.target.value });
    };

    return (
        <ExPanel
            title='Add New Service User Record'
            button_type='add'
            initial_expanded
        >
            <GridContainer spacing={ 10 }>
                <GridContainer spacing={ 10 }>
                    <Grid item xs={4}>
                        <FormInput
                            label='Title'
                            id='title'
                            value={ title }
                            onChange={ onSelectChange( 'title' ) }
                            fullWidth
                            select
                        >
                            <MenuItem value='dr'>Dr</MenuItem>
                            <MenuItem value='mr'>Mr</MenuItem>
                            <MenuItem value='mrs'>Mrs</MenuItem>
                            <MenuItem value='ms'>Ms</MenuItem>
                        </FormInput>
                    </Grid>
                    <Grid item xs={4}>
                        <FormInput
                            label='First Name'
                            id='firstname'
                            value={ firstname }
                            onChange={ onInputChange }
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormInput
                            label='Surname'
                            id='surname'
                            value={ surname }
                            onChange={ onInputChange }
                            fullWidth
                        />
                    </Grid>
                </GridContainer>
                <GridContainer spacing={ 10 }>
                    <Grid item xs={4}>
                        <FormInput
                            label='Contact Type'
                            id='contact_type'
                            value={ contact_type }
                            onChange={ onSelectChange( 'contact_type' ) }
                            fullWidth
                            select
                        >
                            <MenuItem value='emergency'>Emergency Contact</MenuItem>
                            <MenuItem value='gp'>GP</MenuItem>
                            <MenuItem value='other_professional'>Other Healthcare Professional</MenuItem>
                            <MenuItem value='other'>Other</MenuItem>
                        </FormInput>
                    </Grid>
                    <Grid item xs={4}>
                        <FormInput
                            label='Relationship'
                            id='relationship'
                            value={ relationship }
                            onChange={ onInputChange }
                            fullWidth
                        />
                    </Grid>
                </GridContainer>
                <GridContainer spacing={ 10 }>
                    <Grid item xs={4}>
                        <FormInput
                            label='Email address'
                            id='email'
                            value={ email }
                            onChange={ onInputChange }
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormInput
                            label='Telephone'
                            id='telephone'
                            value={ telephone }
                            onChange={ onInputChange }
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormInput
                            label='Mobile'
                            id='mobile'
                            value={ mobile }
                            onChange={ onInputChange }
                            fullWidth
                        />
                    </Grid>
                </GridContainer>
                <GridContainer spacing={ 10 }>
                    <Grid item xs={4}>
                        <FormInput
                            label='Address Line 1'
                            id='address_1'
                            value={ address_1 }
                            onChange={ onInputChange }
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormInput
                            label='Address Line 2'
                            id='address_2'
                            value={ address_2 }
                            onChange={ onInputChange }
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormInput
                            label='City'
                            id='city'
                            value={ city }
                            onChange={ onInputChange }
                            fullWidth
                        />
                    </Grid>
                </GridContainer>
                <GridContainer spacing={ 10 }>
                    <Grid item xs={4}>
                        <FormInput
                            label='County'
                            id='county'
                            value={ county }
                            onChange={ onSelectChange( 'county' ) }
                            fullWidth
                            select
                        >
                            <MenuItem value='devon'>Devon</MenuItem>
                            <MenuItem value='cornwall'>Cornwall</MenuItem>
                            <MenuItem value='somerset'>Somerset</MenuItem>
                        </FormInput>
                    </Grid>
                    <Grid item xs={4}>
                        <FormInput
                            label='Postcode'
                            id='postcode'
                            value={ postcode }
                            onChange={ onInputChange }
                            fullWidth
                        />
                    </Grid>
                </GridContainer>
                <GridContainer spacing={ 2 }>
                    <Grid item xs={ 4 }>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={ living_with_user }
                                    onChange={ onCheckChange( 'living_with_user' ) }
                                    value="living_with_user"
                                    color="primary"
                                />
                            }
                            label='Living with Service User'
                        />
                    </Grid>
                </GridContainer>
                <GridContainer spacing={ 2 }>
                    <Grid item xs={ 4 }>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={ invoice_address }
                                    onChange={ onCheckChange( 'invoice_address' ) }
                                    value="invoice_address"
                                    color="primary"
                                />
                            }
                            label='Invoice Address'
                        />
                    </Grid>
                </GridContainer>
                <GridContainer spacing={ 2 }>
                    <Grid item xs={ 4 }>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={ referrer }
                                    onChange={ onCheckChange( 'referrer' ) }
                                    value="referrer"
                                    color="primary"
                                />
                            }
                            label='Referrer'
                        />
                    </Grid>
                </GridContainer>
            </GridContainer>
        </ExPanel>
    )
}