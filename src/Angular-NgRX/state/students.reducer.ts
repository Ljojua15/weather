import { StudentsRecods } from './students-recods';
import { createReducer } from '@ngrx/store';

export const initState: ReadonlyArray<StudentsRecods> = [
  {
    name: 'Lasha',
    city: 'Tbilisi',
    country: 'Georgia',
    subject: 'NGRX',
    passportDeclaration: 'YES',
    fitnessDeclaration: 'NO',
    courseName: 'NGRX-HINDI',
    date: '13-01-2026',
    state: 'VAKE',
    subjects: 'Angular',
    street: 'ateni',
    email: 'lasha@gmail.com',
    phone: '555555999',
    postalCode: 12345,
  },
];

export const studentsReducer = createReducer(initState);
