import React, { Component } from 'react'
import Note from './note'

class Notes extends Component{
    render(){
        return(
            <div className="ui container notes">
                <h4 className="ui horizontal divider header">
                <i className="paw icon"></i>
                    minghui Notes App - React.js
                </h4>
                <button className="ui right floated basic violet button">添加笔记</button>
                <div className="ui divided items">
                <Note />
                <span className="ui small disabled header">
                    还没有笔记,请按下 '添加笔记' 按钮.
                </span>
                </div>
            </div>
        )
    }
}

export default Notes
