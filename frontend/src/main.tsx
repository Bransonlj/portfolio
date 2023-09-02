import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './index.scss'
import Layout from './views/layout/Layout'
import IndexPage from './views/IndexPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Layout /> }>
      <Route index element={  <IndexPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
