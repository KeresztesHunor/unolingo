import { Outlet, Link } from "react-router-dom";

function Layout()
{
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/gepel">Gépel</Link>
          </li>
          <li>
            <Link to="/valaszto">Választó</Link>
          </li>
          <li>
            <Link to="/rendez">Rendez</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;