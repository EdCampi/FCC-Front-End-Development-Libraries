class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 25,
      min: 25,
      neoMinutes: 5,
      neoMin: 5,
      running: 'off',
      interval: 'session',
      inter: 'START' };

    this.theClick = this.theClick.bind(this);
    this.theRestart = this.theRestart.bind(this);
    this.numUp = this.numUp.bind(this);
    this.numDown = this.numDown.bind(this);
    this.neoNumUp = this.neoNumUp.bind(this);
    this.neoNumDown = this.neoNumDown.bind(this);
  }

  theClick() {
    if (this.state.running == 'off') {
      this.setState({ running: 'on', inter: 'PAUSE' });
      this.myInterval = setInterval(() => {
        const { seconds, minutes } = this.state;

        if (seconds > 0) {
          this.setState(({ seconds }) => ({
            seconds: seconds - 1 }));

        }

        if (seconds === 0) {
          if (minutes === 0) {
            //clearInterval(this.myInterval)
            document.getElementById('beep').play();
            if (this.state.interval == 'session') {
              this.setState({
                minutes: this.state.neoMinutes,
                interval: 'break' });

            } else if (this.state.interval == 'break') {
              this.setState({
                minutes: this.state.min,
                interval: 'session' });

            }

          } else {
            this.setState(({ minutes }) => ({
              minutes: minutes - 1,
              seconds: 59 }));

          }
        }

      }, 1000);
    } else if (this.state.running == 'on') {
      this.setState({ running: 'off', inter: 'RESUME' });
      clearInterval(this.myInterval);
    }


  }

  theRestart() {
    clearInterval(this.myInterval);
    this.setState({ seconds: 0, minutes: 25, min: 25, running: 'off', interval: 'session', neoMinutes: 5, neoMin: 5, inter: 'START' });
    document.getElementById('beep').pause();
    document.getElementById('beep').currentTime = 0;
  }

  numUp() {
    if (this.state.running == 'off' && this.state.minutes < 60) {
      this.setState({
        minutes: this.state.minutes + 1,
        min: this.state.min + 1 });

    }
  }

  numDown() {
    if (this.state.running == 'off' && this.state.minutes > 1) {
      this.setState({
        minutes: this.state.minutes - 1,
        min: this.state.min - 1 });

    }
  }

  neoNumUp() {
    if (this.state.running == 'off' && this.state.neoMinutes < 60) {
      this.setState({
        neoMinutes: this.state.neoMinutes + 1,
        neoMin: this.state.neoMin + 1 });

    }
  }

  neoNumDown() {
    if (this.state.running == 'off' && this.state.neoMinutes > 1) {
      this.setState({
        neoMinutes: this.state.neoMinutes - 1,
        neoMin: this.state.neoMin - 1 });

    }
  }

  render() {
    const { minutes, seconds } = this.state;
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", null, "POMODORO CLOCK"), /*#__PURE__*/
      React.createElement("div", { id: "main-dis" }, /*#__PURE__*/
      React.createElement("p", { id: "timer-label" }, this.state.interval), /*#__PURE__*/
      React.createElement("h2", { id: "time-left" }, minutes < 10 ? `0${minutes}` : minutes, ":", seconds < 10 ? `0${seconds}` : seconds), /*#__PURE__*/
      React.createElement("audio", { id: "beep", src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" })), /*#__PURE__*/

      React.createElement("div", { id: "mng" }, /*#__PURE__*/
      React.createElement("button", { onClick: this.theClick, id: "start_stop" }, this.state.inter), /*#__PURE__*/
      React.createElement("button", { onClick: this.theRestart, id: "reset" }, "STOP")), /*#__PURE__*/

      React.createElement("div", { id: "sec" }, /*#__PURE__*/
      React.createElement("div", { id: "se-sec" }, /*#__PURE__*/
      React.createElement("p", { id: "session-label" }, "Session"), /*#__PURE__*/
      React.createElement("div", { id: "session-btn" }, /*#__PURE__*/
      React.createElement("button", { onClick: this.numUp, id: "session-increment" }, "+"), /*#__PURE__*/
      React.createElement("p", { id: "session-length" }, this.state.min), /*#__PURE__*/
      React.createElement("button", { onClick: this.numDown, id: "session-decrement" }, "-"))), /*#__PURE__*/



      React.createElement("div", { id: "brk-sec" }, /*#__PURE__*/
      React.createElement("p", { id: "break-label" }, "Break"), /*#__PURE__*/
      React.createElement("div", { id: "break-btn" }, /*#__PURE__*/
      React.createElement("button", { onClick: this.neoNumUp, id: "break-increment" }, "+"), /*#__PURE__*/
      React.createElement("p", { id: "break-length" }, this.state.neoMinutes), /*#__PURE__*/
      React.createElement("button", { onClick: this.neoNumDown, id: "break-decrement" }, "-"))))));






  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Timer, null), document.getElementById('app'));