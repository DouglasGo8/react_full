import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @author Douglas D.b
 */
export const UserInfo = ({user}) => (
  <div className='ui form'>
    <div className='ui center aligned'>
      <h3 className='ui right header'>
        <a href={user.html_url} className='ui medium'>
          {user.name}
        </a>
      </h3>
    </div>
    <div className='ui bulleted list'>
      <div className='item'>Repositories: {user.public_repos}</div>
      <div className='item'>Followers: {user.followers}</div>
      <div className='item'>Following: {user.following}</div>
    </div>
  </div>
)

UserInfo.defaultProps = {
  user: {
    html_url: 'http://',
    name: 'Unknown User',
    public_repos: 0,
    followers: 0,
    following: 0,
  }
}

UserInfo.propTypes = {
  user: PropTypes.shape({
    html_url: PropTypes.string,
    name: PropTypes.string,
    public_repos: PropTypes.number,
    followers: PropTypes.number,
    following: PropTypes.number,
  })
}
