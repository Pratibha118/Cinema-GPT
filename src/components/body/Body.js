import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from '../browse/Browse';
import Error from '../error/Error';
import Login from '../login/Login';

const Body = () => {

  const appRouter = createBrowserRouter([{
    path: '/',
    element: <Login />
  },
  {
    path: '/browse',
    element: <Browse />
  },
  {
    path: '/error',
    element: <Error />
  }

  ])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}



export default Body