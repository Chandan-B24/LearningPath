import { MenuProps } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link to='/js'>
                Introduction
            </Link>
        )
    },
    {
        key: '2',
        label: (
            <Link to='/js/arrays'>
                Arrays
            </Link>
        )
    },
    {
        key: '3',
        label: (
            <Link to='/js/arraymethods'>
                Arrays Methods
            </Link>
        )
    },
];
