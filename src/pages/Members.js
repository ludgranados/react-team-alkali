import {membersData} from "../data/members";
import { useState, useEffect } from 'react';
import MembersCard from '../components/MembersCard'
import '../App.css';

const MembersPage = () =>{
    const [members, setMembers] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect( () =>{
        const teamMember = membersData.filter(member =>{
                return (
                    member.firstName.toLowerCase().includes(inputValue.toLowerCase())
                )
            })
       inputValue === ''? setMembers(membersData): setMembers(teamMember);
    },[inputValue])

    const handleChange = (e) =>{
        setInputValue(e.target.value);

    }
  
    return (
        <div id="members">
            <div className="row text-center mt-3">
                   <div className="col">
                       <h1>Welcome to Alkali</h1>
                   </div>
            </div> 
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <input 
                         type="text"
                         className="form-control"
                         value = {inputValue}
                          onChange={handleChange}
                        />
                    </div>
                </div>
            </div>  
            <div className="row">
                <div className="col d-flex flex-row flex-wrap">
                    {members.map((member, i) =>{
                        return(
                            <div key ={i}>
                                < MembersCard member={member} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MembersPage;