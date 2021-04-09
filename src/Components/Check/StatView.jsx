import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';
import themeStyles from '../../styles/styles';
import { useTranslation } from "react-i18next";


const StatView = ({ classes, stats }) => {
    const { t } = useTranslation();

    return (
        <Grid container item xs={12} sm={12} lg={12} spacing={2}>
            <Grid item xs={4} sm={4} lg={4}>
                <Typography className={classes.titleStats}>
                    {t('Healthy')}
                </Typography>
                <Typography className={classes.titleStats}>
                    {stats.healthy}
                </Typography>
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                <Typography className={classes.titleStats}>
                    {t('Infected')}
                </Typography>
                <Typography className={classes.titleStats}>
                    {stats.infected}
                </Typography>
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                <Typography className={classes.titleStats}>
                    {t('Inmune')}
                </Typography>
                <Typography className={classes.titleStats}>
                    {stats.inmune}
                </Typography>
                </Grid>
        </Grid>
    )
}

export default withStyles(themeStyles)(StatView);