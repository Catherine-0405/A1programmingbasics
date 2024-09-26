
// Part 1
const hospital = {
    name: "Unity Health Hospital",
    patients: [
      {
        id: 1,
        fullName: "Clarine Hudson",
        dateOfBirth: "05/01/1986",
        symptoms: ["cough", "sore throat", "headache"],
      },
      {
        id: 2,
        fullName: "Ethan Carter",
        dateOfBirth: "26/03/1994",
        symptoms: ["stomachache", "fever", "vomitting"],
      },
      {
        id: 3,
        fullName: "Bob Johnson",
        dateOfBirth: "03/03/2000",
        symptoms: ["dizziness", "nausea", "fatigue"],
      },
    ],
  };

  function showPatients(hospital) {
    let result = "<h1>" + hospital.name + "</h1>"; 
    
    for (let i = 0; i < hospital.patients.length; i++) {
        const patient = hospital.patients[i];
            
        
        
        if (patient.symptoms.length) {
            patient.symptoms.forEach((symptom) => {
                result= patient.symptoms; 
            })
        }
        result= hospital.patients;

       
       
    }

    return result;
}

// Execute showPatients and log the return value
console.log(showPatients(hospital));

function getPatient(patients) {
    const randomIndex = Math.floor(Math.random() * patients.length); 
    return patients[randomIndex].id; 
}


// Execute getPatient and log the result to the console
const randomPatientId = getPatient(hospital.patients);
console.log("Random Patient ID:", randomPatientId);