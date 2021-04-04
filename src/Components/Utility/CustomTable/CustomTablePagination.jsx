import React from 'react';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import {
    IconButton, Typography, Select, withStyles, FormControl, MenuItem
} from '@material-ui/core';
import themeStyles from '../../../styles/styles';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import { useTranslation } from "react-i18next";

const CustomTablePagination = ({ classes, rowCount, onPreviousPage, onNextPage, pageSize, setPageSize, canNextPage, canPreviousPage, gotoPage, pageIndex, onFirstPage, onLastPage }) => {
    const { t } = useTranslation();
    return (
        <div className={classes.Container_Pagination}>
            <Tooltip title={t('Pagination_First_Page')} placement="top">
                <IconButton onClick={onFirstPage}>
                    <FirstPageIcon />
                </IconButton>
            </Tooltip>

            <IconButton onClick={onPreviousPage} disabled={!canPreviousPage}>
                <Tooltip title={t('Pagination_Previous_Page')} placement="top">
                    <KeyboardArrowLeft />
                </Tooltip>
            </IconButton>

            <Typography className={classes.Typography_Pagination}>
                {(pageIndex * pageSize) + 1}-{(rowCount - ((pageIndex + 1) * pageSize)) > 0 ? ((pageIndex + 1) * pageSize) : rowCount} {t('Count_Row_Pagination')} {rowCount}
            </Typography>
            <IconButton onClick={onNextPage} disabled={!canNextPage}>
                <Tooltip title={t('Pagination_Next_Page')} placement="top">
                    <KeyboardArrowRight />
                </Tooltip>
            </IconButton>
            <Tooltip title={t('Pagination_Last_Page')} placement="top">
                <IconButton onClick={onLastPage}>
                    <LastPageIcon />
                </IconButton>
            </Tooltip>
            <Divider orientation="vertical" flexItem className={classes.DividerVertical} />
            <Typography className={classes.Typography_Pagination}>
                {t('Row_By_Page')}
            </Typography>
            <div>
                <FormControl>
                    <Select defaultValue={5} className={classes.Select_Pagination} onChange={(e) => { setPageSize(Number(e.target.value)) }}>
                        <MenuItem value={5}>5</MenuItem >
                        <MenuItem value={10}>10</MenuItem >
                        <MenuItem value={20}>20</MenuItem >
                    </Select>
                </FormControl>
            </div>
        </div>
    );

}

export default withStyles(themeStyles)(CustomTablePagination);