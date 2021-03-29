import React, { Component } from 'react'
import Note from './note'
import {loadCollection,db} from '../database'

class Notes extends Component{
    constructor(props){
        super(props)
        this.getInitialData()
    }
    state = {
        entities: []
    }
    getInitialData(){
        loadCollection('notes')
        .then((collection)=>{
/*             collection.insert([
                {body:'hello~'},
                {body:'hola~'}
            ])

            db.saveDatabase() */
            const entities = collection.chain()
            .find()
            .simplesort('$loki','isdesc')
            .data()

            this.setState({
                entities
            })

           console.log(entities)
        })
    }
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
