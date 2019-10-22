import React, { useState } from 'react'
import { Form, Spin, Input, DatePicker, InputNumber, Icon, Button } from 'antd'
import { useDispatch } from 'react-redux'
import * as CONSTANT from '../../core/constants/constants'
import uuid from 'uuid/v4'
import './userForm.scss'

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />

const UserForm = (props) => {
  const [loading, setLoading] = useState(false)
  const [firstName, setInputFirstName] = useState('')
  const [lastName, setInputLastName] = useState('')
  const [hobby, setInputHobby] = useState('')
  const [age, setInputAge] = useState(0)
  const [birthday, setInputBirthday] = useState('')
  const addUser = useDispatch()

  const onChangeDate = (date, dateString) => {
    setInputBirthday(dateString)
  }

  const onChangeAge = (value) => {
    setInputAge(value)
  }

  const handleChangesetInputFirstName = (e) => {
    setInputFirstName(e.target.value)
  }

  const handleChangesetInputLastName = (e) => {
    setInputLastName(e.target.value)
  }

  const handleChangesetInputhobby = (e) => {
    setInputHobby(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        setLoading(true)
        const inputs = {
          key: uuid(),
          firstName, 
          lastName, 
          hobby, 
          age, 
          birthday
        }
        setTimeout(() => {
          setLoading(false)
          addUser({
            type: CONSTANT.ADD_USER,
            payload: inputs
          })
          props.closeModal()
          props.form.resetFields()
        }, 2000);
      }
    })
  }

  const { getFieldDecorator } = props.form
  const dateFormat = 'DD/MM/YYYY'

  return (
    <div className="form">
      <Spin tip="Adding user..." indicator={antIcon} spinning={loading}>
        <Form onSubmit={handleSubmit}>
          <Form.Item label="First Name">
            {getFieldDecorator('firstName', {
              rules: [{ required: true, message: 'Please input your first name' }],
            })(
              <Input
                placeholder="First Name"
                name="firstName"
                onChange={handleChangesetInputFirstName}
              />
            )}
          </Form.Item>
          <Form.Item label="Last Name">
            {getFieldDecorator('lastName', {
              rules: [{ required: true, message: 'Please input your last name' }],
            })(
              <Input
                placeholder="Last Name"
                name="lastName"
                onChange={handleChangesetInputLastName}
              />
            )}
          </Form.Item>
          <Form.Item label="Birthday">
            {getFieldDecorator('birthday', {
              rules: [{ required: true, message: 'Please select your birthday' }],
            })(
              <DatePicker onChange={onChangeDate} format={dateFormat}
              />
            )}
          </Form.Item>
          <Form.Item label="Age">
            {getFieldDecorator('age', {
              rules: [{ required: true, message: 'Please input your age' }],
            })(
              <InputNumber min={1} onChange={onChangeAge} placeholder="Age"
              />
            )}
          </Form.Item>

          <Form.Item label="Hobby">
            {getFieldDecorator('bobby', {
              rules: [{ required: true, message: 'Please input your hobby' }],
            })(
              <Input
                placeholder="Hobby"
                name="hobby"
                onChange={handleChangesetInputhobby}
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
              </Button>
            <Button className="reset-btn" type="danger" onClick={() => {
              props.form.resetFields()
            }}>
              Reset
              </Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  )

}

const WrappedUserForm = Form.create()(UserForm)
export default WrappedUserForm
