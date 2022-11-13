import App from './App';
import Mounting from './pages/Mounting';
import Updating from './pages/Updating';
import Unmounting from './pages/Unmounting';
import Lifecycle from './pages/Lifecycle';


const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
          {
            path: 'lifecycle',
            element: <Lifecycle/>,
          },
          {
            path: "mounting",
            element: <Mounting/>,
          },
          {
            path: "updating",
            element: <Updating/>,
          },
          {
            path: "unmounting",
            element: <Unmounting/>,
          },    
        ]
      },
]


export default routes;