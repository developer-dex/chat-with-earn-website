import React from 'react'
import PublicLayout from '../../layouts/PublicLayout'
import ChatComponent from '../../components/chat/ChatComponent'

const HomePage = () => {
  return (
    <PublicLayout>
      <h1 className="bg-gradient-text text-transparent bg-clip-text text-3xl mt-2.5 font-semibold leading-[48px]">
      Walcome, Sahil
      </h1>
      <div className="py-5 h-auto">
        <ChatComponent/>
      </div>
    </PublicLayout>
  )
}

export default HomePage
