import { createBrowserRouter } from 'react-router'
import MainLayout from '../../layout/MainLayout.jsx'
import Homepage from '../../homepage/Homepage.jsx'
import Friends from '../../pages/friends/Friends.jsx'
import ErrorPage from '../../pages/ErrorPage/ErrorPage.jsx'
import Timeline from '../../pages/timeline/Timeline.jsx'
import Stats from '../../pages/stats/Stats.jsx'
 
 export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/friends',
        element: <Friends />
      },
      {
        path: '/timeline',
        element: <Timeline />
      },
      {
        path: '/stats',
        element: <Stats />
      }

    ],
    errorElement:<ErrorPage/>
  }
])