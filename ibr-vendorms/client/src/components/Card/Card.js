import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {
  render() {
    return <div>This is a component called Card.</div>;
  }
}

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Card extends React.Component {
//   render() {
//     return <div>This is a component called Card.</div>;
//   }
// }

const CardPropTypes = {
	// always use prop types!
};

Card.propTypes = CardPropTypes;

export default Card;
