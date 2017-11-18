import React from 'react'
import Logo from '../img/logo.jpg'
import Image from './Image'
import Level from './Level'
import { NavLink } from 'react-router-dom'
const Profile = () => (
  <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title">小邱邱</p>
    </header>
    <section className="modal-card-body">
      <div
        className="is-flex"
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          margin: '.5em'
        }}
      >
        <Image src={Logo} size="is-64x64" circle />
      </div>
      <h3 className="subtitle is-size-4">About Her</h3>
      <Level
        copy={[
          { heading: '生日', title: '1998/1/6 🎂' },
          { heading: '生肖', title: 'Tiger 🐯' },
          { heading: '星座', title: 'Capricorn ♑️' }
        ]}
        size="is-size-6"
      />
      <div className="tabs is-centered is-medium">
        <ul>
          <NavLink to="/profile/tab1" activeClassName="is-active">
            基本信息
          </NavLink>
          <NavLink to="/profile/tab2" activeClassName="is-active">
            在校情况
          </NavLink>
        </ul>
      </div>
      <article className="content" style={{ padding: '0 1.5rem' }}>
        <dl>
          <dt>
            名字 
          </dt>
          <dd>
            邱译莹 
          </dd>
          <dt>
            昵称 
          </dt>
          <dl>
            一一，小仙女 
          </dl>
          <dt>
            地址 
          </dt>
          <dl>
            江西赣州市章贡区 
          </dl>
          <dt>
            喜欢的东西 
          </dt>
          <dl>
            小狗狗，大狗狗，鱼，马云爸爸 
          </dl>
          <dt>
            爱好 
          </dt>
          <dl>
            舞蹈，运动，足球 
          </dl>
          <dt>
            小目标 
          </dt>
          <dl>
            环游世界
          </dl>
        </dl>
      </article>
    </section>
    <footer className="modal-card-foot">
      <small className="has-text-grey-dark">Just I know</small>
    </footer>
  </div>
)

export default Profile
