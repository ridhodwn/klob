import { useDispatch, useSelector } from 'react-redux';
import { addLamaran } from '../store/actions/action-creator';

function JobDetail() {
    const job = useSelector((state) => {
        return state.jobReducer.job;
    });

    const lamaran = useSelector((state) => {
        return state.jobReducer.lamaran;
    });

    const dispatch = useDispatch();

    const lamarAction = (e) => {
        e.preventDefault();
        dispatch(addLamaran(job.jobVacancyCode));
        // navigate(`/detail-lowongan-perkerjaan/${job.jobVacancyCode}`);
    };

    function timeSince(date) {
        let seconds = Math.floor((new Date() - date) / 1000);
    
        let interval = seconds / 31536000;
    
        if (interval > 1) {
        return Math.floor(interval) + " tahun";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
        return Math.floor(interval) + " bulan";
        }
        interval = seconds / 86400;
        if (interval > 1) {
        return Math.floor(interval) + " hari";
        }
        interval = seconds / 3600;
        if (interval > 1) {
        return Math.floor(interval) + " jam";
        }
        interval = seconds / 60;
        if (interval > 1) {
        return Math.floor(interval) + " menit";
        }
        return Math.floor(seconds) + " detik";
    }
    let aDay = 24*60*60*1000;
    console.log(timeSince(new Date(Date.now()-aDay)));
    console.log(timeSince(new Date(Date.now()-aDay*2)));

    return (
        <>
            <style type="text/css">
            {`
                .page-title {
                    color: #353839;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                }

                .card-img-top {
                    width: 100%;
                    height: 8vw;
                    object-fit: contain;
                }

                .corp-name {
                    color: #353839;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                }

                .job-title {
                    font-weight: 500;
                }

                p {
                    font-weight: 600;
                    margin: 0;
                }

                .detail-item {
                    background-color: #234F1E;
                    border-radius: 8px;
                    padding-inline: 8px;
                    padding-top: 1px; 
                    padding-bottom: 3px;
                    font-size: 13px;
                    color: #FFFFFF;
                    font-weight: 500;
                }

                .btn-warning {
                    color: #FFFFFF;
                    font-size: 15px;
                    font-weight: 700;
                    letter-spacing: 0.3px;
                }
            `}
            </style>
        
            <section className="px-5 pt-5">
                <h4 className="page-title mb-3">DETAIL LOWONGAN PEKERJAAN</h4>
                <div className="card col-12 border border-secondary rounded-3 border-opacity-25 mt-4">
                    <img src={job.corporateLogo} className="card-img-top pb-3 px-4 pt-4" />
                    <div className="card-body px-3 pb-2">
                        <h5 className="corp-name">{job.corporateName}</h5>
                        <div className="my-4" dangerouslySetInnerHTML={{ __html: job.descriptions }} />
                        <h6 className="job-title mb-3">{job.positionName.toUpperCase()}</h6>
                        <p>Status: <span className="detail-item">{job.status}</span></p>
                        <p className="mb-3">Gaji: <span className="detail-item">
                            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(job.salaryFrom).replace("Rp", "IDR")} - {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(job.salaryTo).replace("Rp", "IDR")}
                        </span></p>
                        <p className="mb-2">Dipos {timeSince(new Date(job.postedDate))} yang lalu</p>
                    </div>
                    {(lamaran.find(el => job.jobVacancyCode === el.jobVacancyCode)) ? (
                        <button type="button" className="btn btn-secondary mx-3 mb-3" disabled>Kirim Lamaran</button> 
                        ) : (
                        <button type="button" className="btn btn-warning mx-3 mb-3" onClick={lamarAction}>Kirim Lamaran</button>
                        )
                    }  
                </div>
            </section>
        </>
    );
}

export default JobDetail;