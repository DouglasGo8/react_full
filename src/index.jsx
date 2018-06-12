import React, {Component} from 'react';
import {render, findDOMNode} from 'react-dom';
// Components
import {Header} from './components/Header';
import {Button} from './components/form/Button';
import {Form} from './components/form/Form';
import {GitHub} from './components/github/GitHub';

export default class App extends Component {

  state = {
    time: (new Date()).toLocaleString(),
    color: 'lightgray'
  }

  constructor(props) {
    super(props);
  }

  onClickCallback = (color) => {
    //console.log('Hitted');
    this.setState({color});
  }

  renderColorButton = (color) => {
    return (
      <Button
        key={color}
        color={color}
        handleColor={this.onClickCallback} />
    );
  }

  render() {

    //console.log('render()');

    return (
      <div className='ui basic segment'>
        <Header
          title='Stateless Component'
          color={this.state.color} />
        {['Red', 'Green', 'Salmon'].map(this.renderColorButton)}
        <hr />
        <Form />
        <hr />
        <GitHub />
      </div>
    );
  }
};

render(<App />, document.querySelector('[data-js="app"]'));
