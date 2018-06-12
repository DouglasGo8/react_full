import React, {Component} from 'react';
import PropTypes from 'prop-types';


export const Button = ({color, handleColor}) => {
  return (
    <button onClick={()=>{handleColor(color)}}
      className='ui basic button'>
      {color}
    </button>
  );
};


Button.propTypes = {
  handleColor: PropTypes.func.isRequired,
  color: PropTypes.string,
}

/*export class Button extends Component {


  constructor(props) {
    super(props);
  }

  changeColor = () => {

    this.props.handleColor(this.props.color);

  }

  render() {
    return(
      <button onClick={this.changeColor}
        className='ui basic button'>
        {this.props.color}
      </button>
    )
  }
}*/
