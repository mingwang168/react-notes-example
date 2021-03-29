import React, { Component } from 'react'
import Editor from './editor'

class Note extends Component{
    render(){
        return(
            <div className="item">
                <div className="meta">
                    {'updated'}
                    </div>
                <div className="content">
                    <div className="header">
                        {'笔记项目'}
                    </div>
                    <div className="extra">
                    <Editor />
                    {'X'}字
                    <i className="right floated trash outline icon"></i>
                    </div>
                    </div>
            </div>
        )
    }
}

export default Note
