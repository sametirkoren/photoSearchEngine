import React, { Component } from 'react'
import './Menu.css';


export default class Menu extends Component {
    render() {
        
        return (
            <div> 
                <div className="menu">
                    {
                        this.props.menuButonlari.map(i => {
                            return <button key={i.url}>{i.isim}</button>
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
