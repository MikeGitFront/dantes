import React, { useContext } from 'react'
import { FaUserFriends, FaQuestion, FaUserCircle } from 'react-icons/fa'
import { IoIosContacts } from 'react-icons/io'
import { BsClipboardData } from 'react-icons/bs'
import { BiCurrentLocation } from 'react-icons/bi'
import { GrDirections } from 'react-icons/gr'
import { RiUserSearchLine } from 'react-icons/ri'
import { GiPlagueDoctorProfile } from 'react-icons/gi'
import { Row, Wrapper } from '../../styled/styled'
import { Link } from 'react-router-dom'
import { MyContext } from '../../App'

const Header = () => {
    const { isLogged } = useContext(MyContext)

    return (
        <Wrapper>
            <Row>
                <Link style={{ fontSize: '44px', textDecoration: 'none', color: 'black' }} to="/" >Logo</Link>
                <Row style={{ fontSize: '36px', marginTop: '10px' }}>
                    <Link
                        style={{
                            color: 'black',
                            marginLeft: '10px'
                        }} to="/about"><GiPlagueDoctorProfile /></Link>
                    <Link
                        style={{
                            color: 'black',
                            marginLeft: '10px'
                        }} to="/invite"><FaUserFriends /></Link>
                    <Link
                        style={{
                            color: 'black',
                            marginLeft: '10px'
                        }} to="/faq"><FaQuestion /></Link>
                    <Link
                        style={{
                            color: 'black',
                            marginLeft: '10px'
                        }} to="/contacts"><IoIosContacts /></Link>
                    {isLogged
                        ? <Link
                            style={{
                                color: 'black',
                                marginLeft: '10px'
                            }} to="/user"><FaUserCircle /></Link>
                        : <Link
                            style={{
                                color: 'black',
                                marginLeft: '10px'
                            }} to="/login"><FaUserCircle /></Link>
                    }
                    <Link

                        style={{
                            color: 'black',
                            marginLeft: '10px'
                        }} to="/leaders"><BsClipboardData /></Link>
                    <Link

                        style={{
                            color: 'black',
                            marginLeft: '10px'
                        }} to="/rooms"><BiCurrentLocation /></Link>
                    <Link

                        style={{
                            color: 'black',
                            marginLeft: '10px'
                        }} to="/suggest"><GrDirections /></Link>
                    <Link

                        style={{
                            color: 'black',
                            marginLeft: '10px'
                        }} to="/search"><RiUserSearchLine /></Link>
                    {isLogged && <Link

                        style={{
                            color: 'black',
                            marginLeft: '10px'
                        }} to="/"><RiUserSearchLine /></Link>}

                </Row>
            </Row>
        </Wrapper >
    )
}

export default Header
