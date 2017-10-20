import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
 
const ClientFormComponent = () => (
  <form>
      <TextField floatingLabelText="Nombre"/>
      <br/>
      <TextField floatingLabelText="Edad" type="number"/>
      <br/>
      <DatePicker floatingLabelText="Fecha de Nacimiento" />
      <br/>
      <TextField floatingLabelText="Ocupación"/>
      <br/>
      <TextField floatingLabelText="Teléfono"/>
      <RaisedButton label="Default"/>
  </form>
);
 
export default ClientFormComponent;