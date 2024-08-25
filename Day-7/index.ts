// Intersection Type
/*An intersection type creates a new type by combining multiple existing types. The new type has all features of the existing types.*/

type Doctors = {
  name: string;
  fatherName: string;
  profession: string;
  roomNo: number;
};

type Patients = {
  name: string;
  fatherName: string;
  disease: string;
  wardNo: number;
};

// Now we are combining previous types to create a new type
type Hospital = Doctors & Patients;

// Now all types are necessary to mention. If we miss any type then gives error
let HospitalData: Hospital = {
  name: "Muhammad Farooq",
  fatherName: "Muhammad Irshad",
  profession: "Urologist",
  disease: "Urine",
  wardNo: 10,
  roomNo: 10,
};
