import { format, differenceInMinutes, isValid } from 'date-fns';

export const getDate = (date: string) => format(new Date(date), 'MM-dd');

export const getTime = (date: string) => format(new Date(date), 'hh:mm');

export const getDuration = (startDate: string, endDate: string) => {
  const difference = differenceInMinutes(new Date(endDate), new Date(startDate));
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
      let value = keys.map((key) => obj[key]).join('-');
      value = isValid(new Date(value)) ? getDate(value) : value;
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {} as Record<string, T[]>);

export const randomID = () => Math.random().toString(36).slice(2, 12);
