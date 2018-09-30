// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ClientFormComponent from './ClientFormComponent';

import React from 'react';
import ReactDOM from 'react-dom';
 
const App = () => (
  <MuiThemeProvider>
    <ClientFormComponent />
  </MuiThemeProvider>
);
 
ReactDOM.render(
  <App />,
  document.getElementById('app')
);


// import RaisedButton from 'material-ui/RaisedButton';

// var React = require('react');
// var ReactDOM = require('react-dom');

// const stitch = require('mongodb-stitch');
// const stitchClient = new stitch.StitchClient('scripts-db-qbopb');
 
// class Cliente extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {value: ''};
//     stitchClient.login().then(() => {
//       console.log('Successfully authenticated as ' + stitchClient.authedId());
//     }).catch((err) => {
//       console.error('Error authenticating: ' + err);
//     })
//   }

//   onSubmit(e) {
//     e.preventDefault();
//     console.log('Submitted!!')
//   }

//   render() {
//     return (
//       <form onSubmit={this.onSubmit} lang="es">
//         <RaisedButton label="Default" />
//         <h3>HISTORIAL CLINICO-NUTRICIA</h3>
//         <label htmlFor="nombre">Nombre</label>
//         <input type="text" name="nombre" id="nombre"/>
//         <br/>
//         <label htmlFor="edad">Edad</label>
//         <input type="number" name="edad" id="edad"/>
//         <br/>
//         <label htmlFor="fecha">Fecha</label>
//         <input type="date" name="fecha" id="fecha"/>
//         <br/>
//         <label htmlFor="ocupacion">Ocupación</label>
//         <input type="text" name="ocupacion" id="ocupacion"/>
//         <br/>
//         <label htmlFor="telefono">Teléfono</label>
//         <input type="text" name="telefono" id="telefono"/>
//         <br/>
//         <button type="submit">Save</button>
//       </form>
//     )
//   }
// }
 
// ReactDOM.render(<Cliente />, document.getElementById('app'));