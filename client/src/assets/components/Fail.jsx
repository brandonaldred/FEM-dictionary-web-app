import React from 'react'
import emoji from '../emoji.png'

const Fail = (props) => {
  return (
    <main className="failed-search">
        <img src={emoji} alt={props.title} />
        <h3 className="failed-title">{props.title}</h3>
        <p>{`${props.message} ${props.resolution}`}</p>
    </main>
  )
}

export default Fail