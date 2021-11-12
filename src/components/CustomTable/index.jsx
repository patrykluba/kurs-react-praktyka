import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const CustomTable = ({ tableProps, tableHeaders, tableBody, renderHeaders, renderBody, excludeColumns = [], ...props }) => {
    return (
        <TableContainer component={Paper} {...props}>
            <Table {...tableProps}>
                <TableHead>
                    <TableRow>
                        {tableHeaders?.filter(key => !excludeColumns.includes(key))?.map(renderHeaders)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableBody?.map(renderBody)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CustomTable
