import React from 'react';


export const RepoFavButton = ({handleShowRepo, handleShowFav}) => (
  <div className="ui buttons">
    <button onClick={handleShowRepo}
      className="ui positive button">Repo</button>
    <div className="or"></div>
    <button onClick={handleShowFav}
      className="ui button">Fav</button>
  </div>
);
