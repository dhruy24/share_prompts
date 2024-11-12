'use client'
import { useState, useEffect } from "react"
import PromptCard from "./PromptCard"

const PromptCardList = ({data, handleTagClick}) =>{
  //console.log("data", data)
  return(
    <div className="mt-6 prompt_layout">
      {data?.map((post)=>(
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}


function Feed() {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([])
  function handleSearchChange(){

  }

  useEffect(()=>{
    const fetchPost = async ()=>{
      const response = await fetch("/api/prompt");
      const data = await response.json()
      setPosts(data)
    }
    fetchPost()
  },[])

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
         type="text"
         placeholder="Search for a tag or a username"
         value={searchText}
         onChange={handleSearchChange}
         className="search_input peer"
         required
        />
      </form>
      <PromptCardList 
       data={posts}
       handleTagClick={(e)=>{}}
      />
    </section>
  )
}

export default Feed