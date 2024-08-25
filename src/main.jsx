import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root'
import RegisterContainer from './components/RegisterContainer'
import LoginContainer from './components/LoginContainer'
import { AuthProvider } from './contexts/authContext'
import Anonymous from './components/Anonymous'
import CreateRecipeContainer from './components/Recipe/CreateRecipeContainer'
import Protected from './components/Protected'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/register',
        element: <Anonymous><RegisterContainer /></Anonymous>,
        errorElement: <p>opn error</p>
      },
      {
        path: '/login',
        element: <Anonymous><LoginContainer /></Anonymous>
      },
      {
        path: 'recipes',
        children: [
          {
            path: 'new',
            element: <Protected><CreateRecipeContainer /></Protected>
          }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
