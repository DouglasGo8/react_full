import React from 'react';
import PropTypes from 'prop-types';

/**
 * [RepoFavButton description]
 * @author Douglas D.b
 * @param {[type]} handleShowRepo [description]
 * @param {[type]} handleShowFav  [description]
 */
export const RepoFavButton = ({handleShowRepo, handleShowFav}) => (
  <div className="ui buttons">
    <button onClick={handleShowRepo}
      className="ui positive button">Repo</button>
    <div className="or"></div>
    <button onClick={handleShowFav}
      className="ui button">Fav</button>
  </div>
);

RepoFavButton.propTypes = {
  handleShowRepo: PropTypes.func.isRequired,
  handleShowFav: PropTypes.func.isRequired,
}
