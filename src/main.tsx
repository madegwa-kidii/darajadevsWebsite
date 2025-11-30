import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import AuthenticationProvider, {type User} from "./hooks/authhook.tsx";
import HomePage from "./pages/homePage/HomePage.tsx";
import ThemeProvider from "./hooks/themehook.tsx";


const routes = createBrowserRouter([
    {
        element: <App />,
        path: '/',
        children: [
            {
                element: <HomePage />,
                path: '/'
            }
        ]
    },
    {

    }

])

const user: User = {
    id: 1234,
    name: "oscar",
    email: "oscar@gmail.com"
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider>
          <AuthenticationProvider initialUser={user} >
              <RouterProvider router={routes} />
          </AuthenticationProvider>
      </ThemeProvider>
  </StrictMode>,
)

