import { membersData } from '../data/members';
import { useState } from 'react';
import MembersPage from '../pages/Members';

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

  const saveMember = () => {
  
    member.id = Date.now();
    membersData.push(member);
    setMembers(membersData);
    console.log('member has been added to Team Alkali');

  }

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log('member', e.target.value, 'is saved!');
    saveMember();
    alert(e.target.value);

  }  
  
    return (
      
      <div className='my-2 text-center'>

       <form id='member-form' action='submit' onSubmit={handleSubmit}>
       <div className='col md-col-12 lg-col-10'> 
         <br/>
        <p style={{fontSize: '250%'}}>Add a Member to Team Alkali</p>
         <br/>
       </div>

      <div className='card'>

       <div className='form-row'>

         <div className='form-group col-4'>
           <label htmlFor="role" style={{marginTop: '2%'}}>Role</label>
           <input type="text" class="form-control" id="role" value={member.role} style={{marginLeft: '2.5%'}}
           onChange={event => {
             setMember({...member, role: event.target.value});
           }}  />
         </div>
        
       </div>

       <div className='form-row'>

         <div className='form-group col-5'>
           <label htmlFor="firstName" style={{marginTop: '2%'}}>First Name</label>
           <input type="text" class="form-control" id="firstName" value={member.firstName} style={{marginLeft: '2%'}}
           onChange={event => {
             setMember({...member, firstName: event.target.value});
           }}  />
         </div>

         <div className='form-group col-5'>
           <label htmlFor="lastName" style={{marginTop: '2%'}}>Last Name</label>
           <input type="text" class="form-control" id="lastName" value={member.lastName} style={{marginLeft: '2%'}}
           onChange={event => {
             setMember({...member, lastName: event.target.value});
           }}  />
         </div>
        
       </div>

       <div className='form-row'>

         <div className='form-group col-4'>
           <label htmlFor="email" style={{marginTop: '2%'}}>E-mail</label>
           <input type="text" class="form-control" id="email" value={member.email} style={{marginLeft: '.5%'}}
           onChange={event => {
             setMember({...member, email: event.target.value});
           }}  />
         </div>

         <div className='form-group col-4'>
           <label htmlFor="linkedIn" style={{marginTop: '2%'}}>LinkedIn</label>
           <input type="text" class="form-control" id="linkedIn" value={member.linkedIn} style={{marginLeft: '-.5%'}}
           onChange={event => {
             setMember({...member, linkedIn: event.target.value});
           }}  />
         </div>

         <div className='form-group col-4'>
           <label htmlFor="github" style={{marginTop: '2%'}}>Github</label>
           <input type="text" class="form-control" id="github" value={member.github} style={{marginLeft: '-1%'}}
           onChange={event => {
             setMember({...member, github: event.target.value});
           }}  />
         </div>
        
       </div>

       <div className='form-row'>

         <div className='form-group col-11'>
           <label htmlFor="bio" style={{marginTop: '2%'}}>Bio</label>
           <input type="text" class="form-control" id="bio" value={member.bio} style={{marginLeft: '1%'}}
           onChange={event => {
             setMember({...member, bio: event.target.value});
           }}  />
         </div>
        
       </div>

       <div className='form-row'>

       <div className='form-group col-5'>
           <label htmlFor="profile_img" style={{marginTop: '2%'}}>Profile Image</label>
           <input type="text" class="form-control" id="profile_img" value={member.profile_img} style={{marginLeft: '2%', marginTop: '.5%'}}
           onChange={event => {
             setMember({...member, profile_img: event.target.value});
           }}  />
         </div>

         <div className='form-group col-6'>
           <label htmlFor="languages" style={{marginTop: '2%'}}>Languages</label>
           <input type="text" class="form-control" id="languages" value={member.languages} style={{marginLeft: '2%'}}
           onChange={event => {
             setMember({...member, languages: [event.target.value]});
           }}  />
         </div>
        
       </div>

       <button type="submit" class="btn btn-dark btn-outline-light btn-block" style={{marginBottom: '1%', marginLeft: '1%', marginRight: '1%'}}>Save Member</button>

      </div>
       </form>
      
      <MembersPage />

      </div>
    )
  };
  
export default MemberForm;
