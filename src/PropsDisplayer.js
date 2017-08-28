import React from 'react';



class Element extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clock : Date()};
    this.tick = this.tick.bind(this);

  }

  tick(e) {
            return this.setState({clock : Date()});
          } // End takeSurvey


	render() {
		return (
      <div>
        <h1>Hello, world!</h1>
        <h2 onClick={this.tick} >It is {this.state.clock}.</h2>
      </div>

    );

	}

}

export class PropsDisplayer extends React.Component {



  render() {
  	const stringProps = JSON.stringify(this.props);
    console.log("Props object comin' up!");



  console.log("That was my props object!");
    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
        <Element  />
      </div>
    );
  }
}
