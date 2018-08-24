import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Grid, Segment } from 'semantic-ui-react';
import Button from '../button';
import TodayButton from '../today-button';
import { getToday } from '../../utils';
import Weeks from './weeks';
import Weekdays from './weekdays';
import './calendar.css';

const styles = {
  leftBtn: { textAlign: 'start' },
  rightBtn: { textAlign: 'end' },
  nextYear: { marginRight: 0 },
  previousMonth: { marginRight: 0 },
  grid: { padding: '0 1em 1em' },
  gridRow: { padding: 0 },
  calendarDays: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '0.28571429rem',
    overflow: 'hidden',
  },
};

const pointings = {
  'top left': 'clndr-top clndr-left',
  'top right': 'clndr-top clndr-right',
  left: 'clndr-left',
  right: 'clndr-right',
};

const Calendar = ({
  calendars,
  getBackProps,
  getDateProps,
  getForwardProps,
  maxDate,
  minDate,
  months,
  nextMonth,
  nextYear,
  previousMonth,
  previousYear,
  showToday,
  todayButton,
  weekdays,
  pointing,
}) => (
  <Segment className={cn('clndr-calendars-segment', pointings[pointing])}>
    <div
      className="clndr-calendars-wrapper"
      style={{ '--n': calendars.length }}
    >
      {calendars.map((calendar, calendarIdx) => (
        <div key={`${calendar.year}-${calendar.month}`}>
          <div className="clndr-control">
            <div style={styles.leftBtn}>
              {calendarIdx === 0 && (
                <Fragment>
                  <Button
                    icon="angle double left"
                    title={previousYear}
                    {...getBackProps({ calendars, offset: 12 })}
                  />
                  <Button
                    icon="angle left"
                    style={styles.previousMonth}
                    title={previousMonth}
                    {...getBackProps({ calendars })}
                  />
                </Fragment>
              )}
            </div>

            <span title={`${months[calendar.month]} ${calendar.year}`}>
              {months[calendar.month].slice(0, 3)} {calendar.year}
            </span>

            <div style={styles.rightBtn}>
              {calendarIdx === calendars.length - 1 && (
                <Fragment>
                  <Button
                    icon="angle right"
                    title={nextMonth}
                    {...getForwardProps({ calendars })}
                  />
                  <Button
                    icon="angle double right"
                    style={styles.nextYear}
                    title={nextYear}
                    {...getForwardProps({ calendars, offset: 12 })}
                  />
                </Fragment>
              )}
            </div>
          </div>
          <div style={styles.calendarDays}>
            <Grid columns={7} divided style={styles.grid}>
              <Weekdays calendar={calendar} weekdays={weekdays} />
              <Weeks calendar={calendar} getDateProps={getDateProps} />
            </Grid>
          </div>
        </div>
      ))}
    </div>
    {showToday && (
      <TodayButton
        {...getToday(minDate, maxDate)}
        {...getDateProps({
          dateObj: getToday(minDate, maxDate),
        })}
      >
        {todayButton}
      </TodayButton>
    )}
  </Segment>
);

Calendar.propTypes = {
  calendars: PropTypes.array.isRequired,
  getBackProps: PropTypes.func.isRequired,
  getDateProps: PropTypes.func.isRequired,
  getForwardProps: PropTypes.func.isRequired,
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  months: PropTypes.array.isRequired,
  nextMonth: PropTypes.string.isRequired,
  nextYear: PropTypes.string.isRequired,
  pointing: PropTypes.oneOf(['left', 'right', 'top left', 'top right']),
  previousMonth: PropTypes.string.isRequired,
  previousYear: PropTypes.string.isRequired,
  showToday: PropTypes.bool,
  todayButton: PropTypes.string.isRequired,
  weekdays: PropTypes.array.isRequired,
};

Calendar.defaultProps = {
  pointing: 'left',
  maxDate: null,
  minDate: null,
  showToday: true,
};

export default Calendar;
