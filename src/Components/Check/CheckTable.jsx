import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import CustomTable from '../Utility/CustomTable/CustomTable'
import { Grid, Hidden, IconButton, TextField, InputAdornment } from '@material-ui/core';
//import GroupMessage from '../../Utility/DeleteMessage'
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import themeStyles from '../../styles/styles';
import ConfirmDialog from '../Utility/FormDialog';
import Tooltip from '@material-ui/core/Tooltip';
import { useTranslation } from "react-i18next";
import VisibilityIcon from '@material-ui/icons/Visibility';

const CheckTable = ({ classes, data, cleanScreen, componentDialog, setTitle, confirmOpenDialog, setConfirmOpenDialog, confirmOpenDelete, setConfirmOpenDelete, setIsReadOnly, onSelected, onDelete }) => {
    const { t } = useTranslation();

    const [componentDelete, setComponentDelete] = useState();
    const [maxWidth, setMaxWidth] = useState('sm');


    // PREPARO LAS COLUMNAS DE LA TABLA
    let [columns, setColumns] = useState([
        {
            Header: 'Nombre',
            accessor: 'name'
        },
        {
            Header: 'País',
            accessor: 'country',

        },
        {
            Header: 'Resultado',
            accessor: 'result',

        },
        {
            Header: 'Detalle',
            accessor: 'actions',
            disableSortBy: true,
            width: 80,
        }
    ]);

    const formDetail = (id) => {
        setTitle(t('Check_Title_Detail'));
        setMaxWidth("sm");
        setIsReadOnly(true);
        onSelected(id);
    };

    const formNew = () => {
        setTitle(t('Check_Title_New'));
        setMaxWidth("sm");
        setIsReadOnly(false);
    };

    // PREPARO LOS DATOS (FILAS DE LA TABLA)
    const tableData = !data ? [] : data.map(d => {
        return {
            id: d.id,
            name: d.name,
            country: d.country,
            result: d.result,
            actions: (
                <>
                    <Tooltip title='Ver' placement="top">
                        <IconButton size="small" onClick={() => {formDetail(d.id) }}>
                            <VisibilityIcon fontSize="inherit" className={classes.iconSee} />
                        </IconButton>
                    </Tooltip>

                </>
            )
        }
    })

    return (
        <>
            <Grid justify="flex-start" container item xs={12} sm={12} lg={12}>
                    <Button variant="contained" color="primary" onClick={() => { cleanScreen(); setConfirmOpenDialog(true); formNew() }}
                        startIcon={<AddCircleIcon />} className={classes.gridButton}>
                        {t('Check_Buttom')}
                    </Button>
            </Grid>
            <ConfirmDialog onConfirmClose={() => setConfirmOpenDialog(false)} isOpen={confirmOpenDialog} component={componentDialog} maxWidthDialog={maxWidth} />
            {tableData.length > 0 ?
                (<CustomTable
                    data={tableData}
                    columns={columns}

                ></CustomTable>)
                :
                ""
            }
        </>
    );

}

export default withStyles(themeStyles)(CheckTable);