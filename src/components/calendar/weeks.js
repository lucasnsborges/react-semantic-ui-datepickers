import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import CalendarCell from '../cell';

const styles = { padding: 0 };

const Weeks = ({ calendar, getDateProps }) => (
  <React.Fragment>
    {calendar.weeks.map((week, calendarWeekIdx) => (
      <Grid.Row key={calendarWeekIdx} style={styles}>
        {week.map((dateObj, weekIdx) => {
          const key = `${calendar.year}-${calendar.month}-${weekIdx}`;

          return dateObj ? (
            <CalendarCell key={key} {...dateObj} {...getDateProps({ dateObj })}>
              {dateObj.date.getDate()}
            </CalendarCell>
          ) : (
            <CalendarCell key={key} />
          );
        })}
      </Grid.Row>
    ))}
  </React.Fragment>
);

Weeks.propTypes = {
  calendar: PropTypes.object.isRequired,
  getDateProps: PropTypes.func.isRequired,
};

export default Weeks;
