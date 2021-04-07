import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button } from '@material-ui/core';
import themeStyles from '../../styles/styles';
import { useTranslation } from "react-i18next";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import clsx from 'clsx';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { render } from "@testing-library/react";


const CheckFilter = ({ classes, filterSelecteds, setFilterSelecteds, getFilterSelected, setRadioSelected, radioSelected }) => {
    const { t } = useTranslation();


    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" color="primary"/>;

    const StyledRadio = (props) => {
        return (
            <Radio
                disableRipple
                color="default"
                checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                icon={<span className={classes.icon} />}
                {...props}
            />
        );
    }

    const Selecteds = (event, newValue) => {
        filterSelecteds.length = 0;
        setFilterSelecteds(newValue)
    }

    const componentResult = (
        <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={['Sano', 'Infectado', 'Inmune']}
            size="small"
            fullWidth
            disableCloseOnSelect
            onChange={(event, newValue) => {
                Selecteds(event, newValue);
            }}
            getOptionLabel={(option) => option}
            renderOption={(option, { selected }) => (
                <React.Fragment>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option}
                </React.Fragment>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
                <TextField {...params} variant="outlined" label={t('Message_Combo')} placeholder="Resultados" />
            )}
        />
    )

    const componentCountry = (
        <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={['Argentina', 'Brasil', 'Uruguay', 'Paraguay', 'Peru']}
            size="small"
            fullWidth
            disableCloseOnSelect
            onChange={(event, newValue) => {
                Selecteds(event, newValue);
            }}
            getOptionLabel={(option) => option}
            renderOption={(option, { selected }) => (
                <React.Fragment>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option}
                </React.Fragment>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
                <TextField {...params} variant="outlined" label={t('Message_Combo')} placeholder="Paises" />
            )}
        />
    );

    return (
        <>
            <Grid container item xs={12} sm={12} lg={12} spacing={2}>
                <Grid item lg={4} xs={4} sm={4} container
                    direction="row"
                    justify="center" alignItems="center">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Filtrar por: </FormLabel>
                        <RadioGroup defaultValue="country" aria-label="gender" name="customized-radios">
                            <FormControlLabel value="country" onClick={(e) => setRadioSelected(e.target.value)} control={<StyledRadio />} label="País" />
                            <FormControlLabel value="result" onClick={(e) => setRadioSelected(e.target.value)} control={<StyledRadio />} label="Resultado" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6} lg={4} container
                    direction="row"
                    justify="center" alignItems="center">
                    {radioSelected == 'country' ? componentCountry : componentResult}
                </Grid>
                <Grid justify="flex-end" container item xs={2} sm={2} lg={4} container
                    direction="row"
                    justify="center" alignItems="center">
                    <Button color="primary"
                        fullWidth variant="contained" onClick={getFilterSelected} style={{ marginRight: '10px' }}>Aplicar</Button>
                </Grid>
            </Grid>
        </>
    )

}

export default withStyles(themeStyles)(CheckFilter);
