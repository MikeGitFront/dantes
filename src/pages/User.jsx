import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { MyContext } from '../App'
import { Centered, Columned, MyButton, PageWrapper } from '../styled/styled'

const User = () => {
    const { setIsLogged } = useContext(MyContext)
    const history = useHistory()

    const logOut = () => {
        setIsLogged(false)
        history.push('/login')
    }

    return (
        <Centered>
            <PageWrapper>
                <Columned>
                    <h1 style={{ color: '#333' }}>User</h1>
                    <MyButton
                        onClick={logOut}
                    >Log out</MyButton>
                </Columned>
            </PageWrapper>
        </Centered>
    )
}

export default User
