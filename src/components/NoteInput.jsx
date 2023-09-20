import React from "react";

class NoteInput extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChange(event) {
        let title = event.target.value;
        const maxTitle = 50;

        if (title.length > maxTitle) {
            title = title.substring(0, maxTitle);
        }

        this.setState({
            title
        });
    }

    onBodyChange(event) {
        this.setState({
            body: event.target.value
        })
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);

        this.setState({
            title: '',
            body: '',
            titleLength: 0,
        });
    }

    render(){
        return(
            <div className="note-input">
                <h2 className="note-input__title">Buat catatan</h2>
                <p className="note-input__title__char-limit">Sisa Karakter: {50 - this.state.title.length}</p>
                <form onSubmit={this.onSubmitEventHandler}>
                    <input type="text" placeholder="Ini adalah judul..." value={this.state.title} onChange={this.onTitleChange} />
                    <textarea type="text" placeholder="Tuliskan catatanmu disini..." value={this.state.body} onChange={this.onBodyChange} className="note-input__body" />
                    <button type="submit" className="note-input__button">Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;