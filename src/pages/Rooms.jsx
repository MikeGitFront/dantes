import React from 'react'
import { Centered, Columned, MyButton, Row } from '../styled/styled'
import styled from 'styled-components'

const GridWrapper = styled.div`
    display:grid;
    min-height:70vh;
    grid-template-rows:1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap:10px;
`

const Card = styled.div`
    width:250px;
    background-color:black;
    border-radius:8px;
    transition:0.4s all linear;
    cursor:pointer;
    &:hover {
        background-color:#333;
    }
`

const Rooms = () => {
    return (
        <Columned>
            <h1 style={{ marginBottom: '10px', color: 'white' }}>Rooms recommended for you (based on your interests) </h1>
            <GridWrapper>
                <Card>
                    <Row>
                        <Centered>
                            <MyButton style={{ margin: '5px' }}>Join room</MyButton>
                        </Centered>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <Centered>
                            <MyButton style={{ margin: '5px' }}>Join room</MyButton>
                        </Centered>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <Centered>
                            <MyButton style={{ margin: '5px' }}>Join room</MyButton>
                        </Centered>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <Centered>
                            <MyButton style={{ margin: '5px' }}>Join room</MyButton>
                        </Centered>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <Centered>
                            <MyButton style={{ margin: '5px' }}>Join room</MyButton>
                        </Centered>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <Centered>
                            <MyButton style={{ margin: '5px' }}>Join room</MyButton>
                        </Centered>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <Centered>
                            <MyButton style={{ margin: '5px' }}>Join room</MyButton>
                        </Centered>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <Centered>
                            <MyButton style={{ margin: '5px' }}>Join room</MyButton>
                        </Centered>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <Centered>
                            <MyButton style={{ margin: '5px' }}>Join room</MyButton>
                        </Centered>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <Centered>
                            <MyButton style={{ margin: '5px' }}>Join room</MyButton>
                        </Centered>
                    </Row>
                </Card>
            </GridWrapper>
        </Columned >
    )
}

export default Rooms
