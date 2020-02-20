import React, {Component} from 'react';
import {withAuthorization} from "../Session";

class AssignmentsClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assignments : []
        }
    }
    componentDidMount() {
        fetch('https://mckinneyisd.instructure.com/v1/courses/courses',
            {
                method: "GET",
                headers: new Headers({
                    Accept: "application/json+canvas-string-ids",
                    Authorization: "Bearer <ACCESS-TOKEN>",
                })
            }
        ).then(res => res.json())
            .then(response =>
            this.setState(/*LOOK IM KINDA CLUELESS HERE IMA RETURN TO THIS LATER*/)
            )
            .catch(error => alert(error));
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
