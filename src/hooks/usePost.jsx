import React, { useEffect, useState } from 'react'
import { auth } from '../services/firebase.js';
import {getAllPosts} from "../services/posts.js"
export function usePost() {
  const[posts,setPosts] = useState([])
  async function fetchData() {
    let data = await getAllPosts()
    setPosts(data)
  }
    
    useEffect(() => {
       fetchData()
  
      
    }, []);
  return posts;
}
