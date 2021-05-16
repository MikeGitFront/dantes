import React from 'react'
import { Centered, PageWrapper } from '../styled/styled'
import style from '../css/invite.module.css'

const Invite = () => {
  return (
    <Centered>
      <PageWrapper>
        <div className={style.wrapper}>
          <h1 className={style.h}>Hi there!</h1>
          <p className={style.p}>
            You can invite your fried, both of you will receive a gift
          </p>
          <p className={style.p}>
            Copy this link and send it your friend:{' '}
            <a href="#" className={style.a}>
              Click to copy
            </a>
          </p>
        </div>
      </PageWrapper>
    </Centered>
  )
}

export default Invite
