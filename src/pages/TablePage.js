import React from 'react';
import Table from '../components/Table';
import SortableTable from '../components/SortableTable';

const TablePage = () => {
    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 5 },
        { name: 'Apple', color: 'bg-red-500', score: 3 },
        { name: 'Banana', color: 'bg-yellow-500', score: 1 },
        { name: 'Lime', color: 'bg-green-500', score: 4 },
        { name: 'Cherry', color: 'bg-red-700', score: 2.5 },
    ];

    const config = [
        {
            label: 'Name',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name
        },
        {
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score
        },
        {
            label: 'Score Squared',
            render: (fruit) => fruit.score ** 2,
            sortValue: (fruit) => fruit.score ** 2
        }
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    };

    return (
        <div>
            <Table config={config} data={data} keyFn={keyFn}></Table>
            <SortableTable config={config} data={data} keyFn={keyFn}></SortableTable>
        </div>
    );
};

export default TablePage;