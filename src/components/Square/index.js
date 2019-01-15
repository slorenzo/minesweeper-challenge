import React from 'react';
import PropTypes from 'prop-types';

import Row from '../Row';

const Square = ({ rows, cols, grid, handleClick, handleRightClick }) => (
  <div className="square-container">
    {new Array(rows).fill(0).map((cur, row) => (
      <Row
        key={`row-${row}`}
        grid={grid}
        cols={cols}
        row={row}
        handleClick={handleClick}
        handleRightClick={handleRightClick}
      />
    ))}
  </div>
);

Square.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  grid: PropTypes.instanceOf(Array).isRequired,
  handleClick: PropTypes.func.isRequired,
  handleRightClick: PropTypes.func.isRequired,
};

export default Square;
