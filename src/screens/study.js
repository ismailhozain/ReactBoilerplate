import React, {Component} from 'react';
import {withAuthorization} from "../components/Session";
import '../css/study.css';
import Video_player from "../components/video_player";
import {Input} from "antd";

const { Search } = Input;

class StudyClass extends Component {

    componentDidMount() {

    }
    onSearch = event => {
        alert(event);

    };

    render() {
        return (
            <div>
                <h1>Study</h1>
                    <Search placeholder="input search text" onSearch={this.onSearch} style={{width: 400}}/>
                    <div className={"wikipediaSection"}>
                        <h3>Wikipedia results</h3>

                    </div>
                    <div className={"youtubeSection"}>
                       <Video_player/>
                    </div>
            </div>
        );
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(StudyClass);
