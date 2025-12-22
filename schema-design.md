## MySQL Database Design

**Table: patients**

id: INT, Primary Key, AUTO_INCREMENT
name: VARCHAR(100), NOT NULL
email: VARCHAR(150), NOT NULL, UNIQUE
password: VARCHAR(255), NOT NULL
phone: VARCHAR(15), UNIQUE
created_at: TIMESTAMP, DEFAULT CURRENT_TIMESTAMP

**Notes:**

Email is marked UNIQUE to avoid duplicate accounts.
Password is stored as a hash (validated in application code).
Patient records are retained even if appointments are deleted for history and audit purposes.

**Table: doctors**

id: INT, Primary Key, AUTO_INCREMENT
name: VARCHAR(100), NOT NULL
specialization: VARCHAR(100), NOT NULL
email: VARCHAR(150), NOT NULL, UNIQUE
phone: VARCHAR(15), UNIQUE
is_active: BOOLEAN, DEFAULT TRUE
created_at: TIMESTAMP, DEFAULT CURRENT_TIMESTAMP

**Notes:**
Doctors are not hard-deleted; is_active is used instead to preserve appointment history.
Prevents data loss for past appointments.

**Table: admin**

id: INT, Primary Key, AUTO_INCREMENT
username: VARCHAR(100), NOT NULL, UNIQUE
password: VARCHAR(255), NOT NULL
created_at: TIMESTAMP, DEFAULT CURRENT_TIMESTAMP

**Notes:**

Admin credentials are managed separately for security and access control.
Only admins can add or deactivate doctors.

**Table: appointments**

id: INT, Primary Key, AUTO_INCREMENT
doctor_id: INT, NOT NULL, Foreign Key → doctors(id)
patient_id: INT, NOT NULL, Foreign Key → patients(id)
appointment_time: DATETIME, NOT NULL
duration_minutes: INT, DEFAULT 60
status: INT, NOT NULL
0 = Scheduled
1 = Completed
2 = Cancelled
created_at: TIMESTAMP, DEFAULT CURRENT_TIMESTAMP

**Constraints & Rules:**
A unique constraint can be applied on (doctor_id, appointment_time) to prevent overlapping appointments.
If a patient is deleted, appointments may be retained for reporting (soft delete recommended).
If a doctor is deactivated, existing appointments remain valid.

## MongoDB Collection Design

### Collection: prescriptions

{
  "_id": "ObjectId('64f1a9c23ab4567890def123')",
  "appointmentId": 102,
  "patientId": 45,
  "doctorId": 12,
  "medications": [
   {
      "name": "Amoxicillin",
      "dosage": "500mg",
      "frequency": "3 times a day",
      "durationDays": 7
    },
    {
      "name": "Paracetamol",
      "dosage": "650mg",
      "frequency": "As needed"
    }
  ],
  "doctorNotes": "Advise rest and hydration. Follow up if fever persists.",
  "tags": ["infection", "follow-up-required"],
  "metadata": {
    "createdVia": "doctor-portal",
    "lastUpdatedBy": "Dr. Sharma",
    "version": 1
  },
  "attachments": [
    {
      "fileName": "blood-report.pdf",
      "fileType": "lab-report"
    }
  ],
  "createdAt": "2025-01-18T09:45:00Z"
}

