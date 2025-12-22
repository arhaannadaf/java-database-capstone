## template ##
**Title:**
_As a [user role], I want [feature/goal], so that [reason]._

**Acceptance Criteria:**
1. [Criteria 1]
2. [Criteria 2]
3. [Criteria 3]

**Priority:** [High/Medium/Low]
**Story Points:** [Estimated Effort in Points]
**Notes:**
- [Additional information or edge cases]

## ADMIN USER STORIES ##
**Issue 1: Admin Login**

**Title:**
As an admin, I want to log into the portal using my username and password, so that I can securely manage the platform.

**Acceptance Criteria:**
1. Admin can enter a valid username and password to log in.
2. Invalid credentials display an appropriate error message.
3. Successful login redirects the admin to the admin dashboard.

**Priority:** High

**Story Points:** 5

**Notes:**
1. Passwords must be securely stored and validated.
2. Session should expire after inactivity.

**Issue 2: Admin Logout**
**Title:** As an admin, I want to log out of the portal, so that system access is protected when I leave.
**Acceptance Criteria:**
1. Admin can log out using a logout option in the dashboard.
2. Session data is cleared after logout.
3. Admin is redirected to the login page.
**Priority:** High
**Story Points:** 3
**Notes:**
Back-button access after logout must be prevented.

**Issue 3: Add Doctor Profile**
**Title:** As an admin, I want to add doctors to the portal, so that they can be assigned appointments.
**Acceptance Criteria:**
1. Admin can enter doctor details such as name, specialization, and availability.
2. Required fields are validated before saving.
3. Newly added doctors appear in the doctor list immediately.
**Priority:** High
**Story Points:** 6
**Notes:**
Duplicate doctor entries should be prevented.

**Issue 4: Delete Doctor Profile**
**Title:** As an admin, I want to delete a doctor’s profile from the portal, so that inactive or incorrect records are removed.
**Acceptance Criteria:**
1. Admin can delete a doctor profile from the doctor list.
2. A confirmation prompt is shown before deletion.
3. Deleted doctors no longer appear in booking or dashboard views.
**Priority:** Medium
**Story Points:** 5
**Notes:**
Doctors with existing appointments should be handled safely (soft delete or warning).

**Issue 5: Generate Monthly Appointment Statistics**
**Title:** As an admin, I want to run a stored procedure in MySQL to get the number of appointments per month, so that I can track system usage.
**Acceptance Criteria:**
1. A MySQL stored procedure returns appointment counts grouped by month.
2. The procedure executes successfully using MySQL CLI.
3. Output is accurate and matches database records.
**Priority:** Medium
**Story Points:** 8
**Notes:**
1. Stored procedure should use aggregation and date functions.
2. Results may later be integrated into an admin dashboard.
3. Passwords must be securely stored and validated.
4. Session should expire after inactivity.

##  PATIENT USER STORIES ##

**Issue 1: View Doctors Without Login**
**Title:** As a patient, I want to view a list of doctors without logging in, so that I can explore options before registering.
**Acceptance Criteria:**
1. Patients can view doctor names, specializations, and availability without authentication.
2. No booking actions are allowed without logging in.
3. The doctor list loads successfully for all users.
**Priority:** Medium
**Story Points:** 3
**Notes:**
Sensitive doctor details should not be displayed publicly.

**Issue 2: Patient Registration**
**Title:** As a patient, I want to sign up using my email and password, so that I can book appointments.
**Acceptance Criteria:**
1. Patient can register with a valid email and password.
2. Email uniqueness is validated.
3. Successful registration redirects the patient to the login page or dashboard.
**Priority:** High
**Story Points:** 5
**Notes:**
Passwords must be securely stored using hashing.

**Issue 3: Patient Login**
**Title:** As a patient, I want to log into the portal, so that I can manage my bookings.
**Acceptance Criteria:**
1. Patient can log in using valid credentials.
2. Invalid login attempts show an error message.
3. Successful login redirects to the patient dashboard.
**Priority:** High
**Story Points:** 4
**Notes:**
Session timeout should be enforced for security.

**Issue 4: Patient Logout**
**Title:** As a patient, I want to log out of the portal, so that my account remains secure.
**Acceptance Criteria:**
1. Patient can log out from any authenticated page.
2. Session data is cleared after logout.
3. User is redirected to the login or home page.
**Priority:** Medium
**Story Points:** 3
**Notes:**
Browser back navigation should not restore the session.

**Issue 5: Book Doctor Appointment**
**Title:** As a patient, I want to log in and book a one-hour appointment with a doctor, so that I can consult for my health issues.
**Acceptance Criteria:**
1. Patient must be logged in to book an appointment.
2. Appointment duration is fixed to one hour.
3. Double booking for the same time slot is prevented.
**Priority:** High
**Story Points:** 6
**Notes:**
Appointment availability should update in real time.

## DOCTOR USER STORIES ##

**Issue 1: Doctor Login**
**Title:** As a doctor, I want to log into the portal, so that I can manage my appointments.
**Acceptance Criteria:**
1. Doctor can log in using valid credentials.
2. Invalid login attempts show an error message.
3. Successful login redirects to the doctor dashboard.
**Priority:** High
**Story Points:** 4
**Notes:**
 Authentication should be secure and session-based.

**Issue 2: Doctor Logout**
**Title:** As a doctor, I want to log out of the portal, so that my data remains protected.
**Acceptance Criteria:**
1. Doctor can log out from any authenticated page.
2. Session data is cleared on logout.
3. Doctor is redirected to the login page.
**Priority:** Medium
**Story Points:** 3
**Notes:**
 Browser back button should not restore the session.

**Issue 3: View Appointment Calendar**
**Title:** 
As a doctor, I want to view my appointment calendar, so that I can stay organized.
**Acceptance Criteria:**
1. Doctor can view all upcoming appointments in a calendar or list format.
2. Appointments display date, time, and patient name.
3. Past and upcoming appointments are clearly distinguished.
**Priority:** High
**Story Points:** 5
**Notes:**
Calendar should update automatically when appointments change.

**Issue 4: Mark Unavailability**
**Title:** 
As a doctor, I want to mark my unavailability, so that patients only see available slots.
**Acceptance Criteria:**
1. Doctor can mark specific dates or time slots as unavailable.
2. Unavailable slots are hidden from patient booking views.
3. Changes take effect immediately.
**Priority:** High
**Story Points:** 6
**Notes:**
 Should prevent booking conflicts with existing appointments.

**Issue 5: Update Doctor Profile**
**Title:** 
As a doctor, I want to update my profile with specialization and contact information, so that patients have up-to-date information.
**Acceptance Criteria:**
1. Doctor can update specialization and contact details.
2. Updated information is visible to patients.
3. Changes are saved persistently in the database.
**Priority:** Medium
**Priority:** 4
**Notes:**
Input validation should be applied to all fields.

