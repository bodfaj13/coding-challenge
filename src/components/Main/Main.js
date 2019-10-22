import React, { useState } from 'react'
import { Table, Typography } from 'antd'
import { useSelector } from 'react-redux'
import './main.scss'

const { Title } = Typography

const Main = (props) => {
  const [columns] = useState([
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Hobby',
      dataIndex: 'hobby',
      key: 'hobbby',
    }
  ])

  const tableData = useSelector((state) => state.users)
  const { users } = tableData

  return (
    <div className="main">
      <Title level={4} className="title">User Table</Title>
      <Table columns={columns} dataSource={users} />
    </div>
  )

}

export default Main