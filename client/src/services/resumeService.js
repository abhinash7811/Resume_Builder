import api from '../api/httpClient'

export const resumeService = {
  getAll: () => api.get('/api/users/resumes'),
  create: (title) => api.post('/api/resumes/create', { title }),
  update: (payload) => api.put('/api/resumes/update', payload),
  remove: (resumeId) => api.delete(`/api/resumes/delete/${resumeId}`),
}
