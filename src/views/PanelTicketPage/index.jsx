
import React from 'react'
import Layout from '../../components/Layout';
import CustomTable from '../../components/CustomTable';

import { API_TICKET } from '../../constants/api';
import { QUERY_TICKET, QUERY_TICKET_OPTIONS } from '../../constants/queryKeys';

import withLogin from '../../HOCs/withLogin';
import useGetData from '../../queries/useGetData';
import { TableCell, TableRow } from '@mui/material';

const PanelTicketPage = () => {
    const { query, queryOptions } = useGetData({
        url: API_TICKET,
        dataKey: QUERY_TICKET,
        dataKeyOptions: QUERY_TICKET_OPTIONS,
        additinoalOptions: {
            enabled: true
        }
    });

    const columnsKey = queryOptions?.data ? Object.keys(queryOptions?.data?.data?.actions?.POST) : [];
    const columns = queryOptions?.data?.data?.actions?.POST || {};

    const data = query?.data?.data || [];

    const excludeColumns = ['author', 'updated_at']

    return (
        <Layout>
            <CustomTable 
                tableHeaders={columnsKey || []}
                renderHeaders={(key) => {
                    return <TableCell key={key}>
                        {columns[key]?.label}
                    </TableCell>
                }}
                tableBody={data}
                renderBody={row => {
                    return <TableRow>{columnsKey.map(key => {
                    if(excludeColumns.includes(key)) return null;

                    if(key === 'created_at') 
                    return <TableCell key={`body_${key}`}>
                        {new Date(row[key]).toLocaleDateString()}
                    </TableCell>

                    return <TableCell key={`body_${key}`}>
                        {row[key]}
                    </TableCell>
                    })}
                    </TableRow>
                }}
                excludeColumns={excludeColumns}
            />
        </Layout>
    )
}

export default withLogin(PanelTicketPage);