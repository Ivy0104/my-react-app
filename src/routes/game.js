import {lazy} from 'react'

export default [
    {
        path: '/game',
        component: lazy(() => import('../views/game'))
      }
]