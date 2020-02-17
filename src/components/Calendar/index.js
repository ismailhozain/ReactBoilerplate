import React, {Component} from 'react';
import {withAuthorization} from "../Session";
import './calendar.css';

class CalendarClass extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }
    componentDidMount = () => {
        this.getEvents();

    }
    getEvents(){
        let that = this;
        function start() {
            gapi.client.init({
                'apiKey': GOOGLE_API_KEY
            }).then(function() {
                return gapi.client.request({
                    'path': `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
                })
            }).then( (response) => {
                let events = response.result.items
                that.setState({
                    events
                }, ()=>{
                    console.log(that.state.events);
                })
            }, function(reason) {
                console.log(reason);
            });
        }
        gapi.load('client', start)
    }
    render() {
        return(
            {this.state.events.map(function(event){
                return(
                    {event.summary}
                    {event.start.dateTime} -
                        {event.end.dateTime}
                )
                })}
        );
    }*/
}

const CalendarA = () => (
    <div>
        <h1>
            Calendar Events
        </h1>
    </div>
    );
const condition = authUser => !!authUser;

export default withAuthorization(condition)(CalendarA);
