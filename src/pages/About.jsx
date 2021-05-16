import React from 'react'
import { Centered, PageWrapper } from '../styled/styled'
import style from '../css/about.module.css'

const About = () => {
  return (
    <Centered>
      <PageWrapper>
        <div className={style.wrapper}>
          <h1 className={style.firstText}>Welcome to Dantes!</h1>
          <p className={style.text}>
            This is a web application for your leisure time
          </p>
        </div>
      </PageWrapper>
    </Centered>
  )
}

export default About
