import React from 'react';

import Table from 'components/DataGrid';
import { Badge } from 'antd';
import { dataGridDataSource, dataGridDataSource1 } from 'stories/mocking.data';

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

// sample
const statusColorMap = {
    "In homestay": "green",
    "Upcoming": "blue",
    "On holidays": "gold",
}
const columns1 = [
    { title: "Name", dataIndex: "Name", key: "Name" },
    { title: "Date of birth", dataIndex: "Date of birth", key: "Date of birth" },
    { title: "Gender", dataIndex: "Gender", key: "Gender" },
    { title: "Arrival date", dataIndex: "Arrival date", key: "Arrival date" },
    { title: "School ID", dataIndex: "School ID", key: "School ID" },
    { title: "Homestay Host", dataIndex: "Homestay Host", key: "Homestay Host" },
    {
        title: "Current status",
        dataIndex: "Current status",
        key: "Current status",
        sortable: true,
        render: status => (
            <Badge color={statusColorMap[status]} text={status} />
        )
    },
];
const filterLists1 = [
    { filters: ["All", "Current", "Upcoming", "On holidays"], onFilter: value => console.log('filter ', value) },
    { filters: ["All", "Under 18", "Over 18"], onFilter: value => console.log('filter ', value) },
    { filters: ["All", "Open issue"], onFilter: value => console.log('filter ', value) },
]

export const badgeTable = () => <Table dataSource={dataGridDataSource1} columns={columns1} filterLists={filterLists1} />