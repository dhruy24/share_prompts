"use client"
import {useState} from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'

function PromptCard(props) {

  const { data: session } = useSession();
  const {post, handleTagClick, hnadleEdit, handleDelete} = props || {}
  const [copied, setCopied] = useState("")
  //console.log("post",post)

  function handleCopy(){
    console.log("clicked")
    setCopied(post.prompt)
    navigator.clipboard.writeText(post.prompt)
    setTimeout(()=>{
      setCopied("")
    }, 3000)
  }

  return (
    <div className='prompt_card'>
      <div className='flex justify-betwen items-start gap-5'>
        <div className='flex-1 flex justidy-start items-center gap-3 cursor-pointer'>
          <Image
          src={post?.creator?.image || "/assets/images/logo.svg"}
          alt="profile pic"
          width={40}
          height={40}
          className='rounded-full object-contain'
          />
          <div className='flex flex-col'>
            <h3 className='font-santoshi font-semibold text-gray-900'>{post?.creator?.username}</h3>
            <p className='font-inter text-sm text-gray-500'>{post?.creator?.email}</p>
          </div>
        </div>

        <div className='copy_btn' onClick={handleCopy}>
          <Image src={copied === post.prompt
            ? '/assets/icons/tick.svg'
            : '/assets/icons/copy.svg'}
            width={12}
            height={12}
            alt='copy icon'
            />
        </div>
      </div>
      <p className='my-4 fonst-santoshi text-sm text-gray-700'>{post.prompt}</p>
      <p className='font-inter text-sm blue_gradient cursor-pointer' onClick={()=>handleTagClick && handleTagClick(post.tag)}>
        {post.tag}
      </p>
    </div>
  )
}

export default PromptCard