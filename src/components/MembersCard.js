import {Link } from 'react-router-dom';

const MembersCard = ({member}) =>{
    return (
        <div className="d-flex m-3">
          <div className="card" style={{width:'15rem', border:'white'}}>
                <img className="card-img-top align-self-center"
                    src={member.profile_img} 
                    alt="Alkali member"
                    style={{borderRadius:'50%',width:'10rem'}}
                    />
                <div className="card-body">
                    <h5 className="card-text"> {member.firstName} {member.lastName}</h5>
                    <p className="card-text mb-1"> <strong>Role:</strong> {member.role}</p>
                    <p className="card-link mb-1"><Link to={`/members/${member.id}`}>View Details</Link></p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Email</strong>: {member.email}</li>
                        <li className="list-group-item"><strong>LinkedIn</strong>: {member.linkedIn}</li>
                        <li className="list-group-item"><strong>GitHub</strong>: {member.github}</li>
                        <li className="list-group-item"><strong>Languages</strong>:
                            {member.languages.map((lang,i) =>{
                                return (
                                     <small key={i}>
                                          <br/> {lang} 
                                         {i === member.languages.length -1? '': ','}
                                    </small> 
                                )
                            })}
                        </li>
                    </ul>
                </div>          
            </div>
        </div>
    )
}

export  default MembersCard;