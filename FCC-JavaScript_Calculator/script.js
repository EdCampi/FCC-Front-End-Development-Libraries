class Display extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("p", { id: "display" }, this.props.input)));


  }}


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '0',
      results: '-' };

    this.handleChange = this.handleChange.bind(this);
    this.handleNum = this.handleNum.bind(this);
    this.handleOp = this.handleOp.bind(this);
    this.handleEq = this.handleEq.bind(this);
    this.handleAC = this.handleAC.bind(this);
    this.handleDEL = this.handleDEL.bind(this);
    this.handleDot = this.handleDot.bind(this);
  }

  handleChange() {
    this.setState({});


  }

  handleNum(num) {
    if (/^(0)$/.test(this.state.input) == true) {
      this.setState({
        input: num,
        results: num });

    } else if (this.state.results == 0) {
      this.setState({
        input: num,
        results: num });

    } else {
      if (/^0$|^([-+/*]$)/.test(this.state.results) == true) {
        this.setState({
          results: num,
          input: this.state.input + num });

      } else {
        this.setState({
          results: this.state.results + num,
          input: this.state.input + num });

      }
    }
  }

  handleOp(op) {
    if (/(^\d+)(.)(\d+$)|(^\d+$)/.test(this.state.results) == true) {
      this.setState({
        input: this.state.input + op,
        results: op });

    } else if (/^([+/*]$)/.test(this.state.results) == true && op !== '-') {
      this.setState({
        input: this.state.input.replace(/[+/*]$/, op),
        results: op });

    } else if (op == '-' && /(-)$/.test(this.state.input) == false) {
      this.setState({
        input: this.state.input + op,
        results: op });

    } else if (op !== '-' && /(-)$/.test(this.state.input) == true) {
      this.setState({
        input: this.state.input.replace(/.(-)$/, op),
        results: op });

    }
  }

  handleDot(dot) {
    if (/^\d+$/.test(this.state.results) == true) {
      this.setState({
        results: this.state.results + dot,
        input: this.state.input + dot });

    }
  }

  handleEq() {
    var result = this.state.input;
    if (/(^\d+).{1}(?=(\d{4,})$)/.test(eval(result)) == true) {
      this.setState({
        input: eval(result).toFixed(4),
        results: '0' });

    } else {
      this.setState({
        input: eval(result),
        results: '0' });

    }
  }

  handleAC() {
    this.setState({
      input: '0',
      results: '-' });

  }

  handleDEL() {
    this.setState({
      input: this.state.input.substr(0, this.state.input.length - 1),
      results: this.state.results.substr(0, this.state.results.length - 1) });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("section", { id: "displays" }, /*#__PURE__*/
      React.createElement(Display, { input: this.state.input }), /*#__PURE__*/
      React.createElement("p", { onChange: this.handleChange, id: "res" }, this.state.results)), /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { onClick: () => this.handleNum('9'), id: "nine" }, "9"), /*#__PURE__*/
      React.createElement("button", { onClick: () => this.handleNum('8'), id: "eight" }, "8"), /*#__PURE__*/
      React.createElement("button", { onClick: () => this.handleNum('7'), id: "seven" }, "7"), /*#__PURE__*/
      React.createElement("button", { className: "mng", onClick: this.handleDEL, id: "del" }, "DEL"), /*#__PURE__*/
      React.createElement("button", { className: "mng", onClick: this.handleAC, id: "clear" }, "AC")), /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { onClick: () => this.handleNum('6'), id: "six" }, "6"), /*#__PURE__*/
      React.createElement("button", { onClick: () => this.handleNum('5'), id: "five" }, "5"), /*#__PURE__*/
      React.createElement("button", { onClick: () => this.handleNum('4'), id: "four" }, "4"), /*#__PURE__*/
      React.createElement("button", { className: "ops", onClick: () => this.handleOp('*'), id: "multiply" }, "x"), /*#__PURE__*/
      React.createElement("button", { className: "ops", onClick: () => this.handleOp('/'), id: "divide" }, "\xF7")), /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { onClick: () => this.handleNum('3'), id: "three" }, "3"), /*#__PURE__*/
      React.createElement("button", { onClick: () => this.handleNum('2'), id: "two" }, "2"), /*#__PURE__*/
      React.createElement("button", { onClick: () => this.handleNum('1'), id: "one" }, "1"), /*#__PURE__*/
      React.createElement("button", { className: "ops", onClick: () => this.handleOp('+'), id: "add" }, "+"), /*#__PURE__*/
      React.createElement("button", { className: "ops", onClick: () => this.handleOp('-'), id: "subtract" }, "-")), /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { onClick: () => this.handleNum('0'), id: "zero" }, "0"), /*#__PURE__*/
      React.createElement("button", { onClick: () => this.handleDot('.'), id: "decimal" }, "."), /*#__PURE__*/
      React.createElement("button", { onClick: this.handleEq, id: "equals" }, "="))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById('app'));