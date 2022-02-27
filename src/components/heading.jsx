import React from "react";

class Heading extends React.Component {
  constructor() {
    super();
    this.state = {
      heading: "Heading",
      heading1: ""
    };
  }
  handleChange = (event) => {
    this.setState({ heading: "" });
  };
  handleChange2 = (event) => {
    this.setState({ heading1: event.target.value });
  };
  handleSubmit = (event) => {
    this.setState({ heading: this.state.heading1 });
  };
  render() {
    //const { heading } = this.state;
    if (this.state.heading) {
      return (
        <div>
          <h1 onClick={this.handleChange}>{this.state.heading}</h1>
        </div>
      );
    } else {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.heading1} onChange={this.handleChange2} />
            <button>Submit</button>
          </form>
        </div>
      );
    }
  }
}
export default Heading;
