import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import JobCard from '../components/JobCard';


function HomePage() {
    const lamaran = useSelector((state) => {
        return state.jobReducer.lamaran;
    });

    const navigate = useNavigate();

    const clickAction = (e) => {
        e.preventDefault();
        navigate('/');
    };

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
                <h4 className="page-title mb-3">LAMARAN TERKIRIM</h4>
                {lamaran ? 
                <div className="row row-cols-md-5 mt-4">

                    {
                        lamaran.map(lamaranItem => {
                            return (
                                <JobCard key={lamaran.jobVacancyCode} job={lamaranItem} type='lamaran' />
                            );
                        })
                    }

                </div>
                :
                <div className="d-flex justify-content-center mt-4">
                    <div className="d-flex row justify-content-center">
                        <h5 className='text-center'>Belum ada lamaran yang terkirim</h5>
                        <button className='btn btn-primary mt-2 col-5' onClick={clickAction}>Kembali ke home</button>
                    </div>
                </div>
                }
            </section>
         </>
    );
}

export default HomePage;