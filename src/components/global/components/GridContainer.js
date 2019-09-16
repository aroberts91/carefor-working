import { Grid } from "@material-ui/core";
import React from "react";

//A simple wrapper for Material-UI grid container to remove the negative margins
export default function GridContainer({ children, ...props }) {
	return <Grid container style={{ margin: 0, width: '100%' }} { ...props }>{ children }</Grid>
}