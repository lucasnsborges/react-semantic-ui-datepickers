import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import CalendarCell from '../cell';

const Weekdays = ({ calendar, weekdays }) => (
  <Grid.Row style={{ flexWrap: 'nowrap', paddingBottom: 0 }}>
    {weekdays.map(weekday => (
      <CalendarCell
        key={`${calendar.year}-${calendar.month}-${weekday}`}
        title={weekday}
      >
        {weekday.slice(0, 2)}
      </CalendarCell>
    ))}
  </Grid.Row>
);

Weekdays.propTypes = {
  calendar: PropTypes.object.isRequired,
  weekdays: PropTypes.array.isRequired,
};

export default Weekdays;
