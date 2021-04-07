import '../App.css';
import FeaturedMember from '../components/FeaturedMember';


const HomePage = () => {

    return (
     
      <div className='row text-center'>
        
        <div className='col'> 

          <br/>
          <p style={{fontSize: '250%'}}>We are Team Alkali!</p>
          <br/>
          <p style={{fontSize: '200%', textAlign: 'left'}}>About</p>
          <p style={{fontSize: '150%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
          
          <FeaturedMember />
        
        </div>
        
      </div>
    );
  };
  
  export default HomePage;
  