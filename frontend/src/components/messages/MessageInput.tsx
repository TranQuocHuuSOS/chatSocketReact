import React from 'react'
import { MdSend } from "react-icons/md";
const MessageInput = () => {
  return (
    <form className="px-4 my-3">
        <div className='w-full'>
            <input placeholder='Send a message' type='text' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'/>
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
            <MdSend />
            </button>
        </div>
    </form>
  )
}

export default MessageInput




// import React from 'react'
// import { MdSend } from "react-icons/md";
// const MessageInput = () => {
//   return (
//     <form className="px-4 my-3">
//         <div className='w-full'>
//             <input placeholder='Send a message' type='text' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'/>
//             <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
//             <MdSend />
//             </button>
//         </div>
//     </form>
//   )
// }

// export default MessageInput