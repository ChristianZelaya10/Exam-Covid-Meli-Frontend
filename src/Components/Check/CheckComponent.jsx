import React, { useState, useEffect } from 'react';
import { withStyles, Typography, Grid, Paper } from '@material-ui/core';
import CheckTable from './CheckTable';
import CheckForm from './CheckForm';
import CheckFilter from './CheckFilter';
import StatView from './StatView';
import DataCountry from './DataCountry';
import DataResult from './DataResult';
import themeStyles from '../../styles/styles';
import { useTranslation } from "react-i18next";
import CheckService from '../../Services/CheckService';
import StatService from '../../Services/StatService';
import { withSnackbar } from 'notistack';
import errorResponseHandler from '../Utility/errorResponseHandler';
import { trackPromise } from 'react-promise-tracker';

let emptyCheck = { id: '', name: '', country: '', dna: '', result: '' }
let emptyStat = { healthy: 0, infected: 0, inmune: 0 }

const CheckComponent = ({ classes, enqueueSnackbar }) => {
    const { t } = useTranslation();
    const checkService = new CheckService();
    const statService = new StatService();
    const [data, setData] = useState([]);
    const [currentCheck, setCurrentCheck] = useState(emptyCheck);
    const [currentStat, setCurrentStat] = useState(emptyStat);
    const [title, setTitle] = useState("");
    const [cancelNotValid, setCancelNotValid] = useState(false);
    const [isReadOnly, setIsReadOnly] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [filter, setFilter] = useState([]);
    const [radioSelectedKey, setRadioSelectedKey] = useState('country');
    const [dataCountry, setDataCountry] = useState(DataCountry);
    const [dataResult, setDataResult] = useState(DataResult);


    useEffect(() => {
        loadGrid();
    }, []);

    const cleanScreen = () => {
        setCancelNotValid(true);
        setCurrentCheck(emptyCheck);
    };

    const componentForm = (<CheckForm
        check={currentCheck}
        setCheck={(check) => setCurrentCheck(check)}
        setConfirmOpen={setConfirmOpen}
        onCancelClick={cleanScreen}
        title={title}
        setCancelNotValid={setCancelNotValid}
        cancelNotValid={cancelNotValid}
        isReadOnly={isReadOnly}
        onSaveClick={(check) => addCheck(check)}
        countrys={dataCountry}
    />);

    const loadGrid = () => {
        trackPromise(
            checkService.GetChecks().then(res => {
                setData(res.data)
                getStats()
            }).catch(res => {
                errorResponseHandler(res, enqueueSnackbar);
            })
        );
    };

    const getStats = () => {
        trackPromise(
            statService.GetStats().then(res => {
                setCurrentStat(res.data)
            }).catch(res => {
                errorResponseHandler(res, enqueueSnackbar)
            })
        )
    }

    const addCheck = () => {
        trackPromise(
            checkService.AddCheck(currentCheck).then(res => {
                cleanScreen();
                loadGrid();
                enqueueSnackbar(t('Check_Message_Add'), { variant: 'success' })
            }).catch(res => {
                cleanScreen();
                errorResponseHandler(res, enqueueSnackbar);
            }));;
    }

    const checkSelection = (id) => {
        trackPromise(
            checkService.GetById(id).then(res => {
                setCurrentCheck(res.data);
                setConfirmOpen(true);
            }).catch(res => {
                errorResponseHandler(res, enqueueSnackbar);
            }));
    };

    const getFilter = (key, values) => {
        trackPromise(
            checkService.GetFilterChecks(key, values).then(res => {
                setData(res.data);
            }).catch(res => {
                errorResponseHandler(res, enqueueSnackbar);
            })
        )
    }

    const getChecksFilter = () => {
        if (filter.length > 0) {
            var values = filter.toString();
            getFilter(radioSelectedKey, values);
        }
        else{
            loadGrid();
        }
    }

    return (

        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.title} style={{ textAlign: 'center' }}>
                            {t('Check_Title')}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={0} elevation={0} style={{ background: '#EAEAEA' }} className={classes.paper}>
                        <StatView stats={currentStat} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <CheckFilter
                            filterSelecteds={filter}
                            setFilterSelecteds={setFilter}
                            getFilterSelected={getChecksFilter}
                            radioSelected={radioSelectedKey}
                            setRadioSelected={setRadioSelectedKey}
                            countrys={dataCountry}
                            dataResult={dataResult}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={0} className={classes.paper}>
                        <CheckTable
                            data={data}
                            setTitle={setTitle}
                            confirmOpenDialog={confirmOpen}
                            setConfirmOpenDialog={setConfirmOpen}
                            componentDialog={componentForm}
                            setIsReadOnly={setIsReadOnly}
                            onSelected={checkSelection}
                            cleanScreen={cleanScreen}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default withSnackbar(withStyles(themeStyles)(CheckComponent));