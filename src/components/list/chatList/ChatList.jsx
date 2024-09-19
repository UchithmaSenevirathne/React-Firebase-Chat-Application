import React, { useState } from 'react'
import "./chatList.css"

const ChatList = () => {
  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder='Search'/>
        </div>
        <img src="./plus.png" alt="" className='add'/>
      </div>
    </div>
  )
}

export default ChatList