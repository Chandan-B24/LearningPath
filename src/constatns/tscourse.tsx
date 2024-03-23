import { MenuProps } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export const itemsTS: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link to='/ts'>
                Introduction
            </Link>
        )
    },
    {
        key: '2',
        label: (
            <Link to='/ts/basic'>
                Basic Types
            </Link>
        )
    },
    {
        key: '3',
        label: (
            <Link to='/ts/interface'>
                Interface
            </Link>
        )
    },
    {
        key: '4',
        label: (
            <Link to='/ts/types'>
                Types
            </Link>
        )
    },
];
