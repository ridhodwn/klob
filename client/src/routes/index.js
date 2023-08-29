import { createBrowserRouter } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import HomePage from '../views/HomePage';
import AddPage from '../views/AddPage';
import JobDetail from '../views/DetailPage';
import LamaranPage from '../views/LamaranPage';

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
            {
                path: '/detail-lowongan-perkerjaan/:jobVacancyCode',
                element: <JobDetail />
            },
            {
                path: '/lamaran-terkirim',
                element: <LamaranPage />
            },
        ]
    }
]);

export default router;