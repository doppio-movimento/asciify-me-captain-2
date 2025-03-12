import './output.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Home from './routes/home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <div>Error Page</div>,
        children: [
            {
                path: 'home',
                element: <Home />,
            }
        ],
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
);
