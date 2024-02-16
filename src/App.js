import React, { useState } from 'react';

const initialDoctors = [
  { id: 1, name: 'Dr. Web', isAvailable: true },
  { id: 2, name: 'Dr. House', isAvailable: false },
  { id: 3, name: 'Dr. Who', isAvailable: true },
  { id: 4, name: 'Dr. Freud', isAvailable: true },
  { id: 5, name: 'Dr. Dre', isAvailable: false },
];

const Doctor = ({ id, name, isAvailable, onChangeAvailability }) => (
  <div className={`doctor-card ${isAvailable ? 'available' : 'not-available'}`}>
    <div className="doctor-info">
      <div className="doctor-info-row">Name: {name}</div>
      <div className="doctor-info-row">
        Available: {isAvailable ? 'Yes' : 'No'}
      </div>
    </div>
    <button className="button" onClick={() => onChangeAvailability(id)}>
      Change availability
    </button>
  </div>
);

export default function Doctors() {
  const [doctors, setDoctors] = useState(initialDoctors);

  const handleChangeAvailability = (id) => {
    const updatedDoctors = doctors.map((doctor) =>
      doctor.id === id
        ? { ...doctor, isAvailable: !doctor.isAvailable }
        : doctor
    );
    setDoctors(updatedDoctors);
  };

  const doctorsAvailable = doctors.reduce(
    (acc, doctor) => (doctor.isAvailable ? ++acc : acc),
    0
  );

  return (
    <div className="doctors">
      <h1>Doctors</h1>
      <div className="doctors-list">
        {doctors.map((doctor) => (
          <Doctor
            key={doctor.id}
            {...doctor}
            onChangeAvailability={handleChangeAvailability}
          />
        ))}
        <p>Doctors available: {doctorsAvailable}</p>
      </div>
    </div>
  );
}
