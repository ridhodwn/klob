import { createBrowserRouter } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import HomePage from '../views/HomePage';

const router = createBrowserRouter([
    {
        element: <PageLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
        ]
    }
]);

export default router;