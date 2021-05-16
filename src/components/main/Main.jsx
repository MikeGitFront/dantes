import React from 'react'
import {
  Registration,
  Centered,
  PageWrapper,
  RegText,
} from '../../styled/styled'
import style from './main.module.css'

const Main = () => {
  return (
    <Centered>
      <PageWrapper>
        <Registration style={{ padding: '20px' }}>
          <RegText>This is your first time in this application</RegText>
          <RegText>You must register to continue</RegText>
          <form className={style.regForm}>
            <div className={style.regFormItem}>
              <p className={style.regText}>Enter your name:</p>
              <input
                type="text"
                placeholder="Name"
                required
                className={style.regInput}
              />
            </div>
            <div className={style.regFormItem}>
              <p className={style.regText}>Enter your password:</p>
              <input
                type="password"
                required
                placeholder="Password"
                className={style.regInput}
              />
            </div>
            <div className={style.regFormItem}>
              <p className={style.regText}>Repeat your password:</p>
              <input
                type="password"
                placeholder="Repeat password"
                required
                className={style.regInput}
              />
            </div>
            <div className={style.regFormItem}>
              <p className={style.regText}>Choose your region:</p>
              <select className={style.regInput}>
                <option selected>Region</option>
                <option>Europe</option>
                <option>North America</option>
                <option>Sorth America</option>
                <option>Asia</option>
              </select>
            </div>
            <button className={style.regButton}>Sign up</button>
          </form>
        </Registration>
      </PageWrapper>
    </Centered>
  )
}

export default Main
