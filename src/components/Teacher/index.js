import React, {Component} from 'react';
import withAuthorization from "../Session/withAuthorization";
import * as ROLES from '../../constants/roles';
import {withFirebase} from "../Firebase";

class TeacherPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };
    }
    componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();
            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));
            this.setState({
                users: usersList,
            });
        });
    }
    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render() {
        const {users} = this.state;
        return (
            <div>
                <UserList users={users}/>
            </div>
        )

    };
}

const UserList = ({ users }) => (
    <ul>
        {users.map(user => (
            <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
                <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
                <span>
          <strong>School ID:</strong> {user.schoolId}
        </span>
            </li>
        ))}
    </ul>
);


const condition = authUser => authUser;
export default withAuthorization(condition)(TeacherPage);
