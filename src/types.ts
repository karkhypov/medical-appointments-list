interface Patient {
  id: string;
  name: string;
}

export interface AppointmentCardData {
  id: string;
  startDate: string;
  endDate: string;
  clinicianName: string;
  patient: Patient;
  status: string;
}

export interface GroupedAppointmentCards {
  [key: string]: AppointmentCardData[];
}

export interface FormInputs {
  patient: string;
  clinicianName: string;
  startDate: string;
  endDate: string;
}

export type SelectValue = 'startDate' | 'clinicianName';
