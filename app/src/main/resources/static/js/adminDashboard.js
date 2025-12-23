// adminDashboard.js

import { getAllDoctors, addDoctor } from "../services/doctorService.js";
import { createDoctorCard } from "../components/doctorCard.js";
import { openModal, closeModal } from "../components/modal.js";

const doctorList = document.getElementById("doctorList");
const searchInput = document.getElementById("searchDoctor");
const specialtyFilter = document.getElementById("specialtyFilter");
const timeFilter = document.getElementById("timeFilter");
const addDoctorBtn = document.getElementById("addDoctorBtn");

let doctors = [];

/* ---------------- LOAD DOCTORS ---------------- */
async function loadDoctors() {
    try {
        doctors = await getAllDoctors();
        renderDoctors(doctors);
    } catch (error) {
        console.error("Failed to load doctors", error);
    }
}

/* ---------------- RENDER DOCTORS ---------------- */
function renderDoctors(list) {
    doctorList.innerHTML = "";

    if (list.length === 0) {
        doctorList.innerHTML = "<p>No doctors found</p>";
        return;
    }

    list.forEach(doctor => {
        doctorList.appendChild(createDoctorCard(doctor));
    });
}

/* ---------------- SEARCH ---------------- */
searchInput.addEventListener("input", () => {
    applyFilters();
});

/* ---------------- FILTERS ---------------- */
specialtyFilter.addEventListener("change", applyFilters);
timeFilter.addEventListener("change", applyFilters);

function applyFilters() {
    const searchText = searchInput.value.toLowerCase();
    const specialty = specialtyFilter.value;
    const time = timeFilter.value;

    let filtered = doctors.filter(d =>
        d.name.toLowerCase().includes(searchText)
    );

    if (specialty) {
        filtered = filtered.filter(d => d.specialty === specialty);
    }

    if (time) {
        filtered = filtered.filter(d =>
            d.availableTimes?.some(t =>
                time === "morning"
                    ? t.startsWith("09") || t.startsWith("10") || t.startsWith("11")
                    : t.startsWith("13") || t.startsWith("14") || t.startsWith("15") || t.startsWith("16")
            )
        );
    }

    renderDoctors(filtered);
}

/* ---------------- ADD DOCTOR MODAL ---------------- */
addDoctorBtn.addEventListener("click", () => {
    openModal(`
        <h3>Add Doctor</h3>
        <input id="docName" placeholder="Name" />
        <input id="docEmail" placeholder="Email" />
        <input id="docPhone" placeholder="Phone" />
        <input id="docSpecialty" placeholder="Specialty" />
        <input id="docPassword" type="password" placeholder="Password" />
        <button id="saveDoctor">Save</button>
    `);

    document.getElementById("saveDoctor").addEventListener("click", saveDoctor);
});

/* ---------------- SAVE DOCTOR ---------------- */
async function saveDoctor() {
    const doctor = {
        name: document.getElementById("docName").value,
        email: document.getElementById("docEmail").value,
        phone: document.getElementById("docPhone").value,
        specialty: document.getElementById("docSpecialty").value,
        password: document.getElementById("docPassword").value
    };

    if (!doctor.name || !doctor.email) {
        alert("Name and email required");
        return;
    }

    try {
        await addDoctor(doctor);
        closeModal();
        loadDoctors();
    } catch (error) {
        alert("Failed to add doctor");
    }
}

/* ---------------- INIT ---------------- */
document.addEventListener("DOMContentLoaded", loadDoctors);
