import React, { Component } from 'react'
import { PageHeader, Modal, Button } from 'antd'
import UserForm from '../UserForm/UserForm'
import './Header.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }

  showModal = () => {
    this.setState({
      modalVisible: true,
    })
  }

  getInputs = (inputs) => {
    this.props.addInputs(inputs)
    this.handleCancel()
  }

  handleCancel = () => {
    this.setState({ modalVisible: false });
  }

  render() {
    const { modalVisible } = this.state

    return (
      <div className="header">
        <PageHeader
          title="Bello Ajibola"
          subTitle="Coding Challenge 1"
          avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
          extra={[
            <Button  key="1" type="primary" onClick={this.showModal} icon="user">
              Add User
            </Button>
          ]}
        />
        <Modal
          title="Add User Information"
          visible={modalVisible}
          onCancel={this.handleCancel}
          footer={false}
        >
          <UserForm getInputs={this.getInputs}/>
        </Modal>
      </div>
    )
  }
}

export default Header
