import React from 'react'
import {useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Login from './Login'
import DashboardShell from '../layouts/DashboardShell'

const Layout = () => {

  const {user, loading} = useSelector(state => state.auth)

  if(loading){
    return <Loader />
  }

  return (
    <div>
      {
        user ? (
        <DashboardShell />
      ) 
      : <Login />
      }
      
    </div>
  )
}

export default Layout
