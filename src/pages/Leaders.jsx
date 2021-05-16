import React from 'react'
import { Centered, PageWrapper } from '../styled/styled'
import style from '../css/leaders.module.css'

const Leaders = ({ currentLeaders }) => {


  return (
    <Centered>
      <PageWrapper>
        <div className={style.wrapper}>
          <h1 className={style.heading}>Leaders of the game</h1>

          {currentLeaders.map(guy => <div className={style.userWrapper}>
            <div className={style.name}>{guy.country}</div>
            <div className={style.name}>{guy.name}</div>
            <div className={style.name}>{`Score: ${guy.score}`}</div>
            <div className={style.score}>{guy.favouriteCompetition}</div>
          </div>)}
          <p className={style.text}>You are the best! Let's go!</p>
        </div>
      </PageWrapper>
    </Centered>
  )
}

export default Leaders
