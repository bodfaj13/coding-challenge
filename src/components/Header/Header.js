import React, { useState } from 'react'
import { PageHeader, Modal, Button } from 'antd'
import UserForm from '../userForm/userForm'
import './header.scss'

const Header = (props) => {
  const [modalVisible, setModalVisible] = useState(false)

  const showModal = () => {
    setModalVisible(true)
  }

  const handleCancel = () => {
    setModalVisible(false)
  }

  return (
    <div className="header">
      <PageHeader
        title="Bello Ajibola"
        subTitle="Coding Challenge 1"
        avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
        extra={[
          <Button key="1" type="primary" onClick={showModal} icon="user">
            Add User
          </Button>
        ]}
      />
      <Modal
        title="Add User Information"
        visible={modalVisible}
        onCancel={handleCancel}
        footer={false}
      >
        <UserForm closeModal={handleCancel}/>
      </Modal>
    </div>
  )
}

export default Header
