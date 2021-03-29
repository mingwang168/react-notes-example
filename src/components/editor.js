import React, { Component } from 'react'


class Editor extends Component{
    render(){
        return(
            <div className="ui form">
                <div className="field">
                 <textarea
                 rows="5"
                 placeholder="写点东西....."
                 />
                </div>
            </div>
        )
    }
}

export default Editor
