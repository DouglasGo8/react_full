import React, {Component} from 'react';

export const Repository = ({gitHubDataRepo}) => (
  <div className="ui sizer vertical segment">
    <h2 className="ui small header">Repositories</h2>
    <div className="ui bulleted list">
      <div className="item">Repository Name</div>
      <div className="item">Repository Name</div>
    </div>
  </div>
);


Repository.defaultProps = {
  gitHubDataRepo : {

  }
}
