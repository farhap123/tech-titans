document.addEventListener("DOMContentLoaded", () => {
    // Sample doctor data
    const doctor = {
        name: "Dr.Marsook Ali",
        speciality: " senior Consultent-Nephrology",
        available: true
    };

    document.getElementById("doctorName").textContent = doctor.name;
    document.getElementById("speciality").textContent = doctor.speciality;
    const availabilitySpan = document.getElementById("availability");

    if (doctor.available) {
        availabilitySpan.textContent = "Available";
        availabilitySpan.classList.add("available");
    } else {
        availabilitySpan.textContent = "Not Available";
        availabilitySpan.classList.add("unavailable");
        document.getElementById("bookBtn").disabled = true;
    }
});