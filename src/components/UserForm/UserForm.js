import React, { Component } from 'react'
import { Form, Spin, Input, DatePicker, InputNumber, Icon, Button } from 'antd';
import './UserForm.scss'

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class UserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      firstName: '',
      lastName: '',
      hobby: '',
      age: '',
      birthday: ''
    }
  }

  onChangeDate = (date, dateString) => {
    this.setState({
      birthday: dateString
    })
  }

  onChangeAge = (value) => {
    this.setState({
      age: value
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    const { firstName, lastName, hobby, age, birthday } = this.state
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState({
          loading: true
        })
        const inputs = {
          firstName, lastName, hobby, age, birthday
        }
        setTimeout(() => {
          this.setState({
            loading: false
          })
          this.props.getInputs(inputs)
          this.props.form.resetFields()
        }, 2000);
      }
    });
  };

  render() {
    const { loading } = this.state
    const { getFieldDecorator } = this.props.form
    const dateFormat = 'DD/MM/YYYY';

    return (
      <div className="form">
        <Spin tip="Adding user..." indicator={antIcon} spinning={loading}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item label="First Name">
              {getFieldDecorator('firstName', {
                rules: [{ required: true, message: 'Please input your first name' }],
              })(
                <Input
                  placeholder="First Name"
                  name="firstName"
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                />
              )}
            </Form.Item>
            <Form.Item label="Birthday">
              {getFieldDecorator('birthday', {
                rules: [{ required: true, message: 'Please select your birthday' }],
              })(
                <DatePicker onChange={this.onChangeDate} format={dateFormat} />
              )}
            </Form.Item>
            <Form.Item label="Age">
              {getFieldDecorator('age', {
                rules: [{ required: true, message: 'Please input your age' }],
              })(
                <InputNumber min={1} onChange={this.onChangeAge}placeholder="Age" />
              )}
            </Form.Item>

            <Form.Item label="Hobby">
              {getFieldDecorator('bobby', {
                rules: [{ required: true, message: 'Please input your hobby' }],
              })(
                <Input
                  placeholder="Hobby"
                  name="hobby"
                  onChange={this.handleChange}
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button className="reset-btn" type="danger" onClick={() => {
                this.props.form.resetFields()
              }}>
                Reset
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    )
  }
}

const WrappedUserForm = Form.create()(UserForm);
export default WrappedUserForm
