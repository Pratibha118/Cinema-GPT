import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Browse from '../browse/Browse';
import Error from '../error/Error';
import Favorites from '../favorites/Favorites';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import Header from '../header/Header';
import { GPTSearch } from '../GPTSearch/GPTSearch';
import Login from '../login/Login'
import PlayMovie from '../playMovie/PlayMovie';

const Body = () => {
  const AppLayout = () => {

    return <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
      </Provider>
    </>
  }
  const appRouter = createBrowserRouter([{
    path: '/',
    element: <AppLayout />,
    children: [
      {
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
      },
      {
        path: '/favorites',
        element: <Favorites />
      },
       {
        path: '/search',
        element: <GPTSearch />
      },
       {
        path: '/playmovie',
        element: <PlayMovie />
      },
    ]
  },


  ])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}



export default Body