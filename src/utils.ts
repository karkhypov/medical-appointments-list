import moment from 'moment';

export const getDate = (date: string) => moment(new Date(date)).format('MM-DD');

export const getTime = (date: string) => moment(new Date(date)).format('hh:mm');

export const getDuration = (startDate: string, endDate: string) => {
  const difference = moment(new Date(endDate)).diff(new Date(startDate), 'minutes');
  const hours = difference / 60;

  return hours <= 1
    ? { time: `${difference}min`, greaterThanHour: false }
    : {
        time: `${hours.toPrecision(1)}h ${difference - +hours.toPrecision(1) * 60}min`,
        greaterThanHour: true,
      };
};

export const sortByAppointmentDate = <T extends { startDate: string }>(data: T[]) =>
  data.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

export const sortByClinicianName = <T extends { clinicianName: string }>(data: T[]) =>
  data.sort((a, b) => a.clinicianName.localeCompare(b.clinicianName));

export const groupBy =
  <T>(keys: (keyof T)[]) =>
  (array: T[]): Record<string, T[]> =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = keys.map((key) => obj[key]).join('-');
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {} as Record<string, T[]>);
