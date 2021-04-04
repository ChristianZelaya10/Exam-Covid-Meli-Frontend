import React from "react";
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@material-ui/icons/ArrowDropUpRounded';
import {TableRow, TableCell, Typography} from '@material-ui/core';
import themeStyles from '../../../styles/styles';
import { withStyles } from "@material-ui/core/styles";

const CustomTableHeader = ({ classes, headerGroups }) => {
    let beingDraggedIndex = null;

    if (!headerGroups)
        return "";

    const HandleDragStart = (e, i) => {
        beingDraggedIndex = i;
        e.stopPropagation();
    }

    const HandleDragOver = (e, i) => {
        if (beingDraggedIndex != i) {
            e.target.style.border = "1px dashed black";
        }

    }

    const HandleDragLeave = (e) => {
        e.target.style.border = "";
    }

    return (
        <>
            {headerGroups.map(headerGroup => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column, i) => (
                        <TableCell {...column.getHeaderProps(column.getSortByToggleProps({ title: '' }))}>
                            <Typography draggable="true"

                                className={classes.tableHeadTypography}>
                                <span>{column.render('Header')}</span>
                                {column.isSorted
                                    ? column.isSortedDesc
                                        ? <ArrowDropDownRoundedIcon className={classes.SortBy} />
                                        : <ArrowDropUpRoundedIcon className={classes.SortBy} />
                                    : ''}
                            </Typography>

                            <div
                                className={[classes.resizer, column.isResizing ? classes.isResizing : ''].join(' ')}
                            />
                        </TableCell>

                    ))}
                </TableRow>
            ))}
        </>

    )
}

export default withStyles(themeStyles)(CustomTableHeader);