import React, {Component} from 'react';
import PropTypes from 'prop-types';

const showList = (repo) => (
  <div className="ui bulleted list" key={repo.id}>
    <div className="item">
      <a target='_blank' href={repo.html_url}>{repo.name}</a>
    </div>
  </div>
);

export const Repository = ({gitHubDataRepo}) => (
  <div className="ui sizer vertical segment">
    <h2 className="ui small header">Repositories</h2>
    {
      gitHubDataRepo.map(showList)
    }
  </div>
);

Repository.defaultProps = {
  gitHubDataRepo : {
    html_url: '',
    name: '',
    id: ''
  }
}

Repository.propTypes = {
  repo: PropTypes.shape({
    id: PropTypes.number,
    html_url: PropTypes.string,
    name: PropTypes.string,
  })
}
