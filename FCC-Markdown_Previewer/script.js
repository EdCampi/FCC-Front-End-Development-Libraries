var example = `# TITLE 1
---
## Title 2
### Title 3
#### Title 4
##### Title 5
###### Title 6
  
\`<p>CODE</p>\`

Normal text.

\`\`\`
//multi-line code:

  const pi = 3.14;
\`\`\`
  
**bold TEXT** _italic TEXT_ **_both_** ~~strikethrough~~ 

[links](https://www.freecodecamp.com)

> Block Quotes

<br>

Tables

|Header  1|Header  2|
|---------|---------| 
|    1    |    2    | 
|    3    |    4    | 

- List.
  - Bulleted.
     - With indentation levels.
        - CUECK.


1. 1st item.
1. 2nd item.
1. 3rd item...
- Using dash.
* Using asterisc.

![FCC Logo 'Alt text'](https://i.imgur.com/emEeg9r.jpg0)
`;

class MyComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: example };

  }
  handleChange(event) {
    this.setState({
      input: event.target.value });


  }

  render() {
    var rendered = marked(this.state.input);
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: "minititles" }, /*#__PURE__*/
      React.createElement("h3", null, "Markdown code"), /*#__PURE__*/
      React.createElement("h3", null, "Preview")), /*#__PURE__*/

      React.createElement("div", { id: "main" }, /*#__PURE__*/
      React.createElement("section", { id: "idEditor" }, /*#__PURE__*/
      React.createElement("textarea", { cols: "0", rows: "0", id: "editor", value: this.state.input, onChange: this.handleChange.bind(this) })), /*#__PURE__*/

      React.createElement("section", { id: "idPreview" }, /*#__PURE__*/
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.input, { breaks: true }) } })))));




  }}
;

ReactDOM.render( /*#__PURE__*/React.createElement(MyComp, null), document.getElementById("page"));