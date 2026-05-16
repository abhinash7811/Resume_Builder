import { BarChart3Icon, EyeIcon, FilePenLineIcon, LoaderCircleIcon, PencilIcon, PlusIcon, SearchIcon, SparklesIcon, TrashIcon, UploadCloud, UploadCloudIcon, XIcon } from 'lucide-react'
import React, { useCallback, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'
import pdfToText from 'react-pdftotext'
import ResumePreview from '../components/ResumePreview'

const Dashboard = () => {

  const {user, token} = useSelector(state => state.auth)

  const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"]
  const [allResumes, setAllResumes] = useState([])
  const [showCreateResume, setShowCreateResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)
  const [title, setTitle] = useState('')
  const [resume, setResume] = useState(null)
  const [editResumeId, setEditResumeId] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [previewResume, setPreviewResume] = useState(null)

  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const loadAllResumes = useCallback(async () =>{
    try {
      const { data } = await api.get('/api/users/resumes', {headers: { Authorization: token }})
      setAllResumes(data.resumes)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }, [token])

  const createResume = async (event) => {
   try {
    event.preventDefault()
    const { data } = await api.post('/api/resumes/create', {title}, {headers: { Authorization: token }})
    setAllResumes([...allResumes, data.resume])
    setTitle('')
    setShowCreateResume(false)
    navigate(`/dashboard/builder/${data.resume._id}`)
   } catch (error) {
    toast.error(error?.response?.data?.message || error.message)
   }
  }

  const uploadResume = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      const resumeText = await pdfToText(resume)
      const { data } = await api.post('/api/ai/upload-resume', {title, resumeText}, {headers: { Authorization: token }})
      setTitle('')
      setResume(null)
      setShowUploadResume(false)
      navigate(`/dashboard/builder/${data.resumeId}`)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
    setIsLoading(false)
  }

  const editTitle = async (event) => {
    try {
      event.preventDefault()
      const {data} = await api.put(`/api/resumes/update`, {resumeId: editResumeId, resumeData: { title }}, {headers: { Authorization: token }})
      setAllResumes(allResumes.map(resume => resume._id === editResumeId ? { ...resume, title } : resume))
      setTitle('')
      setEditResumeId('')
      toast.success(data.message)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
     
  }

  const deleteResume = async (resumeId) => {
    try {
      const confirm = window.confirm('Are you sure you want to delete this resume?')
     if(confirm){
      const {data} = await api.delete(`/api/resumes/delete/${resumeId}`, {headers: { Authorization: token }})
      setAllResumes(allResumes.filter(resume => resume._id !== resumeId))
      toast.success(data.message)
     }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
     
  }

  useEffect(()=>{
    loadAllResumes()
  },[loadAllResumes])

  const filteredResumes = allResumes.filter((resume) => resume.title?.toLowerCase().includes(searchQuery.toLowerCase()))
  const publicCount = allResumes.filter((resume) => resume.public).length
  const updatedThisWeek = allResumes.filter((resume) => {
    const updatedAt = new Date(resume.updatedAt).getTime()
    return Date.now() - updatedAt < 7 * 24 * 60 * 60 * 1000
  }).length

  return (
    <div>
      <div className='max-w-7xl mx-auto'>

        <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-6'>
          <div>
            <p className='text-sm text-green-600 font-semibold'>Dashboard</p>
            <h1 className='text-2xl md:text-3xl font-semibold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent'>Welcome back, {user?.name || 'there'}</h1>
            <p className='text-sm text-slate-500 mt-1'>Manage resumes, templates, exports, and upcoming AI workflows from one workspace.</p>
          </div>
          <div className='flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 h-11 shadow-sm max-w-md w-full lg:w-96'>
            <SearchIcon className='size-4 text-slate-400'/>
            <input value={searchQuery} onChange={(event)=> setSearchQuery(event.target.value)} className='border-none focus:ring-0 h-10 flex-1 text-sm' placeholder='Search saved resumes'/>
          </div>
        </div>

        <div className='grid md:grid-cols-4 gap-4 mb-7'>
          {[
            { label: 'Total resumes', value: allResumes.length, icon: <FilePenLineIcon className='size-5 text-green-600'/> },
            { label: 'Public resumes', value: publicCount, icon: <EyeIcon className='size-5 text-green-600'/> },
            { label: 'Updated this week', value: updatedThisWeek, icon: <BarChart3Icon className='size-5 text-green-600'/> },
            { label: 'AI actions ready', value: 'Soon', icon: <SparklesIcon className='size-5 text-green-600'/> },
          ].map((item) => (
            <div key={item.label} className='bg-white border border-slate-200 rounded-lg p-5 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition'>
              {item.icon}
              <p className='text-2xl font-semibold text-slate-800 mt-3'>{item.value}</p>
              <p className='text-sm text-slate-500'>{item.label}</p>
            </div>
          ))}
        </div>

        <div className='flex gap-4 '>
            <button onClick={()=> setShowCreateResume(true)} className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer'>
              <PlusIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500  text-white rounded-full'/>
              <p className='text-sm group-hover:text-indigo-600 transition-all duration-300'>Create Resume</p>
            </button>
            <button onClick={()=> setShowUploadResume(true)} className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer'>
              <UploadCloudIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500  text-white rounded-full'/>
              <p className='text-sm group-hover:text-purple-600 transition-all duration-300'>Upload Existing</p>
            </button>
        </div>

      <hr className='border-slate-300 my-6 sm:w-[305px]' />

      <div className="grid grid-cols-2 sm:flex flex-wrap gap-4 ">
        {filteredResumes.map((resume, index)=>{
          const baseColor = colors[index % colors.length];
          return (
            <button key={resume._id || index} onClick={()=> navigate(`/dashboard/builder/${resume._id}`)} className='relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer' style={{background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`, borderColor: baseColor + '40'}}>

              <FilePenLineIcon className="size-7 group-hover:scale-105 transition-all " style={{ color: baseColor }}/>
              <p className='text-sm group-hover:scale-105 transition-all  px-2 text-center' style={{ color: baseColor }}>{resume.title}</p>
              <p className='absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center' style={{ color: baseColor + '90' }}>
                 Updated on {new Date(resume.updatedAt).toLocaleDateString()}
              </p>
              <div onClick={e=> e.stopPropagation()} className='absolute top-1 right-1 group-hover:flex items-center hidden'>
                <EyeIcon onClick={()=> setPreviewResume(resume)} className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"/>
                <TrashIcon onClick={()=>deleteResume(resume._id)} className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"/>
                <PencilIcon onClick={()=> {setEditResumeId(resume._id); setTitle(resume.title)}} className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"/>
              </div>
            </button>
          )
        })}
        {filteredResumes.length === 0 && (
          <div className='col-span-full rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center'>
            <FilePenLineIcon className='size-10 text-slate-300 mx-auto'/>
            <p className='font-medium text-slate-700 mt-3'>No resumes found</p>
            <p className='text-sm text-slate-500 mt-1'>Create a new resume or adjust your search to find saved work.</p>
          </div>
        )}
      </div>

      <div className='grid lg:grid-cols-3 gap-5 mt-8'>
        <div className='rounded-lg border border-slate-200 bg-white p-6'>
          <h2 className='font-semibold text-slate-800'>Template selection</h2>
          <p className='text-sm text-slate-500 mt-2'>Classic, Modern, Minimal, and image templates are available inside the builder.</p>
        </div>
        <div className='rounded-lg border border-slate-200 bg-white p-6'>
          <h2 className='font-semibold text-slate-800'>Export center</h2>
          <p className='text-sm text-slate-500 mt-2'>PDF download and share controls are ready in each resume workspace.</p>
        </div>
        <div className='rounded-lg border border-slate-200 bg-white p-6'>
          <h2 className='font-semibold text-slate-800'>Settings structure</h2>
          <p className='text-sm text-slate-500 mt-2'>Profile, notifications, billing, and team settings can plug into the dashboard shell.</p>
        </div>
      </div>

        {showCreateResume && (
          <form onSubmit={createResume} onClick={()=> setShowCreateResume(false)} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
            <div onClick={e => e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
              <h2 className='text-xl font-bold mb-4'>Create a Resume</h2>
              <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600' required/>

              <button className='w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors'>Create Resume</button>
              <XIcon className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' onClick={()=> {setShowCreateResume(false); setTitle('')}}/>
            </div>
          </form>
        )
        }

        {showUploadResume && (
          <form onSubmit={uploadResume} onClick={()=> setShowUploadResume(false)} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
            <div onClick={e => e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
              <h2 className='text-xl font-bold mb-4'>Upload Resume</h2>
              <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600' required/>
                <div>
                  <label htmlFor="resume-input" className="block text-sm text-slate-700">
                    Select resume file
                    <div className='flex flex-col items-center justify-center gap-2 border group text-slate-400 border-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-green-500 hover:text-green-700 cursor-pointer transition-colors'>
                      {resume ? (
                        <p className='text-green-700'>{resume.name}</p>
                      ) : (
                        <>
                          <UploadCloud className='size-14 stroke-1'/>
                          <p>Upload resume</p>
                        </>
                      )}
                    </div>
                  </label>
                  <input type="file" id='resume-input' accept='.pdf' hidden onChange={(e)=> setResume(e.target.files[0])}/>
                </div>
              <button disabled={isLoading} className='w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors flex items-center justify-center gap-2'>
                {isLoading && <LoaderCircleIcon className='animate-spin size-4 text-white'/>}
                {isLoading ? 'Uploading...' : 'Upload Resume'}
                
                </button>
              <XIcon className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' onClick={()=> {setShowUploadResume(false); setTitle('')}}/>
            </div>
          </form>
        )
        }

        {editResumeId && (
          <form onSubmit={editTitle} onClick={()=> setEditResumeId('')} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
            <div onClick={e => e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
              <h2 className='text-xl font-bold mb-4'>Edit Resume Title</h2>
              <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600' required/>

              <button className='w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors'>Update</button>
              <XIcon className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' onClick={()=> {setEditResumeId(''); setTitle('')}}/>
            </div>
          </form>
        )
        }

        {previewResume && (
          <div onClick={()=> setPreviewResume(null)} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-20 flex items-center justify-center p-4'>
            <div onClick={e => e.stopPropagation()} className='relative bg-white border shadow-md rounded-lg w-full max-w-3xl max-h-[90vh] overflow-auto p-6'>
              <div className='flex items-center justify-between mb-4'>
                <div>
                  <h2 className='text-xl font-bold'>{previewResume.title}</h2>
                  <p className='text-sm text-slate-500'>Resume preview modal</p>
                </div>
                <button onClick={()=> setPreviewResume(null)} className='size-9 rounded-full hover:bg-slate-100 flex items-center justify-center'>
                  <XIcon className='size-5 text-slate-500'/>
                </button>
              </div>
              <ResumePreview data={previewResume} template={previewResume.template} accentColor={previewResume.accent_color} classes='py-4 bg-white'/>
            </div>
          </div>
        )}
      
      </div>
    </div>
  )
}

export default Dashboard
