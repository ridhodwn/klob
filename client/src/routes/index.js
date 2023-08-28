import { createBrowserRouter } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import HomePage from '../views/HomePage';
import AddPage from '../views/AddPage';

const router = createBrowserRouter([
    {
        element: <PageLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: 'add',
                element: <AddPage />
            },
        ]
    }
]);

export default router;