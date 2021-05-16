import React, { useState } from 'react'
import { Centered, PageWrapper } from '../styled/styled'
import style from '../css/faq.module.css'

const Faq = () => {
  const [question, setQuestion] = useState('')

  const whatIsQuestion = () => {
    if (question.trim() !== '') {
      alert('Thank you for question, we will contact you soon')
      setQuestion('')
    }
  }

  return (
    <Centered>
      <PageWrapper>
        <div className={style.wrapper}>
          <h1 className={style.text}>
            This is a page of frequently asked questions
          </h1>
          <h2 className={style.text}>
            Here you can find out the answer to your question
          </h2>
          <div className={style.questionWrapper}>
            <p className={style.questiontext}>Enter your question here:</p>
            <form className={style.questionForm}>
              <input
                required
                type="text"
                className={style.questionInput}
                placeholder="What is your question?"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
              />
              <button className={style.questionButton} onClick={whatIsQuestion}>
                Send question
              </button>
            </form>
          </div>
        </div>
      </PageWrapper>
    </Centered>
  )
}

export default Faq
