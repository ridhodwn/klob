import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createJob } from '../store/actions/action-creator';

function AddPage() {
    const [jobForm, setJobForm] = useState(
        {
            jobVacancyCode: 1,
            corporateLogo: '',
            corporateName: '',
            positionName: '',
            status: '',
            salaryFrom: 0,
            salaryTo: 0,
            postedDate: '',
        }
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeInputHandler = (e) => {
        const { name, value } = e.target;
        setJobForm({
            ...jobForm,
            [name]: value
        })
    };

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(createJob(jobForm))
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

                .text-muted {
                    font-size: 13px;
                }
            `}
            </style>

            <section className="px-5 pt-5">
                <h5 className="page-title">BUAT LOWONGAN</h5>
                <div className="container-fluid d-flex mt-4 pt-3 ps-0">
                    <div className="col-7">
                        <form id="add-movie-form" onSubmit={submitForm} class="was-validated">
                            <div className="d-flex align-items-center">
                                <div className="col-3"><label htmlFor="corporate-logo"><b>Logo Perusahaan</b></label></div>
                                <div className="col-9">
                                    <input className="form-control py-2" type="text" placeholder="Ketikan Logo Perusahaan" id="corporate-logo"
                                        name="corporateLogo" value={jobForm.corporateLogo} onChange={changeInputHandler} required />
                                        <p className="text-muted mt-1 mb-0"><i>Dalam bentuk link url</i></p>
                                        <div class="valid-feedback">Valid.</div>
                                        <div class="invalid-feedback">Please fill out this field.</div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <div className="col-3"><label htmlFor="corporate-name"><b>Nama Perusahaan</b></label></div>
                                <div className="col-9">
                                    <input className="form-control py-2" type="text"  placeholder="Ketikan Nama Perusahaan" id="corporate-name"
                                        name="corporateName" value={jobForm.corporateName} onChange={changeInputHandler} required />
                                        <div class="valid-feedback">Valid.</div>
                                        <div class="invalid-feedback">Please fill out this field.</div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <div className="col-3"><label htmlFor="position-name"><b>Nama Lowongan</b></label></div>
                                <div className="col-9">
                                    <input className="form-control py-2" type="text" placeholder="Ketikan Nama Lowongan" id="position-name"
                                        name="positionName" value={jobForm.positionName} onChange={changeInputHandler} required />
                                        <div class="valid-feedback">Valid.</div>
                                        <div class="invalid-feedback">Please fill out this field.</div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <div className="col-3"><label htmlFor="status"><b>Status Karyawan</b></label></div>
                                <div className="col-9"><input className="form-control py-2" type="text" placeholder="Ketikan Status Karyawan" id="status"
                                    name="status" value={jobForm.status} onChange={changeInputHandler} required />
                                    <div class="valid-feedback">Valid.</div>
                                    <div class="invalid-feedback">Please fill out this field.</div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <div className="col-3"><label htmlFor="salary"><b>Kisaran Gaji Karyawan</b></label></div>
                                <div className="col-9 d-flex align-items-center">
                                    <div className="col-5">
                                        <input className="form-control py-2" type="number" placeholder="1000000" id="salary-from"
                                        name="salaryFrom" onkeydown="if(event.key==='.'){event.preventDefault();}"  oninput="event.target.value = event.target.value.replace(/[^0-9]*/g,'');" value={jobForm.salaryFrom} onChange={changeInputHandler} required />
                                        <div class="valid-feedback">Valid.</div>
                                        <div class="invalid-feedback">Input number only.</div>
                                    </div>
                                    <div className="col-2">
                                        <p className="text-center m-0">sampai dengan</p>
                                    </div>
                                    <div className="col-5">
                                        <input className="form-control py-2" type="number" placeholder="1000000" id="salary-to"
                                        name="salaryTo" onkeydown="if(event.key==='.'){event.preventDefault();}"  oninput="event.target.value = event.target.value.replace(/[^0-9]*/g,'');" value={jobForm.salaryTo} onChange={changeInputHandler} required />
                                        <div class="valid-feedback">Valid.</div>
                                        <div class="invalid-feedback">Input number only.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <div className="col-3"><label htmlFor="posted-date"><b>Tanggal Posting</b></label></div>
                                <div className="col-9">
                                    <input className="form-control py-2" type="date" id="posted-date"
                                    name="postedDate" value={jobForm.postedDate} onChange={changeInputHandler} required />
                                    <div class="valid-feedback">Valid.</div>
                                    <div class="invalid-feedback">Please fill out this field.</div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <button className="btn btn-success col-3 me-2" type="submit"><b>SIMPAN</b></button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AddPage;