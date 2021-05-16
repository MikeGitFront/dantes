import React from 'react'
import { Centered, PageWrapper } from '../styled/styled'
import style from '../css/faq.module.css'

const Faq = () => {
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
        </div>
      </PageWrapper>
    </Centered>
  )
}

export default Faq
