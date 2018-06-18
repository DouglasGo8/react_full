import React from 'react';

export const Header = ({title, color}) => (
  <div className='ui container'>
    <h2 className='ui small header' style={{
      backgroundColor: color
    }}>
      Title is <i>{title}</i>
    </h2>
    <br />
  </div>
);

Header.defaultProps = {
  title: '[default value]',
  color: 'blue'
};
