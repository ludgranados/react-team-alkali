import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <Link className=''>
        Alkali
      </Link>
      
      <div className='navbar' id=''>
        <div className='navbar-nav'>
          <Link className='' to=''>
            Home Page
          </Link>
<br/>
          <Link className='' to=''>
            Members Page
          </Link>
<br/>
          <Link className='' to=''>
            Member Page
          </Link>
<br/>
          <Link className='' to=''>
            Add Members Page
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;