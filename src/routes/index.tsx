import { createElement, lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/',
    element: createElement(lazy(() => import('@/layouts/Layout'))),
    children: [
      {
        path: '',
        element: createElement(lazy(() => import('@/pages/index'))),
      },
    ],
  },
]

export default routes
