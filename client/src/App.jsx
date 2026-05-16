import React, { Suspense, lazy, useCallback, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import ResumeBuilder from './pages/ResumeBuilder'
import Preview from './pages/Preview'
import { useDispatch } from 'react-redux'
import api from './configs/api'
import { login, setLoading } from './app/features/authSlice'
import {Toaster} from 'react-hot-toast'
import RouteFallback from './components/RouteFallback'
import PublicLayout from './layouts/PublicLayout'

const SaasPage = lazy(() => import('./pages/SaasPage'))
const Support = lazy(() => import('./pages/Support'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Blogs = lazy(() => import('./pages/Blogs'))
const Careers = lazy(() => import('./pages/Careers'))
const Community = lazy(() => import('./pages/Community'))
const About = lazy(() => import('./pages/About'))
const LegalPage = lazy(() => import('./pages/LegalPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

const App = () => {

  const dispatch = useDispatch()
  const location = useLocation()

  const getUserData = useCallback(async () => {
    const token = localStorage.getItem('token')
    try {
      if(token){
        const { data } = await api.get('/api/users/data', {headers: {Authorization: token}})
        if(data.user){
          dispatch(login({token, user: data.user}))
        }
        dispatch(setLoading(false))
      }else{
        dispatch(setLoading(false))
      }
    } catch (error) {
      dispatch(setLoading(false))
      console.log(error.message)
    }
  }, [dispatch])

  useEffect(()=>{
    getUserData()
  },[getUserData])

  return (
    <>
    <Toaster />
      <Suspense fallback={<RouteFallback />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />}/>

            <Route element={<PublicLayout />}>
              <Route path='features' element={<SaasPage type="features" />}/>
              <Route path='support' element={<Support />}/>
              <Route path='pricing' element={<Pricing />}/>
              <Route path='affiliate' element={<SaasPage type="affiliate" />}/>
              <Route path='company' element={<SaasPage type="company" />}/>
              <Route path='blogs' element={<Blogs />}/>
              <Route path='community' element={<Community />}/>
              <Route path='careers' element={<Careers />}/>
              <Route path='about' element={<About />}/>
              <Route path='privacy' element={<LegalPage type="privacy" />}/>
              <Route path='terms' element={<LegalPage type="terms" />}/>
              <Route path='contact' element={<SaasPage type="contact" />}/>
            </Route>

            <Route path='dashboard' element={<Layout />}>
              <Route index element={<Dashboard />}/>
              <Route path='builder/:resumeId' element={<ResumeBuilder />}/>
            </Route>

            <Route path='app' element={<Layout />}>
              <Route index element={<Dashboard />}/>
              <Route path='builder/:resumeId' element={<ResumeBuilder />}/>
            </Route>

            <Route path='view/:resumeId' element={<Preview />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  )
}

export default App
