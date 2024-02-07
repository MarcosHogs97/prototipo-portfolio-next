export default function compHeader() {
    return (
    <nav className="navbar navbar-expand-lg navbar-transparent border-bottom text-light p-3">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand text-danger fw-bold" href="#">&#60;Marcos-Hogs&#47;&#62;</a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active text-light fw-bold" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light fw-bold" href="#">Link</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}