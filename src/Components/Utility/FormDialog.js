import React, { useState, useEffect } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import PropTypes from 'prop-types';
import DialogActions from '@material-ui/core/DialogActions';
import { Grid, Button } from '@material-ui/core';
import themeStyles from '../../styles/styles';
import { withStyles } from "@material-ui/core/styles";

const ConfirmDialog = (props, classes) => {

    var handleClose = () => {
        props.onConfirmClose();
    };

    return (
            <Dialog
                maxWidth={props.maxWidthDialog}
                open={props.isOpen}
                onClose={handleClose}
            >
                <DialogContent>
                    {props.component}
                </DialogContent>
                <Grid hidden={!props.isABM ? true : false}>
                <DialogActions>
                    <Button onClick={handleClose} className={classes.cancelButton}>
                        Aceptar
                   </Button>
                </DialogActions>
                </Grid>
            </Dialog>
    );

}

ConfirmDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};

export default withStyles(themeStyles)(ConfirmDialog);