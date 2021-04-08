
const FeaturedMember = () => {
        
    return (
        <div className='card my-3' 
        style={{backgroundImage: 'url(https://i.ibb.co/8chf2DV/Team-Alkali-Logo-react-background.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '170%', opacity: '.9'}}>
            <h2 style={{color: 'black', textShadow: '1px 2px white'}}>Featured member</h2>

            <img src={'https://media-exp1.licdn.com/dms/image/C5603AQF0ROaUm_EXWw/profile-displayphoto-shrink_400_400/0/1611397157383?e=1622678400&v=beta&t=ajryz6YmZznohK-PD6Ltq63ExXHWUwm7wY54oqyO2BA'} 
            style={{borderStyle: 'double', borderWidth: '1px', borderColor: 'black', width: '38%', borderRadius: '250px', marginBottom: '10%', marginLeft: '29%' }} 
            alt="featured member" />

        </div>
    );
};

export default FeaturedMember;