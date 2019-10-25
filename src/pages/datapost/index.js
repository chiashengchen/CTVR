import React from 'react'

import { Router, AsyncImport } from '../../components'

export default {
  path: '/datapass',
  component: () => <Router routes={[
    {
      exact: true,
      path: '/datapass/',
      params: { config: '4' },
      component: AsyncImport(() => import('./datapass')),
    },
  ]} />,
  params: { from: 'datapass' },
}