import React from "react";

class NoteHeader extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            keyword: ''
        }

        this.onKeywordChange = this.onKeywordChange.bind(this);
    }

    onKeywordChange(event){
        const keyword = event.target.value;
        this.setState({ keyword: keyword });

        this.props.sendKeyword(keyword);
    }

    render(){
        return(
            <div className="note-app__header">
                <h1>notes</h1>
                <input type="text" placeholder="Cari catatan..." value={this.state.keyword} onChange={this.onKeywordChange}/>
            </div>
        )
    }
}

export default NoteHeader;