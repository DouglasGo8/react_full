import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @author Douglas D.b
 */
export const Photo = ({height, width, url, image}) => (
  <div className='ui center aligned'>
    <a href={url}
      className='ui image'>
      <img style={{
        height: height,
        width: width,
      }} src={image} />
    </a>
  </div>
);

Photo.defaultProps = {
  height: 'auto',
  width: '70px',
  url: 'https://reactjs.org/',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_XP5VlB-6lBpTXKvTOsuJCCnOMQwA8F3s5Rt3qhGfZ9QDqvBxw',
};

Photo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
};
