import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import useSendMessage from "../../hooks/useSendMessage";
const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage}=useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          placeholder="Send a message"
          value={message}
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          onChange={(e)=>setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
          
        >
          {loading ? <div className="loading loading-spinner"></div>: <MdSend />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

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
