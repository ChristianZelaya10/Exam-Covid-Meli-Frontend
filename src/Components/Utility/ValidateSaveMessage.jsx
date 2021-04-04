import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import themeStyles from '../../styles/styles';
import { useTranslation } from "react-i18next";


const ValidateSaveMessage = ({ classes, setConfirmOpenSave }) => {
    const { t } = useTranslation();
    
    const onCancelClick = () => {
        setConfirmOpenSave(false);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography className={classes.title}>
                    {t('Title_Validate_Save')}
                </Typography>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item xs={12} sm={12}>
                <Typography>
                    {t('Message_Validate_Save')}
                </Typography>
            </Grid>
            <Grid justify="flex-end" container item xs={12} sm={12} lg={12}>
                <Button onClick={onCancelClick} className={classes.cancelButton}>
                    {t('Button_Accept')}
                </Button>
            </Grid>
        </Grid>
    );
}

export default withStyles(themeStyles)(ValidateSaveMessage);