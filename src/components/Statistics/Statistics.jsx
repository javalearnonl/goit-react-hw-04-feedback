import React from 'react';
import PropTypes from 'prop-types';
import ss from '../App/App.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={ss.otzivi}>
    <p>Good: {good} 👍</p>
    <p>Neutral: {neutral} 😐</p>
    <p>Bad: {bad} 👎</p>
    <p>Total: {total} 📈 </p>
    <p>Positive Feedback: {positivePercentage}% 🔍</p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
