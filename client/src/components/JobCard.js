import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchJobById, addLamaran, deleteLamaran } from '../store/actions/action-creator';

function JobCard({ job, type }) {
    const lamaran = useSelector((state) => {
        return state.jobReducer.lamaran;
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const clickAction = (e) => {
        e.preventDefault();
        dispatch(fetchJobById(job.jobVacancyCode));
        navigate(`/detail-lowongan-perkerjaan/${job.jobVacancyCode}`);
    };

    const lamarAction = (e) => {
        e.preventDefault();
        dispatch(addLamaran(job.jobVacancyCode));
    };

    const batalAction = (e) => {
        e.preventDefault();
        if(lamaran.length === 1) {
            navigate('/')
        }
        dispatch(deleteLamaran(job.jobVacancyCode));
    };

    let button;
    if(type === 'lamaran') {
        button = <button type="button" className="btn btn-danger mx-3 mb-3" onClick={batalAction}>Batalkan Lamaran</button>
    } else {
        if(lamaran && lamaran.find(el => job.jobVacancyCode === el.jobVacancyCode)) {
            button = <button type="button" className="btn btn-secondary mx-3 mb-3" disabled>Kirim Lamaran</button> 
        } else {
            button = <button type="button" className="btn btn-warning mx-3 mb-3" onClick={lamarAction}>Kirim Lamaran</button>
        }
    }

    return (
        <>
            <style type="text/css">
            {`
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
                    padding: 0;
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
        
            <div className="col mb-4 d-flex align-items-stretch">
                <div className="card col-12 border border-secondary rounded-3 border-opacity-25">
                    <img src={job.corporateLogo} className="card-img-top pb-3 px-4 pt-4" />
                    <div className="card-body px-3 pb-2">
                        <h5 className="corp-name">{job.corporateName}</h5>
                        <h6 className="job-title mb-3">{job.positionName.toUpperCase()}</h6>
                        <p>Status: <span className="detail-item">{job.status}</span></p>
                        <p className="mb-3">Gaji: <span className="detail-item">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(job.salaryFrom)} - {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(job.salaryTo)}</span></p>
                        <p className="mb-2">Dipos pada {new Date(job.postedDate).toLocaleDateString("id", { year: "numeric", month: "short", day: "numeric" })}</p>
                        <button type="button" className="btn btn btn-link p-0" onClick={clickAction}><p>Baca Detail</p></button>
                    </div>
                    { button }    
                </div>
            </div>
        </>
    )
}

export default JobCard;