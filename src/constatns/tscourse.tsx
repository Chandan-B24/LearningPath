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
    {
        key: '5',
        label: (
            <Link to='/ts/arrays'>
                Arrays
            </Link>
        )
    },
    {
        key: '6',
        label: (
            <Link to='/ts/enums'>
                Enums
            </Link>
        )
    },
    {
        key: '7',
        label: (
            <Link to='/ts/generics'>
                Generics
            </Link>
        )
    },
    {
        key: '8',
        label: (
            <Link to='/ts/modules'>
                Modules
            </Link>
        )
    },
    {
        key: '9',
        label: (
            <Link to='/ts/partial'>
                Partial
            </Link>
        )
    },
    {
        key: '10',
        label: (
            <Link to='/ts/pick'>
                Pick
            </Link>
        )
    },
    {
        key: '11',
        label: (
            <Link to='/ts/readonly'>
                Readonly
            </Link>
        )
    },
    {
        key: '12',
        label: (
            <Link to='/ts/record'>
                Record and Map
            </Link>
        )
    },
];
