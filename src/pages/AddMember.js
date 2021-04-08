import { membersData } from '../data/members';
import { useState, useEffect } from 'react';
import MembersCard from '../components/MembersCard';

const MemberForm = () => {

  const [members, setMembers] = useState(membersData);
  const [member, setMember] = useState({
    id: '',
    role: '', 
    firstName: '',
    lastName: '',
    email: '',
    linkedIn: '',
    github: '',
    bio: '',
    profile_img: '',
    languages: [],
  }
 
  );


  useEffect(()=> {
    setMembers(membersData)
    console.log(members);

  }, [members, member]);

  const saveMember = () => {
  
    member.id = Date.now();
    membersData.push(member);
    console.log('member has been added to Team Alkali');

    setMember({
      id: '',
      role: '', 
      firstName: '',
      lastName: '',
      email: '',
      linkedIn: '',
      github: '',
      bio: '',
      profile_img: '',
      languages: [],
    })
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log('member', e.target.value, 'is saved!');
    saveMember();
    alert('Member added to Team Alkali')
  }  
  
    return (
      
      <div className='my-2'>

       <form id='member-form' 
       action='submit' 
       onSubmit={handleSubmit}>
         
       <div className='col md-col-12 lg-col-10 text-center'> 
         <br/>
        <p style={{fontSize: '250%'}}>Add a Member to Team Alkali</p>
         <br/>
       </div>

      <div className='card card-body text-left' 
      style={{
        width: '90%', 
        margin: '5%', 
        marginTop: '-1%', 
        backgroundImage: 'url(https://i.ibb.co/2tjZN9Z/Team-Alkali-Logo-form-letters.png)', 
        backgroundSize: '20%', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'top center'}}>

       <div className='form-row' >

         <div className='form-group col-11'>
           <label htmlFor="role" style={{marginTop: '12%', marginLeft: '7%', fontWeight: '800'}}>
             Role
           </label>
           <input type="text" class="form-control" id="role" value={member.role} 
           style={{marginLeft: '5%'}}
           onChange={event => {
             setMember({...member, role: event.target.value});
           }}  />
         </div>
        
       </div>

       <div className='form-row'>

         <div className='form-group col-11'>
           <label htmlFor="firstName" style={{marginTop: '2%', marginLeft: '7%', fontWeight: '800'}}>
             First Name
           </label>
           <input type="text" class="form-control" id="firstName" value={member.firstName} 
           style={{marginLeft: '5%'}}
           onChange={event => {
             setMember({...member, firstName: event.target.value});
           }}  />
         </div>

         </div>

         <div className='form-row'>

         <div className='form-group col-11'>
           <label htmlFor="lastName" style={{marginTop: '2%', marginLeft: '7%', fontWeight: '800'}}>
             Last Name
           </label>
           <input type="text" class="form-control" id="lastName" value={member.lastName} 
           style={{marginLeft: '5%'}}
           onChange={event => {
             setMember({...member, lastName: event.target.value});
           }}  />
         </div>
        
       </div>

       <div className='form-row'>

         <div className='form-group col-11'>
           <label htmlFor="email" style={{marginTop: '2%', marginLeft: '7%', fontWeight: '800'}}>
             E-mail
           </label>
           <input type="text" class="form-control" id="email" value={member.email} 
           style={{marginLeft: '5%'}}
           onChange={event => {
             setMember({...member, email: event.target.value});
           }}  />
         </div>

         </div>

         <div className='form-row'>

         <div className='form-group col-11'>
           <label htmlFor="linkedIn" style={{marginTop: '2%', marginLeft: '7%', fontWeight: '800'}}>
             LinkedIn
           </label>
           <input type="text" class="form-control" id="linkedIn" value={member.linkedIn} 
           style={{marginLeft: '5%'}}
           onChange={event => {
             setMember({...member, linkedIn: event.target.value});
           }}  />
         </div>

         </div>

         <div className='form-row'>

         <div className='form-group col-11'>
           <label htmlFor="github" style={{marginTop: '2%', marginLeft: '7%', fontWeight: '800'}}>
             Github
           </label>
           <input type="text" class="form-control" id="github" value={member.github} 
           style={{marginLeft: '5%'}}
           onChange={event => {
             setMember({...member, github: event.target.value});
           }}  />
         </div>
        
       </div>

       <div className='form-row'>

         <div className='form-group col-11'>
           <label htmlFor="bio" style={{marginTop: '2%', marginLeft: '7%', fontWeight: '800'}}>
             Bio
           </label>
           <input type="text" class="form-control" id="bio" value={member.bio} 
           style={{marginLeft: '5%'}}
           onChange={event => {
             setMember({...member, bio: event.target.value});
           }}  />
         </div>
        
       </div>

       <div className='form-row'>

       <div className='form-group col-11'>
           <label htmlFor="profile_img" style={{marginTop: '2%', marginLeft: '7%', fontWeight: '800'}}>
             Profile Image
           </label>
           <input type="text" class="form-control" id="profile_img" value={member.profile_img} 
           style={{marginLeft: '5%', marginTop: '.5%'}}
           onChange={event => {
             setMember({...member, profile_img: event.target.value});
           }}  />
         </div>

       </div>

       <div className='form-row'>

         <div className='form-group col-11'>
           <label htmlFor="languages" style={{marginTop: '2%', marginLeft: '7%', fontWeight: '800'}}>
             Languages
           </label>
           <input type="text" class="form-control" id="languages" value={member.languages} 
           style={{marginLeft: '5%'}}
           onChange={event => {
             setMember({...member, languages: [event.target.value]});
           }}  />
         </div>
        
       </div>

       <button type="submit" class="btn btn-dark btn-outline-light" 
       style={{marginTop: '2%', marginLeft: '35%', marginRight: '1%', width: '30%'}}>
         Save Member
       </button>

      </div>
       </form>


      
            <div className="row">
                <div className="col d-flex flex-row flex-wrap">
                    {members.map((m, i) =>{
                        return(
                            <div key ={i}>
                                < MembersCard member={m} />
                            </div>
                        )
                    })}
                </div>
            </div>

      </div>
    )
  };
  
export default MemberForm;
