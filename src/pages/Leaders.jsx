import React from 'react'
import { Centered, PageWrapper } from '../styled/styled'
import style from '../css/leaders.module.css'

const Leaders = () => {
  return (
    <Centered>
      <PageWrapper>
        <div className={style.wrapper}>
          <h1 className={style.heading}>Leaders of the game</h1>
          <div className={style.userWrapper}>
            <div className={style.name}>Alex</div>
            <div className={style.score}>Score: 561</div>
          </div>
          <div className={style.userWrapper}>
            <div className={style.name}>Michael</div>
            <div className={style.score}>Score: 541</div>
          </div>
          <div className={style.userWrapper}>
            <div className={style.name}>Kate</div>
            <div className={style.score}>Score: 491</div>
          </div>
          <div className={style.userWrapper}>
            <div className={style.name}>Adam</div>
            <div className={style.score}>Score: 490</div>
          </div>
          <div className={style.userWrapper}>
            <div className={style.name}>Mason</div>
            <div className={style.score}>Score: 471</div>
          </div>
          <div className={style.userWrapper}>
            <div className={style.name}>Nicholas</div>
            <div className={style.score}>Score: 450</div>
          </div>
          <div className={style.userWrapper}>
            <div className={style.name}>David</div>
            <div className={style.score}>Score: 410</div>
          </div>
          <div className={style.userWrapper}>
            <div className={style.name}>Sean</div>
            <div className={style.score}>Score: 380</div>
          </div>
          <div className={style.userWrapper}>
            <div className={style.name}>Thomas</div>
            <div className={style.score}>Score: 350</div>
          </div>
          <div className={style.userWrapper}>
            <div className={style.name}>Michael</div>
            <div className={style.score}>Score: 286</div>
          </div>
          <p className={style.text}>You are the best! Let's go!</p>
        </div>
      </PageWrapper>
    </Centered>
  )
}

export default Leaders
