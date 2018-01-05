import React from 'react'
import cardImg from '../img/xiaoqiu.jpg'
import Media from './Media'
import Card from './Card'
import Level from './Level'

const Profile = () => (
  <Card pic={cardImg} size="is-4by3" lazy={false}>
    <Media title="邱译莹" subtitle="@fishfish_7" />
    <Level
      copy={[
        { heading: '生日', title: '1998/1/6 🎂' },
        { heading: '生肖', title: 'Tiger 🐯' },
        { heading: '星座', title: 'Capricorn ♑️' }
      ]}
      size="is-6"
    />
    <div className="content"></div>
  </Card>
)

export default Profile
