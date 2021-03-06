import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 300,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default class EmptyState extends Component {
  render(){
    return (
      <div>
        <Paper style={style} zDepth={1} circle={true} >
          {this.props.children}
        </Paper>
      </div>
    );
  }
};
