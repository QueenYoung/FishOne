import React from 'react'
import Logo from '../img/logo.jpg'
import Image from './Image'
const Profile = () => (
  <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title">小邱邱</p>
    </header>
    <section className="modal-card-body">
      <div className="is-flex" style={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: '.5em'
      }}>
        <Image src={Logo} size='is-64x64' circle/>
      </div>
      <div className="tabs is-centered is-medium">
        <ul>
          <li className="is-active">
            <a>基本信息</a>
          </li>
          <li>
            <a>在校情况</a>
          </li>
        </ul>
      </div>
      <article className="content section">
        <dl className="container">
          <dt>12</dt>
          <dd>ejrkl</dd>
        </dl>
      </article>
    </section>
    <footer className="modal-card-foot">
      <small className="has-text-grey-dark">Just I know</small>
    </footer>
  </div>
)

export default Profile
