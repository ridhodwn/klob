import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../store/actions/action-creator';
import JobCard from '../components/JobCard';


function HomePage() {
    const jobs = useSelector((state) => {
        return state.jobReducer.jobs;
    });
    const [error, setError] = useState(null);
    const [loadingJobs, setLoadingJobs] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if(!jobs) {
            dispatch(fetchJobs())
            .then(() => {
                console.log('berhasil');
            })
            .catch((err) => {
                console.log('gagal', err);
            })
            .catch((error) => {
            setError(error);
            })
            .finally(() => {
                setLoadingJobs(false);
            });
        } else {
            setLoadingJobs(false);
        }
    }, []);

    if (loadingJobs) {
        return <h1 className="p-4">Loading...</h1>
    }

    return (
        <>
            <style type="text/css">
            {`
                .page-title {
                    color: #353839;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                }
            `}
            </style>

            <section className="px-5 pt-5">
                {/* <div>{JSON.stringify(jobs)}</div> */}
                <h4 className="page-title mb-3">LOWONGAN PEKERJAAN</h4>
                <div className="row row-cols-md-5 mt-4">

                    {
                        jobs.map(job => {
                            return (
                                <JobCard key={job.jobVacancyCode} job={job} />
                            );
                        })
                    }

                </div>
            </section>
         </>
    );
}

export default HomePage;