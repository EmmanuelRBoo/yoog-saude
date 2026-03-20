import { createBrowserRouter, RouterProvider } from 'react-router'

import { AuthPage, PatientsPage, AppointmentsPage } from './pages'
import { GlobalProvider } from './providers/GlobalProvider'
import { AuthProvider } from './providers/AuthProvider'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <GlobalProvider />,
    children: [
      {
        path: '',
        element: <AuthProvider><AuthPage /></AuthProvider>
      },
      {
        path: 'pacientes',
        element: <PatientsPage />
      },
      {
        path: 'paciente/:id',
        element: <AppointmentsPage />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={routes} />
}