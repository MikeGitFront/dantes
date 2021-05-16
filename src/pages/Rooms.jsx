import React, { useState } from 'react'
import { Columned, MyButton, SpreadedVerticalWrapper } from '../styled/styled'
import { Card } from 'antd';
import roomBackground from './../images/room-background.jpg'
import { useHistory } from 'react-router';

const Rooms = ({ rooms }) => {
    const gridStyle = {
        width: '20%',
        textAlign: 'center',
        minHeight: '200px',
        minWidth: '200px',
        maxWidth: '380px',
        backgroundImage: `url('${roomBackground}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }

    const history = useHistory()

    const [isRoom, setIsRoom] = useState(false)

    const enterRoom = (id) => {
        setIsRoom(true)
        history.push('/room')
    }

    return (
        <Columned>
            <Card title="Rooms recommended for you (based on your interests)" style={{ maxWidth: '1001px', textAlign: 'center', boxShadow: '0px 0px 4px 1px black' }}>
                {rooms.map(room =>
                    <Card.Grid
                        key={room.id}
                        hoverable={false}
                        style={gridStyle}>
                        <SpreadedVerticalWrapper>
                            <h2>{room.title}</h2>
                            <MyButton
                                style={{ margin: '5px' }}
                                onClick={() => enterRoom(room.id)}
                            >Join room</MyButton>
                        </SpreadedVerticalWrapper>
                    </Card.Grid>
                )}
            </Card>
        </Columned >

    )
}

export default Rooms
