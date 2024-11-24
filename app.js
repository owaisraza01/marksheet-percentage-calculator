document.querySelector(".btn-success").addEventListener("click", function () {
    // Subjects and input elements
    const subjects = [
        { name: "English", id: "englishMarks" },
        { name: "Urdu", id: "urduMarks" },
        { name: "Mathematics", id: "mathMarks" },
        { name: "Islamiat", id: "islamiatMarks" },
        { name: "Chemistry", id: "chemistryMarks" },
        { name: "Physics", id: "physicsMarks" },
    ];

    let totalMarks = 0;
    let totalPercentage = 0;

    // Clear existing table rows
    const table = document.querySelector(".table");
    table.innerHTML = `
        <thead>
            <tr>
                <th>Subject</th>
                <th>Marks</th>
                <th>Percentage</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    const tbody = table.querySelector("tbody");

    // Calculate and populate table
    subjects.forEach((subject) => {
        const marks = parseInt(document.getElementById(subject.id).value) || 0;
        const percentage = (marks / 100) * 100;

        totalMarks += marks;
        totalPercentage += percentage;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${subject.name}</td>
            <td>${marks}/100</td>
            <td>${percentage.toFixed(2)}%</td>
        `;
        tbody.appendChild(row);
    });

    // Total and grade
    const totalRow = document.createElement("tr");
    const overallPercentage = totalPercentage / subjects.length;
    let grade = overallPercentage >= 80 ? "A" :
        overallPercentage >= 70 ? "B" :
            overallPercentage >= 60 ? "C" :
                overallPercentage >= 50 ? "D" : "F";


    totalRow.innerHTML = `
        <td><strong>Total</strong></td>
        <td><strong>${totalMarks}/${subjects.length * 100}</strong></td>
        <td><strong>${overallPercentage.toFixed(2)}%</strong></td>
    `;
    tbody.appendChild(totalRow);

    const gradeRow = document.createElement("tr");
    gradeRow.innerHTML = `
        <td colspan="3" class="text-center"><strong>Grade: ${grade}</strong></td>
    `;
    tbody.appendChild(gradeRow);
});
