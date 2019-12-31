import React, { Component } from 'react'
import './Menu.css';
import {Link} from 'react-router-dom';

export default class Menu extends Component {
    render() {
        
        return (
            <div> 
                <div className="menu">
                    {
                        this.props.menuButonlari.map(i => {
                            return <Link key={i.url} to={i.url}><button>{i.isim}</button></Link>
                        })
                    }
                </div>
            </div>
        )
    }
}

Menu.defaultProps = {
    menuButonlari : [
        {isim : "Hakkında" , url:"/hakkinda"},
        {isim : "Yardım" , url:"/yardim"},
    ]
}
