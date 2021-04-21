export const transformationsFormat = transformations => `,${transformations}`;

export const getMaxCookieAgeInSeconds = ({ days, isNeverExpires = false }) => {
  if (!isNeverExpires) return getDaysInSeconds(days);

  return getDaysInSeconds(getNeverExpiresDays());
};

const getNeverExpiresDays = () => {
  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const neverExpiresDate = new Date('2038-01-19T03:14:07Z'); //max value compatible with 32-bit systems
  const dateNow = new Date();
  const timeDifference = neverExpiresDate.getTime() - dateNow.getTime();
  const daysInBetween = timeDifference / millisecondsInADay;

  return daysInBetween;
};

const getDaysInSeconds = days => 60 * 60 * (days * 24);
