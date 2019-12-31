import React, { Component } from "react";
import "./Header.css";
import Logo from "../../images/search.png";
import Menu from "../menu/Menu";
import BackgroundVideo from '../../images/background-video.mp4';
export default class Header extends Component {
  constructor() {
    super();
    this.aramaMetniniGuncelle = this.aramaMetniniGuncelle.bind(this);
    this.state = {
      yardimMetni: "Bir fotoğraf ara...",
      butonIsmi: "Ara",
      aramaMetni: "",
      menuButonlari: [
        { isim: "Anasayfa", url: "/" },
        { isim: "Hakkında", url: "hakkinda" },
        { isim: "Yardım", url: "yardim" }
      ]
    };
    this.aramaMetniReferansi = React.createRef();
    this.videoReferansi = React.createRef();
}

  componentDidMount() {
    this.aramaMetniReferansi.current.focus();
    this.videoReferansi.current.play();
  }

  aramaMetniniGuncelle(e) {
    this.setState({ aramaMetni: e.target.value });
  }
  render() {
    console.log(this.state.aramaMetni);
    return (
      <div>
        <Menu menuButonlari={this.state.menuButonlari} />
        <div className="header">
          <img className="logo" src={Logo} alt="Fotograf Arama Motoru" />
          <br />
          <input
            className="search-input"
            type="search"
            value={this.state.aramaMetni}
            placeholder={this.state.yardimMetni}
            onChange={this.aramaMetniniGuncelle}
            ref={this.aramaMetniReferansi}
          />
          <button className="search-button">{this.state.butonIsmi}</button>
        </div>
        <video className="header-background-video" loop autoPlay="" muted ref={this.videoReferansi}>
            <source src={BackgroundVideo} type="video/mp4"/>
        </video>
      </div>
    );
  }
}
