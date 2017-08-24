import React from 'react';


export class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);
    console.log("Props object comin' up!");

  

  console.log("That was my props object!");
    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}
