import React from "react";
import VideoRecorder from 'react-video-recorder'
import '../css/record_lecture.css'
import Firebase, {withFirebase} from "../components/Firebase";

class RecordLecture extends React.Component {
    componentDidMount() {
        alert("chicekd");
    }

    render() {
        const {storage, db} = this.props.firebase;
        return (
            <div className={'recorderContainer'}>
                <VideoRecorder
                    isFlipped={false}
                    isOnInitially={true}
                    onRecordingComplete={(videoBlob) => {
                        console.log('videoBlob', videoBlob);
                        const name = this.makeFileName();
                        const metadata = {
                            contentType: 'video/webm;codecs=vp8'
                        };
                        storage.ref().child(name).put(videoBlob, metadata)
                            .then(snapshot => snapshot.ref.getDownloadURL())
                            .then((downloadURL) => {
                                db.collection('videos').add({
                                    url: downloadURL
                                })
                            });
                    }}
                />
            </div>
        )
    }

    makeFileName() {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return (+new Date()) + '-' + result;
    }
}


export default withFirebase(RecordLecture);
