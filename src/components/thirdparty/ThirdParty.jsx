import React, {Component} from 'react';

export class ThirdParty extends Component {

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log(this._fInput);
    this._fInput.focus();
  }

  handleRefInput = (node) => {
    this._fInput = node;
  }

  render() {
    return (
      <div className='ui form'>
        <h3 className='ui small header'>ThirdParty Comp</h3>
        <table className='ui table strict'>
          <tbody>
            <tr>
              <td>
                <input className='ui small input'
                  placeholder='Keep Focus'
                  type='text'
                  ref={this.handleRefInput}/>
              </td>
              <td>
                <button
                  className='ui basic button'
                  onClick={this.handleClick}>Confirm</button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>);
  }

}
