import React from 'react'
const Profile = () => (
  <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title">小邱邱</p>
    </header>
    <section className="modal-card-body">
      <div className="tabs is-centered">
        <ul>
          <li className="is-active">
            <a>基本信息</a>
          </li>
          <li>
            <a>在校情况</a>
          </li>
        </ul>
      </div>
    </section>
    <footer className="modal-card-foot">
      <small className="has-text-grey-dark">Just I know</small>
    </footer>
  </div>
)

export default Profile
