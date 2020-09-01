import React, { Fragment, useEffect, useState } from 'react';
import moment from 'moment';
import 'moment-business-days';
import { SchoolStart, VacationStart } from '../../utils/Config';
import Percentage from './Percentage';
import Summary from './Summary';
import Switch from '../Switch';
import styled from 'styled-components';
import Text from '../Typography/Text';
import useInterval from '@use-it/interval';

const SwitchContainer = styled.div`
  justify-content: center;
  display: flex;
`;

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    percentage: 0
  });
  const [skipDaysOff, setSkipDaysOff] = useState(false);

  useInterval(() => {
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

  const handleSkipDaysOffChange = e => setSkipDaysOff(e.target.checked);

  return (
    <Fragment>
      <Percentage percentage={timeLeft.percentage} />
      <Summary seconds={timeLeft.seconds} days={timeLeft.days} minutes={timeLeft.minutes} hours={timeLeft.hours} />
      <SwitchContainer>
        <Switch checked={skipDaysOff} onChange={handleSkipDaysOffChange}>
          <Text font-size={0.1} textTransform={'uppercase'} letterSpacing={0.15}>Pomiń dni wolne</Text>
        </Switch>
      </SwitchContainer>
    </Fragment>
  );
};

export default Countdown;
