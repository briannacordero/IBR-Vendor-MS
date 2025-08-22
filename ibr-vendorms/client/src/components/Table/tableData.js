import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const generateRandomData = (rows, columns) => {
    const data = [];
  
    // Generate random data for each row
    for (let i = 0; i < rows; i++) {
      const row = {};
      for (let j = 0; j < columns; j++) {
        // Generate a random value for each column
        row[`column${j + 1}`] = Math.floor(Math.random() * 1000); // Example: Generate random numbers
      }
      data.push(row);
    }
  
    return data;
  };
  
  export default generateRandomData;
  