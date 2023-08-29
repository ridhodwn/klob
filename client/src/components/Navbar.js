import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <style type="text/css">
            {`
                .navbar {
                    background: #F5F5F5;
                }

                .title {
                    color: #DC143C;
                }
            `}
            </style>

            <section>
                <nav className="navbar navbar-expand-lg px-5 py-3">
                    <div className="container-fluid p-0">
                        <div className="d-flex">
                            <h2 className="title"><b>Klob</b></h2>
                        </div>
                        <div>
                            <ul className="navbar-nav">
                                <li className="nav-item me-2">
                                    <Link className="nav-link" to="add">
                                        <b>Buat Lowongan</b>
                                    </Link>
                                </li>
                                <li className="nav-item me-2">
                                    <Link className="nav-link" to="/lamaran-terkirim">
                                        <b>Lamaran Terkirim</b>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
}

export default Navbar;