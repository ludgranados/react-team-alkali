import {membersData} from "../data/members";
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import memberCard from '../components/MembersCard'

const MemberPage = () =>{
    const [member,setMember] = useState({
        role: "",
        firstName: "",
        lastName: "",
        email: "",
        linkedIn: "",
        github: "",
        bio: "",
        profile_img: "",
        languages: [],

    });
    const {memberId} = useParams();

    useEffect(() =>{
        const memberFound = membersData.find(m => m.id === +memberId);
        console.log(memberFound);
        setMember(memberFound);

    },[member,memberId])
    return (
        <div id="member d-flex justify-content-between">
            <div className="row mt-4">
                <div className="col-8">
                    <div className="card bg-light">
                        <div className="card-body row">
                            <div className="col-lg-5 col-md-6">
                                <img src={member.profile_img} 
                                alt="Alkali Member"
                                style={{borderRadius:'50%',width:'10rem'}}
                                />
                            </div>  
                            <div className="col-lg-7 col-md-6">
                                <h5 className="card-title">{member.firstName} {member.lastName}</h5>
                                <p className="card-title"><strong>Role: </strong>{member.role}</p>
                                
                                <h5 className="card-title">Skills:</h5>
                                <p className="">
                                    {member.languages.map((lang,i) =>{
                                        return(
                                            <span
                                                className="badge badge-pill badge-dark mx-1"
                                                key={i}
                                            >
                                                {lang}   
                                            </span>
                                        )
                                    })}
                                </p>
                                <h5 className="my-2 card-title">Bio</h5>
                                <p className="card-text">{member.bio}</p>
                                <h5 className="my-2 card-title">Email</h5>
                                <a className="card-link">{member.email}</a>
                                <h5 className="card-text my-2">Github</h5>
                                <a  className ="card-link"href={member.github}>{member.github}</a>
                                <h5 className="card-text my-2">LinkedIn</h5>
                                <a  className ="card-link"href={member.linkedIn}>{member.linkedIn}</a>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberPage;