import React, {Component} from 'react';
import {withAuthorization} from "../Session";

class AssignmentsClass extends Component {
    componentDidMount() {

    }

    render() {
        return(
            <div>
                <h1>Assignments</h1>
            </div>
        );
    }
}

const Assignments = () => (
   <AssignmentsClass/>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Assignments);
