import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>

      <h1 className='navbar-brand'>
        ALKALI
      </h1>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarNavAltMarkup' style={{marginLeft: '15%', letterSpacing: 3}}>
        <div className='navbar-nav'>

          <Link className='nav-link' style={{marginRight: '6%'}} to='/'>
            Home
          </Link>

          <Link className='nav-link' style={{marginRight: '6%'}} to='/members'>
            Members 
          </Link>


          {/* <Link className='nav-link' style={{marginRight: '6%'}} to='/member'>
            Member
          </Link> */}
          <Link className='nav-link' style={{textAlign: 'center'}} to='/add-member'>
            Join
          </Link>

        </div>
      </div>

    </nav>

  );
};

export default Navbar;