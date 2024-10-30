import React from 'react'
import PublicLayout from '../../layouts/PublicLayout'
import Career from '../../components/career/Career'

const CareerPage = () => {

  return (
    <PublicLayout>
    <h1 className="bg-gradient-text text-transparent bg-clip-text text-4xl mt-5 font-semibold leading-[48px]">
    Member
    </h1>
    <div className="py-10 h-auto">
      <Career/>
    </div>
  </PublicLayout>
  )
}

export default CareerPage
