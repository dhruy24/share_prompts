
import React from 'react'
async function page(params) {
  //const { postId } = params.postId;
  //const { postId } = await params.params;
  let {postId} = await(params.params)
  let res = await fetch("http://localhost:3000/api/posts")
  console.log("data:-", await res.json())
  return (
    <div>pagezzz {postId}</div>
  )
}

export default page


//##### For Client #######//
// "use client";

// import React from 'react';
// import { useParams } from 'next/navigation';

// export default function Page() {
//   const { postId } = useParams();

//   return (
//     <div>
//       <h1>Post ID: {postId}</h1>
//     </div>
//   );
// }