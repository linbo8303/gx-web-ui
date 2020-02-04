import React from 'react';

import Table from 'components/DataGrid';
import { dataGridDataSource } from 'stories/mocking.data';

export default {
    title: 'Component - DataGrid',
};

const columns = Object.keys(dataGridDataSource[0]).map(key => ({
    title: _.upperFirst(key),
    dataIndex: key,
    editable: true,
    key,
}));

export const defaultTable = () => <Table dataSource={dataGridDataSource} columns={columns} />;
export const selectableTable = () => <Table dataSource={dataGridDataSource} columns={columns} rowSelectable={true} showColumns={true} />;
export const editableTable = () => <Table dataSource={dataGridDataSource} columns={columns} onSave={() => { console.log('save') }} onDelete={() => console.log('delete')} />;
export const filterableTable = () => <Table dataSource={dataGridDataSource} columns={columns} filterLists={[
    { filters: ['All', 'China', 'England'], onFilter: () => console.log('filter') }
]} />;
