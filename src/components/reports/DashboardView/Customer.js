import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
    Box,
    Button,
    Card,
    CardHeader,
    Chip,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    Tooltip,
    makeStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const data = [
    {
        id: uuid(),
        ref: 'CDD1049',
        amount: 30.5,
        customer: {
            city: "Delhi",
            name: 'Ekaterina Tankova'
        },
        createdAt: 1555016400000,
        quantity: '10'
    },
    {
        id: uuid(),
        ref: 'CDD1048',
        amount: 25.1,
        customer: {
            city: "Bangaluru",
            name: 'Cao Yu'
        },
        createdAt: 1555016400000,
        quantity: '100'
    },
    {
        id: uuid(),
        ref: 'CDD1047',
        amount: 10.99,
        customer: {
            city: "Hydrabad",
            name: 'Alexa Richardson'
        },
        createdAt: 1554930000000,
        quantity: '20'
    },
    {
        id: uuid(),
        ref: 'CDD1046',
        amount: 96.43,
        customer: {
            city: "Delhi",
            name: 'Anje Keizer'
        },
        createdAt: 1554757200000,
        quantity: '40'
    },
    {
        id: uuid(),
        ref: 'CDD1045',
        amount: 32.54,
        customer: {
            city: "Assam",
            name: 'Clarke Gillebert'
        },
        createdAt: 1554670800000,
        quantity: '30'
    },
    {
        id: uuid(),
        ref: 'CDD1044',
        amount: 16.76,
        customer: {
            city: "Goa",
            name: 'Adam Denisov'
        },
        createdAt: 1554670800000,
        quantity: '20'
    }
];

const useStyles = makeStyles(() => ({
    root: {},
    actions: {
        justifyContent: 'flex-end'
    }
}));

const Customer = ({ className, ...rest }) => {
    const classes = useStyles();
    const [orders] = useState(data);

    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}
        >
            <CardHeader title="Users Details" />
            <Divider />
            <PerfectScrollbar>
                <Box minWidth={800}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    User Name
                </TableCell>
                                <TableCell>
                                    Total Amount
                </TableCell>
                                <TableCell>
                                    Total Quantity
                                </TableCell>
                                <TableCell>City
                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow
                                    hover
                                    key={order.id}
                                >
                                    <TableCell>
                                        {order.customer.name}
                                    </TableCell>
                                    <TableCell>
                                        {order.amount}
                                    </TableCell>
                                    <TableCell>
                                        {order.quantity}
                                    </TableCell>
                                    <TableCell>
                                        {order.customer.city}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </PerfectScrollbar>
            <Box
                display="flex"
                justifyContent="flex-end"
                p={2}
            >
                <Button
                    color="primary"
                    endIcon={<ArrowRightIcon />}
                    size="small"
                    variant="text"
                >
                    View all
        </Button>
            </Box>
        </Card>
    );
};


export default Customer;
