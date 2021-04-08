//active
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    
    <nav className='navbar navbar-expand-md navbar-dark bg-dark' style={{backgroundImage: 'url(https://i.ibb.co/8chf2DV/Team-Alkali-Logo-react-background.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '130%', opacity: '.9'}}>

      <div>
        <img src="https://i.ibb.co/bd76Zk4/Team-Alkali-small-logo.png" alt="Team-Alkali-React-Logo" />
      </div>
    
     

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

      <div className='collapse navbar-collapse' id='navbarNavAltMarkup' style={{marginLeft: '1%', letterSpacing: 3, backgroundColor: 'black', opacity: '.9'}}>
        <div className='navbar-nav'>

          <Link className='nav-link' style={{marginRight: '6%', marginLeft: '170%'}} to='/'>
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