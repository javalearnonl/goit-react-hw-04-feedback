import React from 'react';
import ss from '../App/App.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={ss.otzivi }>
    <p>Good: {good} 👍</p>
    <p>Neutral: {neutral} 😐</p>
    <p>Bad: {bad} 👎</p>
    <p>Total: {total} 📈 </p>
    <p>Positive Feedback: {positivePercentage}% 🔍</p>
  </div>
);

export default Statistics;