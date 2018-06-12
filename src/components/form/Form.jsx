

import React, {Component} from 'react';


export class Form extends Component {

  state = {
    fName: '',
    checked: false
  }
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='ui form'>
        <h3 className='ui header middle'>Form</h3>
        <form>
          <table className='ui table strict'>
            <tbody>
              <tr>
                  <td>Name</td>
                  <td>
                      <input
                        className='ui input focus'
                        type="text" value={this.state.fName}
                        onChange={ (e) => {
                        //console.log(e.target.value);
                        //console.log(e);
                        this.setState({fName: e.target.value},
                          () => {
                            console.log('callback')
                          })}} />
                  </td>
              </tr>
              <tr>
                <td>Age</td>
                <td><input className='ui input focus'
                    type='text' defaultValue={0}
                    style={{width: '50px'}} /></td>
              </tr>
              <tr>
                <td>Gold Customer</td>
                <td><input type='checkbox'
                  value='' checked={this.state.checked} /></td>
              </tr>
              <tr>
                <td>Choose a City</td>
                <td>
                  <select className="ui search dropdown">
                    <option value="">State</option>
                    <option value="SP">Sao Paulo</option>
                    <option value="NY">New York</option>
                    <option value="DB">Dublin</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    )
  }

}
