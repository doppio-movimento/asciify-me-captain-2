import './output.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Create from './routes/create';
import Gallery from './routes/gallery';
import Shop from './routes/shop';
import Architecture from './routes/architecture';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <div>Error Page</div>,
        children: [
            {
                path: 'create',
                element: <Create />,
            },
            {
                path: 'gallery',
                element: <Gallery />,
            },
            {
                path: 'shop',
                element: <Shop />,
            },
            {
                path: 'architecture',
                element: <Architecture />,
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
);
