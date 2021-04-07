import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/Home';
import AddMemberPage from '../pages/AddMember';
import MembersPage from '../pages/Members';
import MemberPage from '../pages/Member'

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Switch>
        
        <Route path='/' exact component={HomePage} />

        <Route path='/members' exact component={MembersPage} />

        <Route path='/members/:memberId' component={MemberPage} />

        <Route path='/add-member' component={AddMemberPage} />
 

        </Switch>
      </div>
    </div>
  );
};

export default AppRouter;