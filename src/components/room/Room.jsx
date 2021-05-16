import { Button } from 'antd'
import React from 'react'
import { useHistory } from 'react-router'
import { Columned } from '../../styled/styled'

const Room = ({ id }) => {
    const history = useHistory()
    return (
        <Columned>
            {id}
            <div style={{ display: 'flex', marginBottom: '10px' }}>
                <div
                    style={{ boxShadow: '0px 0px 4px 1px #333', border: '1px solid #333', width: '500px', height: '500px', color: '#333', background: 'lightblue', marginRight: '50px', borderRadius: '10px', padding: '10px' }}
                >
                    <h1>Player 1</h1>
                </div>

                <div
                    style={{ boxShadow: '0px 0px 4px 1px #333', border: '1px solid #333', width: '500px', height: '500px', color: '#333', background: 'lightblue', borderRadius: '10px', padding: '10px' }}
                >
                    <h1>Player 2</h1>
                </div>
            </div>
            <Button
                type='primary'
                onClick={() => history.goBack()}
            >Back</Button>
        </Columned >
    )
}

export default Room
