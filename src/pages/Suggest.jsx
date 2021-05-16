import React, { useState } from 'react'
import { Centered, Columned, MyButton, PageWrapper } from '../styled/styled'

const Suggest = () => {
  const [textareaValue, setTextareaValue] = useState('')

  const sendValue = () => {
    if (textareaValue.trim() !== '') {
      alert('Thank you for showing interest in our improvement!')
      setTextareaValue('')
    }
  }

  return (
    <Centered>
      <PageWrapper>
        <Columned>
          <h1 style={{ marginBottom: '10px', color: '#333' }}>Suggest</h1>
          <textarea
            style={{
              maxWidth: '400px',
              maxHeight: '200px',
              minWidth: '250px',
              minHeight: '100px',
              padding: '5px',
              marginBottom: '10px',
            }}
            onChange={(e) => setTextareaValue(e.target.value)}
            value={textareaValue}
            placeholder="suggest the way of competing"
          ></textarea>
          <MyButton onClick={sendValue}>Send my idea</MyButton>
        </Columned>
      </PageWrapper>
    </Centered>
  )
}

export default Suggest
