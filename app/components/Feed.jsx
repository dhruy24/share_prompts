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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // pages/feed.js
// import PromptCardList from "../components/PromptCardList";

// // This function will run on the server side to fetch the data before rendering the page
// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:5000/api/prompt'); // Replace with your API URL
//   const data = await response.json();

//   return {
//     props: {
//       posts: data || [] // Pass the fetched data to the component
//     }
//   }
// }

// "use client"
// import { useState } from "react"
// function Feed({ posts }) {
//   const [searchText, setSearchText] = useState(''); // The state for search text

//   function handleSearchChange(e) {
//     setSearchText(e.target.value); // Update search text on input change
//   }

//   return (
//     <section className="feed">
//       <form className="relative w-full flex-center">
//         <input
//           type="text"
//           placeholder="Search for a tag or a username"
//           value={searchText}
//           onChange={handleSearchChange}
//           className="search_input peer"
//           required
//         />
//       </form>
//       {/* Render the list of posts with the fetched data passed from getServerSideProps */}
//       <PromptCardList 
//         data={posts} 
//         handleTagClick={(e) => {}}
//       />
//     </section>
//   );
// }

// export default Feed;
