import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import { store } from './app/store.js'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { UiProvider } from './context/UiContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ErrorBoundary>
      <Provider store={store}>
        <UiProvider>
          <App />
        </UiProvider>
      </Provider>
    </ErrorBoundary>
  </BrowserRouter>,
)
