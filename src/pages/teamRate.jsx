import React from 'react'

import Header from '../components/Header';
import TeamTable from '../components/TeamTable';
import Footer from '../components/Footer';
const TeamRate = () => {
  return (
    <div>
    <Header/>
    <hr className="my-2" />
    <main className='h-[73vh]'>
      <TeamTable/>
    </main>
    <Footer/>
  </div>
  )
}

export default TeamRate
