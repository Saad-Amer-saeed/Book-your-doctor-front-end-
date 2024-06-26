export const UniqueClinicandDoctorData = (clinicData, property, nullValue) => {
  return clinicData
    .map((clinic) => ({
      label: clinic[property],
      value: clinic[property] === nullValue ? null : clinic[property],
    }))
    .filter(
      (clinic, index, self) =>
        index === self.findIndex((c) => c.label === clinic.label)
    );
};
