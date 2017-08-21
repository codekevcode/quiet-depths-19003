import React from 'react';
import './App.css';

export class Jumbotron extends React.Component {
	render() {
		return (
      <div className ="jumbotron jumbotron-fluid align-baseline" style={{backgroundImage:'url(congruent_pentagon.png)'}}>
       <div className ="container typewriter">
         <h1 className="pull-left"> Owl Bot </h1>

       </div>

     </div>
    );
	}
}
export default Jumbotron;
