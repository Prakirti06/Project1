import { Link, Outlet } from "react-router-dom"
export default function Layout() {
    return (<>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <span class="nav-link active" aria-current="page">
                                <Link to="/">Home</Link>
                            </span>
                        </li>
                        <li class="nav-item">
                            <span class="nav-link active" aria-current="page">
                                <Link to="/products">All products</Link>
                            </span>
                        </li>
                        <li class="nav-item">
                            <span class="nav-link active" aria-current="page">
                                <Link to="/products/add">Add products</Link>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
        <h1>Footer</h1>
    </>);
}