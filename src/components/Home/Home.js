import React from 'react'
import AddToList from '../AddToListForm/AddToList'
import Header from '../Header/Header'
import LinksList from '../LinksList/LinksList'
import Advanced from '../Advanced/Advanced'
import Footer from '../Footer/Footer'
import Boost from '../Boost/Boost'


export default function Home() {
  return (
    <div>
      <Header/>
      <AddToList/>
      <LinksList/>
      <Advanced/>
      <Boost/>
      <Footer/>
    </div>
  )
}
