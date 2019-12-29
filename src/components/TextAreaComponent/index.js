import React from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import './TextAreaComponent.css'

const TextAreaConst = () => (
    <div className={"titleDiv"}>
        <div>
            <TextAreaComponent/>
        </div>
    </div>
);

class TextAreaComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({ text: value });
    }

    render() {
        return (
            <ReactQuill className={"quillClass"} value={this.state.text}
                        onChange={this.handleChange} />
        )
    }
}

export default TextAreaConst;
