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
