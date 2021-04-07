import React, { useState, useEffect } from "react";
import { useTable, useSortBy, useFlexLayout, useResizeColumns, usePagination } from 'react-table'
import { withStyles } from "@material-ui/core/styles";
import {
    TableContainer, Table, TableHead, TableRow, TableCell,
    TableBody
} from '@material-ui/core';
import CustomTableHeader from './CustomTableHeader';
import CustomTablePagination from './CustomTablePagination';
import themeStyles from '../../../styles/styles';

const CustomTable = ({ classes, columns, data }) => {
    const [loaded, setLoaded] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [canNextPage, setCanNextPage] = useState(false);
    const [canPreviousPage, setCanPreviousPage] = useState(false);

    useEffect(() => {
        setLoaded(true);
        setCanNextPage(data.length > ((pageSize * pageIndex) + pageSize));
    }, [])

    const defaultColumn = React.useMemo(
        () => ({
            // Para usar useFlexLayout ES NECESARIO definir esto para todas las columnas:

        }),
        []
    );

    const nextPage = () => {
        let newPageIndex = pageIndex + 1;
        setPageIndex(newPageIndex);
        setCanNextPage(data.length > ((pageSize * newPageIndex) + pageSize));
        setCanPreviousPage(newPageIndex > 0);
    };
    const previousPage = () => {
        let newPageIndex = pageIndex - 1;
        setPageIndex(newPageIndex);
        setCanNextPage(data.length > ((pageSize * newPageIndex) + pageSize));
        setCanPreviousPage(newPageIndex > 0);
    };
    const gotoPage = (pageIdx) => {
        setPageIndex(pageIdx);
        setCanNextPage(data.length > ((pageSize * pageIdx) + pageSize));
        setCanPreviousPage(pageIdx > 0);
    };
    const onFirstPage = event => {
        gotoPage(0);
    };

    const onLastPage = event => {
        gotoPage(Math.max(0, Math.ceil(rows.length / pageSize) - 1));
    };


    // CREO LA TABLA
    const {
        getTableProps, getTableBodyProps, headerGroups,
        prepareRow, page, pageOptions, pageCount, rows
    } = useTable(
        {
            columns,
            data,
            defaultColumn
        }
        , useSortBy
        , useResizeColumns
        , useFlexLayout
        , usePagination)


    return (
        <TableContainer>
            <Table className={classes.table} size="small">
                <TableHead className={classes.tableHead}>
                    <CustomTableHeader headerGroups={headerGroups}>
                    </CustomTableHeader>
                </TableHead>
                <TableBody>
                    {rows.slice(pageSize * pageIndex, (pageSize * pageIndex) + pageSize).map((row, i) => {
                        prepareRow(row)
                        return (
                            <TableRow
                                hover
                                {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <TableCell className={classes.column} {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
                <CustomTablePagination
                    rowCount={rows.length}
                    onPreviousPage={previousPage}
                    onNextPage={nextPage}
                    onFirstPage={onFirstPage}
                    onLastPage={onLastPage}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    canNextPage={canNextPage}
                    canPreviousPage={canPreviousPage}
                    gotoPage={gotoPage}
                    pageIndex={pageIndex}
                >
                </CustomTablePagination>

            </Table>
        </TableContainer>
    )

}


export default withStyles(themeStyles)(CustomTable);