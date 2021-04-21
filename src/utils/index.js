export const transformationsFormat = transformations => `,${transformations}`;

export const getMaxCookieAge = ({ days, isNeverExpires = false }) => {
  if (!isNeverExpires) return getDaysInMilliseconds(days);

  return getDaysInMilliseconds(getNeverExpiresDays());
};

const getNeverExpiresDays = () => {
  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const neverExpiresDate = new Date('2038-01-19T03:14:07Z'); //max value compatible with 32-bit systems
  const dateNow = new Date();
  const timeDifference = neverExpiresDate.getTime() - dateNow.getTime();
  const daysInBetween = timeDifference / millisecondsInADay;

  return daysInBetween;
};

const getDaysInMilliseconds = days => 60 * 60 * (days * 24);
