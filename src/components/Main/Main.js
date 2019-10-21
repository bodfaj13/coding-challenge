import React, { Component } from 'react'
import { Table, Typography } from 'antd'
import './Main.scss'
const { Title } = Typography

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tableData: [
        // {
        //   key: 1,
        //   firstName: 'Ajibola',
        //   lastName: 'Bello',
        //   birthday: '12/30/1998',
        //   age: 21,
        //   hobby: 'coding'
        // }
      ],
      columns: [
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
      ]
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { newInput } = nextProps
    const { tableData } = this.state
    if(newInput) {
      newInput.key = tableData.length + 1
      this.setState({
        tableData: [...tableData, newInput]
      }, () => {
        console.log(this.state.tableData)
      })
    }
  }

  render() {
    const { columns, tableData } = this.state
    return (
      <div className="main">
        <Title level={4} className="title">User Table</Title>
        <Table columns={columns} dataSource={tableData} />
      </div>
    )
  }
}

export default Main