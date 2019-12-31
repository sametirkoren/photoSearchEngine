import React, { Component } from 'react'
import './Main.css';
export default class Main extends Component {
    constructor(){
        super();
        this.state = {
            hataDurumu : false,
            zamanAyarlari: {
                year : "numeric",
                month : "long",
                day : "2-digit",
                hour12: false,
                hour : "2-digit",
                minute: "2-digit",
                second : "2-digit" 
            },
            zaman : "",

        };
    }

    

    componentWillReceiveProps(nextProps){
        if(nextProps.location.state !== undefined && nextProps.location.state.aramaMetni !== this.state.aramaMetni){
            this.setState({aramaMetni : nextProps.location.state.aramaMetni});
        }
    }

    componentDidMount(){
        console.log("<Main/> güncellendi.");
        this.zamanInterval = setInterval(()=>{
            this.setState({
                zaman:new Date().toLocaleTimeString("tr-TR",this.state.zamanAyarlari)
            });
        },1000);
    }

    getSnapshotBeforeUpdate(nextProps,nextState,snapshoot){
        console.log("<Main/> güncellenecek.");
        console.log(nextProps,nextState);
        return null;
    }

    componentWillUnmount(){
        console.log("<Main/> kaldırılacak");
        clearInterval(this.zamanInterval);
    }
    componentDidCatch(hata , hataBilgisi){
        this.setState({hata ,hataBilgisi});
    }
    render() {
        if(this.state.hata){
            return <h1>Hata : {this.state.hata.toString()} , {this.state.hataBilgisi.toString}</h1>
        }
        return (
            <div className="main" >
                {this.state.aramaMetni ? (`Aranan Kelime : ${this.state.aramaMetni}`) : (<div className="takvimSaat">{this.state.zaman}</div>)}
            </div>
        )
    }
}
