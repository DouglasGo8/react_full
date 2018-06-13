import React, {Component} from "react";
// Components
import {Search} from "./Search";
import {Photo} from "./Photo";
import {UserInfo} from "./UserInfo";
import {Repository} from './Repository';
import {Favorite} from './Favorite';
import {RepoFavButton} from './RepoFavButton';
// Lib's
import axios from "axios";

/**
 *
 * @author Douglas D.b
 */
export class Github extends Component {

  state = {
    gitHubData: {},
    gitHubDataRepo: {},
    gitHubDataFav: {},
    isShowRepo: false,
    isShowFav: false
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('componentDidMount...');
  }

  handleShowRepo = () => {

    if (this.state.gitHubData.login) {
      // console.log(`https://api.github.com/users/${this.state.gitHubData.login}/repos`);
      console.log(this.state.gitHubData.login);
      axios({
        method: "get",
        url: `https://api.github.com/users/${this.state.gitHubData.login}/repos`,
      }).then(res => {
        //console.log(res.data);
        this.setState({
          gitHubDataRepo: res.data,
          isShowRepo: true,
          isShowFav: false})
      })
    }

  }

  handleShowFav = () => {
    // console.log(`https://api.github.com/users/foouser/starred`);
    this.setState({
      isShowRepo: false,
      isShowFav: true
    })
  }

  searchGitHubRepo = (e) => {
    if (e.target.value !== "") {
      axios({
        method: "get",
        url: this.props.gitHubLink.concat(e.target.value),
      }).then(res => {
        this.setState({gitHubData: res.data});
      }).catch(err => {
        this.setState({gitHubData: {}});
      });
    } else {
      this.setState({gitHubData: {}});
    }
  };

  render() {
    const tagUserInfo = JSON.stringify(this.state.gitHubData) !== "{}"
      ? (<UserInfo user={this.state.gitHubData}/>)
      : (<UserInfo />);
    return (<div className="ui container">
      <h3 className="ui header middle">Github Suggest</h3>
      <Search searchGitHubRepoHandle={this.searchGitHubRepo}/>
      <table className="ui celled striped table">
        <thead>
          <tr>
            <th className="center aligned">Photo</th>
            <th className="center aligned">User Info</th>
            <th className="right aligned">Further Info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="center aligned">
              <Photo
                url={this.state.gitHubData.html_url}
                image={this.state.gitHubData.avatar_url}/>
            </td>
            <td className="left aligned">{tagUserInfo}</td>
            <td rowSpan="2" className="left aligned">
              <div className="ui form">
                <RepoFavButton
                  handleShowRepo={this.handleShowRepo}
                  handleShowFav={this.handleShowFav}/>
                <div className="ui right aligned">
                  {this.state.isShowRepo &&
                    <Repository
                      gitHubDataRepo={this.state.gitHubDataRepo}/>}
                  {this.state.isShowFav && <Favorite/>}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>);
  }
}

Github.defaultProps = {
  gitHubLink: "https://api.github.com/users/"
};
