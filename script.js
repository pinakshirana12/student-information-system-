const students = [

    {
        id: "CSE001",
        name: "Rahul Kumar",
        branch: "Computer Science Engineering",
        semester: "3rd Semester",
        email: "rahul@example.com",
        phone: "9876543210",
        attendance: "87%",
        cgpa: "8.2"
    },

    {
        id: "CSE002",
        name: "Priya Sharma",
        branch: "Computer Science Engineering",
        semester: "3rd Semester",
        email: "priya@example.com",
        phone: "9876543211",
        attendance: "92%",
        cgpa: "8.7"
    },

    {
        id: "CSE003",
        name: "Aman Singh",
        branch: "Computer Science Engineering",
        semester: "3rd Semester",
        email: "aman@example.com",
        phone: "9876543212",
        attendance: "84%",
        cgpa: "7.9"
    },

    {
        id: "ECE001",
        name: "Sneha Das",
        branch: "Electronics Engineering",
        semester: "3rd Semester",
        email: "sneha@example.com",
        phone: "9876543213",
        attendance: "90%",
        cgpa: "8.4"
    },

    {
        id: "ME001",
        name: "Arjun Patel",
        branch: "Mechanical Engineering",
        semester: "3rd Semester",
        email: "arjun@example.com",
        phone: "9876543214",
        attendance: "82%",
        cgpa: "7.8"
    },

    {
        id: "CSE004",
        name: "Ananya Roy",
        branch: "Computer Science Engineering",
        semester: "3rd Semester",
        email: "ananya@example.com",
        phone: "9876543215",
        attendance: "95%",
        cgpa: "9.1"
    }

];


const container =
    document.getElementById("studentContainer");

const noResult =
    document.getElementById("noResult");

const totalStudents =
    document.getElementById("totalStudents");


/* Display Students */

function displayStudents(list) {

    container.innerHTML = "";

    if (list.length === 0) {

        noResult.style.display = "block";

        return;
    }

    noResult.style.display = "none";

    list.forEach(student => {

        const firstLetter =
            student.name.charAt(0);

        const card = document.createElement("div");

        card.className = "student-card";

        card.innerHTML = `

            <div class="student-avatar">
                ${firstLetter}
            </div>

            <h3>${student.name}</h3>

            <p class="id">${student.id}</p>

            <div class="student-info">

                📚 ${student.branch}

                <br>

                🎓 ${student.semester}

                <br>

                📊 CGPA: ${student.cgpa}

            </div>

            <button
                class="view-btn"
                onclick="viewStudent('${student.id}')">

                View Details

            </button>

        `;

        container.appendChild(card);

    });

}


/* Search */

function searchStudents() {

    const value =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const filtered =
        students.filter(student =>

            student.id.toLowerCase().includes(value) ||

            student.name.toLowerCase().includes(value) ||

            student.branch.toLowerCase().includes(value)

        );

    displayStudents(filtered);
}


/* Search while typing */

document
.getElementById("searchInput")
.addEventListener("input", searchStudents);


/* View Details */

function viewStudent(id) {

    const student =
        students.find(s => s.id === id);

    if (!student) return;

    const modal =
        document.getElementById("studentModal");

    const details =
        document.getElementById("studentDetails");

    details.innerHTML = `

        <div class="details-avatar">
            ${student.name.charAt(0)}
        </div>

        <h2>${student.name}</h2>

        <p class="id">${student.id}</p>

        <div class="details-list">

            <div>
                <span>Branch</span>
                <strong>${student.branch}</strong>
            </div>

            <div>
                <span>Semester</span>
                <strong>${student.semester}</strong>
            </div>

            <div>
                <span>Email</span>
                <strong>${student.email}</strong>
            </div>

            <div>
                <span>Phone</span>
                <strong>${student.phone}</strong>
            </div>

            <div>
                <span>Attendance</span>
                <strong>${student.attendance}</strong>
            </div>

            <div>
                <span>CGPA</span>
                <strong>${student.cgpa}</strong>
            </div>

        </div>

    `;

    modal.style.display = "flex";
}


/* Close Modal */

function closeModal() {

    document
        .getElementById("studentModal")
        .style.display = "none";

}


/* Close modal outside box */

window.onclick = function(event) {

    const modal =
        document.getElementById("studentModal");

    if (event.target === modal) {

        modal.style.display = "none";

    }

};


/* Dark Mode */

document
.getElementById("themeBtn")
.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (
        document.body.classList.contains("dark")
    ) {

        this.textContent = "☀️";

    } else {

        this.textContent = "🌙";

    }

});


/* Total Students */

totalStudents.textContent =
    students.length;


/* Initial Display */

displayStudents(students);