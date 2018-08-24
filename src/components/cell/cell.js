import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import cn from 'classnames';
import './cell.css';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '14px 10px',
};

const CalendarCell = ({
  end,
  hovered,
  inRange,
  nextMonth,
  prevMonth,
  selectable,
  selected,
  start,
  today,
  ...otherProps
}) => (
  <Grid.Column
    style={styles}
    className={cn('clndr-cell', {
      'clndr-cell-today': today,
      'clndr-cell-disabled': !selectable,
      'clndr-cell-other-month': nextMonth || prevMonth,
      'clndr-cell-inrange': inRange,
      'clndr-cell-selected': selected,
    })}
    {...otherProps}
  />
);

CalendarCell.propTypes = {
  end: PropTypes.bool,
  hovered: PropTypes.bool,
  inRange: PropTypes.bool,
  nextMonth: PropTypes.bool,
  prevMonth: PropTypes.bool,
  selectable: PropTypes.bool,
  selected: PropTypes.bool,
  start: PropTypes.bool,
  today: PropTypes.bool,
};

CalendarCell.defaultProps = {
  end: false,
  hovered: false,
  inRange: false,
  nextMonth: false,
  prevMonth: false,
  start: false,
};

export default CalendarCell;
