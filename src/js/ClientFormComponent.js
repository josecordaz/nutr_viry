import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
 
const ClientFormComponent = () => (
  <form>
      <TextField floatingLabelText="Nombre"/>
      <br/>
      <TextField floatingLabelText="Edad" type="number"/>
      <br/>
      <RaisedButton label="Default"/>
  </form>
);
 
export default ClientFormComponent;