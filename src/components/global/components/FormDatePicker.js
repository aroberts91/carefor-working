import React from 'react';
import moment from "moment";
import { KeyboardDatePicker } from "@material-ui/pickers";

const FormDatePicker = ({ value, ...rest }) => {
    let date = moment( value );

    if( !date.isValid() )
        date = null;

    return (
        <KeyboardDatePicker
            clearable
            value={ date }
            placeholder='dd/mm/yyyy'
            format='MM/DD/YYYY'
            { ...rest }
        />
    )
};

export { FormDatePicker }