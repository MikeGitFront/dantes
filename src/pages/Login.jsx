import React, { useContext } from 'react'
import { Centered, PageWrapper } from '../styled/styled'
import { MyContext } from '../App'
import { useHistory } from 'react-router'
import { Button, Form, Input, notification } from 'antd'
import Checkbox from 'antd/lib/checkbox/Checkbox'
import 'antd/dist/antd.css'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const Login = () => {
    const { setIsLogged } = useContext(MyContext)
    const [form] = Form.useForm()
    const history = useHistory()

    const validateLogin = (values) => {
        const key = `open${Date.now()}`;
        if (values.email === 'Colourful@mail.ru' && values.password === 'NotReally22') {
            setIsLogged(true)
            notification['success']({
                key,
                message: 'Success',
                description:
                    'Successfully logged in!',
                onClick: () => {
                    notification.close(key)
                },
            })
            history.push('/user')
            form.resetFields()
        }
        else {
            notification['error']({
                key,
                message: 'Failed',
                description:
                    'Incorrect values. Try once more!',
                onClick: () => {
                    notification.close(key)
                },
            })
        }

    }

    return (
        <Centered>
            <PageWrapper style={{ backgroundColor: 'white', border: '1px solid #333', boxShadow: '0px 0px 4px 1px #333', flexDirection: 'column' }}>
                <h1 style={{ marginBottom: '35px' }}>TO START PLAYING JUST LOG IN</h1>
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
                    onFinish={validateLogin}
                    onFinishFailed={validateLogin}
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
                        <Input prefix={<UserOutlined />} placeholder="Email" />
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

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </PageWrapper>
        </Centered >
    )
}

export default Login
