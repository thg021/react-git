import React, { Component } from 'react'

export default class User extends Component{
    render(){
        const { user } = this.props
        if(!user.name){
            return <div><p>Dados não encontrados</p></div>
        }
        return(
            <div>
                <h4>Dados usuario</h4>
                <p>{user.name}</p>
                <p>Repositório Git: {user.html_url}</p>
            </div>
        )
    }
}