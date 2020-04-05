import React, { Fragment, useState } from 'react';
import moment from 'moment';
import 'moment-business-days';
import { SchoolStart, VacationStart } from '../../utils/Config';
import Percentage from './PercentageCountdown';
import Summary from './Summary';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    percentage: 0
  });

  const [skipDaysOff, setSkipDaysOff] = useState(false);

  setInterval(() => {
    const now = moment();
    const unix = now.unix();
    const diff = now.add(1, 'days').startOf('day').unix() - unix;

    const vacationStart = moment(VacationStart, 'DD-MM-YYYY');
    const schoolStart = moment(SchoolStart, 'DD-MM-YYYY');

    const totalDays = skipDaysOff ? vacationStart.businessDiff(schoolStart) : vacationStart.diff(schoolStart, 'days');
    const daysLeft = skipDaysOff ? vacationStart.businessDiff(now) : vacationStart.diff(now, 'days');

    const percentage = 100 - (daysLeft / totalDays * 100);
    const duration = moment.duration(diff, 'seconds');

    setTimeLeft({
      days: daysLeft,
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
      percentage: percentage
    });
  }, 1000);

  return (
    <Fragment>
      <Percentage percentage={timeLeft.percentage} />
      <Summary seconds={timeLeft.seconds} days={timeLeft.days} minutes={timeLeft.minutes} hours={timeLeft.hours} />
    </Fragment>
  );
};

export default Countdown;
