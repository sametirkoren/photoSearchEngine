import React, { Component } from 'react';
import axios from 'axios';
import './Main.css';

export default class Main extends Component {
    constructor() {
        super();
        this.fotografVerileriniGetir = this.fotografVerileriniGetir.bind(this);
        this.state = {
            hataDurumu: false,
            zamanAyarlari: {
                year: "numeric",
                month: "long",
                day: "2-digit",
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            },
            zaman: "",
            aramaMetni: "",
            fotograflar: {}
        };
    }

    fotografVerileriniGetir() {
        axios.get(`https://api.unsplash.com/search/photos/?per_page=20&query=${this.state.aramaMetni}&client_id=6f532f66b0f6c71fe992a79420aae46394d391f2b99b5ac15cd7471d1928cdd7`)
            .then(res => {
                this.setState({ fotograflar: res.data });
            });
    }

    componentDidCatch(hata, hataBilgisi) {
        this.setState({ hata, hataBilgisi });
    }

    componentDidMount() {
        this.zamanInterval = setInterval(() => {
            this.setState({
                zaman: new Date().toLocaleTimeString("tr-TR", this.state.zamanAyarlari)
            });
        }, 1000);
    }

    getSnapshotBeforeUpdate(nextProps) {
        if (nextProps.location.state !== undefined) {
            if (nextProps.location.state.aramaMetni !== this.state.aramaMetni) {
                this.setState({ aramaMetni: nextProps.location.state.aramaMetni });
                this.fotografVerileriniGetir();
            }
        }

        return null;
    }


    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
        clearInterval(this.zamanInterval);
    }

    render() {
        if (this.state.hata) {
            return <h1>Hata: {this.state.hata.toString()}, {this.state.hataBilgisi.toString()}</h1>
        }

        var fotograflar = this.state.fotograflar.results || [];

        return (
            <div className="main" >
                {this.state.aramaMetni
                    ?
                    (
                        <div>
                            <p> Aranan kelime: {this.state.aramaMetni}</p>
                            <hr />
                            <div className="fotograf-alani" >
                                {
                                    fotograflar.map(fotograf =>
                                        <div key={fotograf.id} className="poster">
                                            <img src={fotograf.urls.thumb} alt={fotograf.alt_decription} title={fotograf.description} />
                                            <div className="fotograf-bilgi-alani" >
                                                <span>Beğeni sayısı {fotograf.likes}</span>
                                            </div>

                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                    : (<div className="takvimSaat" >
                        <h1 className="yazi">{this.state.zaman}</h1>
                    </div>)
                }
            </div>
        )
    }

}