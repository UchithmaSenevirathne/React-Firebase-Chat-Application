import React from 'react'
import './addUser.css'
import { db } from "../../../../lib/firebase";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useState } from "react";
import { useUserStore } from "../../../../lib/userStore";

const AddUser = () => {
  const [user, setUser] = useState(null);
  const { currentUser } = useUserStore();
  return (
    <div className='addUser'>
        <form>
            <input type="text" placeholder='Username' name='username'/>
            <button>Search</button>
        </form>
        <div className="user">
            <div className="detail">
                <img src="./avatar.png" alt="" />
                <span>Jane Doe</span>
            </div>
            <button>Add User</button>
        </div>
    </div>
  )
}

export default AddUser