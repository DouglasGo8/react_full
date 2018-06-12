import React, {Component} from 'react';

/**
 * @author Douglas D.b
 */
export const Search = ({searchGitHubRepoHandle}) => (
  <div className="ui icon input">
    <input type="text" placeholder="Search..."
      onChange={searchGitHubRepoHandle} />
    <i className="circular search link icon"></i>
  </div>
);
