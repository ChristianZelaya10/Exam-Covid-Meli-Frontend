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
                <Typography style={{textAlign:'center', color:'black'}} className={classes.title}>
                    Sanos
                </Typography>
                <Typography style={{textAlign:'center', color:'black'}} className={classes.title}>
                    {stats.healthy}
                </Typography>
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                <Typography style={{textAlign:'center', color:'black'}} className={classes.title}>
                    Infectados
                </Typography>
                <Typography style={{textAlign:'center', color:'black'}} className={classes.title}>
                    {stats.infected}
                </Typography>
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                <Typography style={{textAlign:'center', color:'black'}} className={classes.title}>
                    Inmunes
                </Typography>
                <Typography style={{textAlign:'center', color:'black'}} className={classes.title}>
                    {stats.inmune}
                </Typography>
                </Grid>
        </Grid>
    )
}

export default withStyles(themeStyles)(StatView);