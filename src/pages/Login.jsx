import React, { useContext, useState } from 'react'
import { Centered, Columned, MyButton, PageWrapper } from '../styled/styled'
import { MyContext } from '../App'
import { useHistory } from 'react-router'
import styled from 'styled-components'

const MyInput = styled.input`
    border:none;
    border-bottom:1px solid #555;
    margin-bottom:10px;
    outline:none;
    padding:8px 2px;
    min-width:280px;
    max-width:
`

const Login = () => {
    const { setIsLogged } = useContext(MyContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const logIn = (e) => {
        e.preventDefault()
        validateLogin()
    }

    const validateLogin = () => {
        if (email === 'Colourful' && password === 'NotReally22') {
            setIsLogged(true)
            alert('Successfully logged in')
            history.push('/user')
        }
        else {
            alert('Incorrent values')
            setEmail('')
            setPassword('')
        }

    }

    return (
        <Centered>
            <PageWrapper>
                <form onSubmit={logIn} >
                    <h1 style={{ textAlign: 'center', color: 'white' }}>Log in</h1>
                    <Columned
                        style={{ marginTop: '20px' }}
                    >
                        <p style={{ color: 'white' }}>Email: Colourful</p>
                        <MyInput
                            value={email}
                            type="email"
                            onChange={e => setEmail(e.target.value)} />
                        <p style={{ color: 'white' }}>Password: NotReally22</p>
                        <MyInput
                            value={password}
                            type="password"
                            onChange={e => setPassword(e.target.value)} />
                    </Columned>
                    <MyButton style={{ textAlign: 'center' }}
                        onClick={logIn}
                    >Submit</MyButton>
                </form>
            </PageWrapper>
        </Centered >
    )
}

export default Login
