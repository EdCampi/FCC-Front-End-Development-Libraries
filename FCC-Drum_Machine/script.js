class Keys extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleVol = this.handleVol.bind(this);
  }
  handleClick() {
    document.getElementById(this.props.neoId).play();
  }

  handleVol() {
    document.getElementById(this.props.neoId).volume = this.props.neoVolume / 100;
  }


  componentDidMount() {
    window.addEventListener('keyup', this.keyPressed);
  }
  keyPressed(e) {
    let neoKey = e.key.toUpperCase();
    document.getElementById(neoKey).play();
  }
  componentWillUnmount() {
    window.removeEventListener('keyup', this.keyPressed);
  }


  render() {


    return /*#__PURE__*/(
      React.createElement("button", { className: "drum-pad btn btn-info", onClick: () => {this.handleClick();this.handleVol();}, id: this.props.auId }, /*#__PURE__*/
      React.createElement("p", null, this.props.neoId), /*#__PURE__*/
      React.createElement("audio", { className: "clip", id: this.props.neoId, src: this.props.source })));


  }}


class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'Press one key...',
      volume: 50 };

    this.keyPressed = this.keyPressed.bind(this);
    this.handleVol = this.handleVol.bind(this);
    this.qMusic = this.qMusic.bind(this);
    this.wMusic = this.wMusic.bind(this);
    this.eMusic = this.eMusic.bind(this);
    this.aMusic = this.aMusic.bind(this);
    this.sMusic = this.sMusic.bind(this);
    this.dMusic = this.dMusic.bind(this);
    this.zMusic = this.zMusic.bind(this);
    this.xMusic = this.xMusic.bind(this);
    this.cMusic = this.cMusic.bind(this);
  }

  handleVol() {
    this.setState({
      volume: document.getElementById('volume').value });

  }

  qMusic() {
    this.setState({
      display: 'Heater_1' });

  }
  wMusic() {
    this.setState({
      display: 'Heater_2' });

  }
  eMusic() {
    this.setState({
      display: 'Heater_3' });

  }
  aMusic() {
    this.setState({
      display: 'Heater-4_1' });

  }
  sMusic() {
    this.setState({
      display: 'Heater_6' });

  }
  dMusic() {
    this.setState({
      display: 'Dsc_Oh' });

  }
  zMusic() {
    this.setState({
      display: 'Kick_n_Hat' });

  }
  xMusic() {
    this.setState({
      display: 'RP4_KICK_1' });

  }
  cMusic() {
    this.setState({
      display: 'Cev_H2' });

  }

  componentDidMount() {
    window.addEventListener('keyup', this.keyPressed);
  }
  keyPressed(e) {
    if (e.key == 'q') {
      this.setState({
        display: 'Heater_1' });

      document.getElementById(e.key.toUpperCase()).volume = this.state.volume / 100;
    } else if (e.key == 'w') {
      this.setState({
        display: 'Heater_2' });

      document.getElementById(e.key.toUpperCase()).volume = this.state.volume / 100;
    } else if (e.key == 'e') {
      this.setState({
        display: 'Heater_3' });

      document.getElementById(e.key.toUpperCase()).volume = this.state.volume / 100;
    } else if (e.key == 'a') {
      this.setState({
        display: 'Heater-4_1' });

      document.getElementById(e.key.toUpperCase()).volume = this.state.volume / 100;
    } else if (e.key == 's') {
      this.setState({
        display: 'Heater_6' });

      document.getElementById(e.key.toUpperCase()).volume = this.state.volume / 100;
    } else if (e.key == 'd') {
      this.setState({
        display: 'Dsc_Oh' });

      document.getElementById(e.key.toUpperCase()).volume = this.state.volume / 100;
    } else if (e.key == 'z') {
      this.setState({
        display: 'Kick_n_Hat' });

      document.getElementById(e.key.toUpperCase()).volume = this.state.volume / 100;
    } else if (e.key == 'x') {
      this.setState({
        display: 'RP4_KICK_1' });

      document.getElementById(e.key.toUpperCase()).volume = this.state.volume / 100;
    } else if (e.key == 'c') {
      this.setState({
        display: 'Cev_H2' });

      document.getElementById(e.key.toUpperCase()).volume = this.state.volume / 100;
    }
  }
  componentWillUnmount() {
    window.removeEventListener('keyup', this.keyPressed);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("p", { id: "display", class: "display-1 card-header" }, this.state.display), /*#__PURE__*/
      React.createElement("p", { id: "vol-display" }, "Volume: ", this.state.volume, "%"), /*#__PURE__*/
      React.createElement("input", { type: "range", id: "volume", min: "0", max: "100", value: this.state.volume, onChange: this.handleVol, class: "form-control-range" }), /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("section", { id: "stRow" }, /*#__PURE__*/
      React.createElement("div", { onClick: this.qMusic }, /*#__PURE__*/
      React.createElement(Keys, { neoVolume: this.state.volume, neoId: "Q", source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", auId: "Heater-1" })), /*#__PURE__*/

      React.createElement("div", { onClick: this.wMusic }, /*#__PURE__*/
      React.createElement(Keys, { neoVolume: this.state.volume, neoId: "W", source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", auId: "Heater-2" })), /*#__PURE__*/

      React.createElement("div", { onClick: this.eMusic }, /*#__PURE__*/
      React.createElement(Keys, { neoVolume: this.state.volume, neoId: "E", source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", auId: "Heater-3" }))), /*#__PURE__*/


      React.createElement("section", { id: "ndRow" }, /*#__PURE__*/
      React.createElement("div", { onClick: this.aMusic }, /*#__PURE__*/
      React.createElement(Keys, { neoVolume: this.state.volume, neoId: "A", source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", auId: "Heater-4_1" })), /*#__PURE__*/

      React.createElement("div", { onClick: this.sMusic }, /*#__PURE__*/
      React.createElement(Keys, { neoVolume: this.state.volume, neoId: "S", source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", auId: "Heater-6" })), /*#__PURE__*/

      React.createElement("div", { onClick: this.dMusic }, /*#__PURE__*/
      React.createElement(Keys, { neoVolume: this.state.volume, neoId: "D", source: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", auId: "Dsc_Oh" }))), /*#__PURE__*/


      React.createElement("section", { id: "rdRow" }, /*#__PURE__*/
      React.createElement("div", { onClick: this.zMusic }, /*#__PURE__*/
      React.createElement(Keys, { neoVolume: this.state.volume, neoId: "Z", source: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", auId: "Kick_n_Hat" })), /*#__PURE__*/

      React.createElement("div", { onClick: this.xMusic }, /*#__PURE__*/
      React.createElement(Keys, { neoVolume: this.state.volume, neoId: "X", source: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", auId: "RP4_KICK_1" })), /*#__PURE__*/

      React.createElement("div", { onClick: this.cMusic }, /*#__PURE__*/
      React.createElement(Keys, { neoVolume: this.state.volume, neoId: "C", source: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", auId: "Cev_H2" }))))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(DrumMachine, null), document.getElementById('app'));