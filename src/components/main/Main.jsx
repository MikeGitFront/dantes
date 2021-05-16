import React, { useState } from 'react'
import {
  Registration,
  Centered,
  PageWrapper,
  RegText,
} from '../../styled/styled'

import { Button, Form, Input, Select } from 'antd'
import 'antd/dist/antd.css'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'

const Main = () => {
  const [options] = useState([
    { value: 'Choose your continent' },
    { value: 'Europe' },
    { value: 'Asia' },
    { value: 'North America' },
    { value: 'South America' },
    { value: 'Oceania' },
    { value: 'Africa' },
    { value: 'Antarctica' },
  ])
  const [form] = Form.useForm()

  return (
    <Centered>
      <PageWrapper>
        <Registration style={{ padding: '20px' }}>
          <RegText>This is your first time in this application</RegText>
          <RegText>You must register to continue</RegText>
          <Form
            form={form}
            style={{
              width: '100%',
              maxWidth: '600px',
              padding: '0 30px'
            }}
            name="basic"
            initialValues={[
              {
                remember: 'true',
                email: '',
                password: '',
              }
            ]}
          >
            <Form.Item
              style={{ border: '1px solid #333', borderRadius: '4px' }}
              name="email"
              rules={[
                {
                  type: 'email',
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input prefix={< MailOutlined />} placeholder="Email" />
            </Form.Item>

            <Form.Item
              style={{ border: '1px solid #333', borderRadius: '4px' }}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              style={{ border: '1px solid #333', borderRadius: '4px' }}
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              style={{ border: '1px solid #333', borderRadius: '4px' }}
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Repeat your password"
              />
            </Form.Item>
            <Select
              defaultValue={"Choose continent"}
              style={{ marginBottom: '10px', minWidth: '160px', width: '100%', border: '1px solid #333', borderRadius: '4px' }}
            >
              {options.map(option => <Select.Option key={option.value} value={option.value}>{option.value}</Select.Option>)}
            </Select>

            <Form.Item >
              <Button type="primary" htmlType="submit">
                Submit
                        </Button>
            </Form.Item>
          </Form>
        </Registration>
      </PageWrapper>
    </Centered>
  )
}

export default Main
