import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider, useDispatch } from 'react-redux'
import { RouterProvider } from 'react-router'
import { createHashRouter } from 'react-router-dom'
import PublicLayout from './Layouts/PublicLayout'
import { routers } from './Layouts/PublicLayout/Sidebar'
import Dashboard from './Pages/Dashboard'
import reportWebVitals from './reportWebVitals'
import Store from './Store'
import { initToken } from './Store/UserInfoSlice'

const root = ReactDOM.createRoot(document.getElementById('root'))
const router = createHashRouter([
  {
    path: '/',

    element: <PublicLayout />,
    children: routers.map(router => ({
      path: router.path,
      element: router.element,
      loader: () => router.meta,
    })),
  },
])
const InitStorage = ({ children }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initToken())
  }, [])
  return children
}

root.render(
  <Provider store={Store}>
    <InitStorage>
      <RouterProvider router={router} />
    </InitStorage>
  </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
