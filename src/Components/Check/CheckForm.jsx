import React, { useState, useEffect} from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import { validateNotEmpty } from '../Utility/FormValidations';
import Divider from '@material-ui/core/Divider';
import ConfirmDialog from '../Utility/FormDialog';
import SaveMessage from '../Utility/ValidateSaveMessage';
import themeStyles from '../../styles/styles';
import { useTranslation } from "react-i18next";
import Autocomplete from '@material-ui/lab/Autocomplete';

const OwnerForm = ({ classes, check, setCheck, title,
    onCancelClick, setCancelNotValid, cancelNotValid, isReadOnly, onSaveClick, setConfirmOpen }) => {
    const { t } = useTranslation();
    const [nameValid, setNameValid] = useState(true);
    const [dnaValid, setDnaValid] = useState(true);
    const [countryValid, setCountryValid] = useState(true);
    const [didMount, setDidMount] = useState(false);
    const [charactersName, setCharactersName] = useState(50);
    const [componentSave, setComponentSave] = useState();
    const [maxWidth, setMaxWidth] = useState('sm');
    const [confirmOpenModalSave, setConfirmOpenModalSave] = useState(false);
    const [errorHelper, setErrorHelper] = useState(t('Check_Obligatory_Field'));

    // No hago validaciones hasta que el componente no haya terminado de cargar
    useEffect(() => { setDidMount(true) }, [])

    useEffect(() => {
        if (didMount) {
            validateNotEmpty(check.name, setNameValid, cancelNotValid, setCancelNotValid);
        }
    }, [check.name]);

    useEffect(() => {
        if (didMount) {
            validateNotEmpty(check.country, setCountryValid, cancelNotValid, setCancelNotValid);
        }
    }, [check.country]);

    useEffect(() => {
        if (didMount) {
            validateNotEmpty(check.dna, setDnaValid, cancelNotValid, setCancelNotValid);
        }
    }, [check.dna]);

    const validate_dna = (string, onError, onErrorHelper) => {
        if (string) {
            for (var i = 0; i < string.length; i++) {
                var regex = /^([ATCG-atcg_\s+ \,\\n])/;
                var a = regex.test(string.charAt(i)) ? true : false;

                if (!a) {
                    onError(false);
                    onErrorHelper(t('Check_Format_Dna'));
                    return false;
                }
            }
        }
        else {
            onError(false);
            onErrorHelper(t('Check_Obligatory_Field'));
            return false;
        }
    };

    const validateForm = () => {
        validateNotEmpty(check.name, setNameValid, cancelNotValid, setCancelNotValid);
        validateNotEmpty(check.country, setCountryValid, cancelNotValid, setCancelNotValid);
        validateNotEmpty(check.dna, setDnaValid, cancelNotValid, setCancelNotValid);

        if (check.name != '' && check.country != '' && check.dna != '') {
            let stringDna = check.dna.trim().replace(/ /g, "");
            let arrayDna = stringDna.split(/[\n,]+/);
            if (arrayDna[0].length == arrayDna.length) {
                check.dna = arrayDna;
                onSaveClick();
                setConfirmOpen(false);
            }
            else{
                setErrorHelper(t('Check_Format_Array'));
                setDnaValid(false);
            }
        }
        else {
            setConfirmOpenModalSave(true);
            setMaxWidth("xs");
            setComponentSave(<SaveMessage
                setConfirmOpenSave={setConfirmOpenModalSave}
            />);
        }
    };

    return (
        <Grid container item xs={12} sm={12} lg={12} spacing={2}>
            <Grid item xs={12} sm={12} lg={12}>
                <Typography className={classes.title}>
                    {title}
                </Typography>
            </Grid>
            <Divider className={classes.divider} />
            {
                check.id != '' ? <Grid item xs={12} sm={12} lg={12}>
                    <TextField value={check.id}
                        InputProps={{
                            readOnly: isReadOnly,
                        }}
                        className={classes.lineBreak}
                        size="small"
                        label={t('Check_TextField_Id')}
                        fullWidth variant="outlined"
                    />
                </Grid>
                    :
                    <></>
            }
            <Grid item xs={12} sm={12} lg={12}>
                <TextField value={check.name}
                    InputProps={{
                        readOnly: isReadOnly,
                    }}
                    error={!nameValid} className={classes.lineBreak}
                    helperText={isReadOnly ? "" : t('Check_Obligatory_Field') + "\n" + t('Characters_Available') + charactersName}
                    onChange={(e) => { if (e.target.value.length <= 50) { setCheck({ ...check, name: e.target.value }); setCharactersName(50 - (e.target.value.length)) } }}
                    onBlur={(e) => validateNotEmpty(e.target.value, setNameValid, cancelNotValid, setCancelNotValid)}
                    size="small"
                    label={t('Check_TextField_Name')}
                    fullWidth variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
                <Autocomplete
                    fullWidth
                    size="small"
                    disabled={isReadOnly}
                    value={check.country}
                    className={classes.formControl}
                    onBlur={(e) => validateNotEmpty(e.target.value, setCountryValid, cancelNotValid, setCancelNotValid)}
                    onChange={(e, value) => setCheck({ ...check, country: value })}
                    options={['Argentina', 'Brasil', 'Uruguay', 'Paraguay', 'Peru']}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => <TextField {...params}
                        error={!countryValid}
                        className={classes.lineBreak}
                        helperText={isReadOnly ? "" : t('Check_Obligatory_Field')}
                        label={t('Check_TextField_Country')}
                        variant="outlined" />}
                />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
                <TextField value={check.dna}
                    InputProps={{
                        readOnly: isReadOnly,
                    }}
                    //onBlur={(e) => validateNotEmpty(e.target.value, setDnaValid, cancelNotValid, setCancelNotValid)}
                    onBlur={(e) => validate_dna(e.target.value, setDnaValid, setErrorHelper)}
                    className={classes.lineBreak} helperText={isReadOnly ? "" : errorHelper}
                    onChange={(e) => { setCheck({ ...check, dna: e.target.value }) }}
                    error={!dnaValid}
                    className={classes.lineBreak}
                    multiline
                    rows="4"
                    size="small"
                    label="ADN"
                    fullWidth variant="outlined" />
            </Grid>
            {
                check.id != '' ? <Grid item xs={12} sm={12} lg={12}>
                    <TextField value={check.result}
                        InputProps={{
                            readOnly: isReadOnly,
                        }}
                        className={classes.lineBreak}
                        size="small"
                        label={t('Check_TextField_Result')}
                        fullWidth variant="outlined"
                    />
                </Grid>
                    :
                    <></>
            }
            <Divider className={classes.divider} />
            <Grid justify="flex-end" container item xs={12} sm={12} lg={12}>
                <Grid hidden={isReadOnly}>
                    <Button variant="contained" color="primary" onClick={validateForm}>
                        {t('Check_Button_Save')}
                    </Button>
                    <Button onClick={() => { setConfirmOpen(false); onCancelClick() }} className={classes.cancelButton}>
                        {t('Check_Button_Cancel')}
                    </Button>
                </Grid>
                <Grid hidden={!isReadOnly}>
                    <Button onClick={() => { setConfirmOpen(false); onCancelClick() }} className={classes.cancelButton}>
                        {t('Check_Button_Accept')}
                    </Button>
                </Grid>
            </Grid>
            <ConfirmDialog onConfirmClose={() => setConfirmOpenModalSave(false)} isOpen={confirmOpenModalSave} component={componentSave} maxWidthDialog={maxWidth} />
        </Grid>
    )
}

export default withStyles(themeStyles)(OwnerForm);