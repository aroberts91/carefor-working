import React, { useState } from 'react';
import ExPanel from "../../../global/components/ExPanel";
import {FormInput} from "../../../global/components/FormInput";
import {InputAdornment, IconButton, TextField} from "@material-ui/core";
import { Search } from "@material-ui/icons";

export default function AddExistingContactRecord() {
    const [ state, setState ] = useState({ user_search: '' });

    function onInputChange( e ) {
        setState({ ...state, [e.target.id]: e.target.value });
    }

    function searchExistingUser() {

    }

    return (
        <ExPanel
            title='Add Existing User Record'
            initial_expanded
        >
            <FormInput
                id='user_search'
                value={ state.user_search }
                label='Search'
                id='user_search'
                value={ state.user_search }
                onChange={ onInputChange }
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton
                                onClick={ searchExistingUser }
                            >
                                <Search/>
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </ExPanel>
    );
};
