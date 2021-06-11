import React from 'react'
import Table from '../components/Table'
import WithLoading from '../HOC/WithLoading'

const HomePage = ({data}) => {
    console.log(data);
    return (
        <div>
            <Table data={data}/>
        </div>
    )
}

export default WithLoading(HomePage, 'https://60b4f3d9fe923b0017c83440.mockapi.io/api/v1/users')
