const form = document.querySelector(".repair form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = form.querySelector("input:nth-of-type(1)").value;
    const phoneModel = form.querySelector("input:nth-of-type(2)").value;
    const problem = form.querySelector("select").value;

    alert(
        "Thank you, " + name +
        "! We received your request for your " + phoneModel +
        ". Problem: " + problem + "."
    );
});

const searchInput = document.getElementById("repairSearch");
    const repairCards = document.querySelectorAll(".repair-card");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();

        repairCards.forEach(function (card) {
            const repairName = card.textContent.toLowerCase();

            if (repairName.includes(searchText)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });

    const repairForm = document.getElementById("repairForm");
    const repairConfirmation = document.getElementById("repairConfirmation");
    const repairNumber = document.getElementById("repairNumber");

    repairForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Generate a random repair number
        const randomNumber = Math.floor(100 + Math.random() * 900);

        const number = "REP-2026-" + randomNumber;

        // Display the repair number
        repairNumber.textContent = number;

        // Show confirmation message
        repairConfirmation.classList.remove("d-none");

        // Clear the form
        repairForm.reset();
    });

    function RepairStatus() {
        const [status, setStatus] = React.useState("");

        function checkRepair() {
            setStatus("Your phone is currently being repaired 🔧");
        }

        return React.createElement(
            "div",
            { className: "card p-4 shadow-sm" },

            React.createElement(
                "h3",
                null,
                "Check Repair Status"
            ),

            React.createElement(
                "button",
                {
                    className: "btn btn-primary mt-2",
                    onClick: checkRepair
                },
                "Check Status"
            ),

            React.createElement(
                "p",
                { className: "mt-3" },
                status
            )
        );
    }

    const root = ReactDOM.createRoot(
        document.getElementById("repair-status")
    );

    root.render(
        React.createElement(RepairStatus)
    );

    const lightModeBtn = document.getElementById("lightModeBtn");
    const darkModeBtn = document.getElementById("darkModeBtn");

    lightModeBtn.addEventListener("click", function () {
        document.documentElement.setAttribute("data-bs-theme", "light");
    });

    darkModeBtn.addEventListener("click", function () {
        document.documentElement.setAttribute("data-bs-theme", "dark");
    });

    function checkRepairForm() {
    let phoneModel = document.getElementById("phoneModel").value;

    if (phoneModel === "") {
        alert("Please enter your phone model.");
        return false;
    }

    return true;
}

    <!-- JavaScript -->
src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
 src="https://unpkg.com/react@18/umd/react.development.js"
 src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
const form = document.querySelector(".repair form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = form.querySelector("input:nth-of-type(1)").value;
    const phoneModel = form.querySelector("input:nth-of-type(2)").value;
    const problem = form.querySelector("select").value;

    alert(
        "Thank you, " + name +
        "! We received your request for your " + phoneModel +
        ". Problem: " + problem + "."
    );
});

const searchInput = document.getElementById("repairSearch");
    const repairCards = document.querySelectorAll(".repair-card");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();

        repairCards.forEach(function (card) {
            const repairName = card.textContent.toLowerCase();

            if (repairName.includes(searchText)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });

    const repairForm = document.getElementById("repairForm");
    const repairConfirmation = document.getElementById("repairConfirmation");
    const repairNumber = document.getElementById("repairNumber");

    repairForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Generate a random repair number
        const randomNumber = Math.floor(100 + Math.random() * 900);

        const number = "REP-2026-" + randomNumber;

        // Display the repair number
        repairNumber.textContent = number;

        // Show confirmation message
        repairConfirmation.classList.remove("d-none");

        // Clear the form
        repairForm.reset();
    });

    function RepairStatus() {
        const [status, setStatus] = React.useState("");

        function checkRepair() {
            setStatus("Your phone is currently being repaired 🔧");
        }

        return React.createElement(
            "div",
            { className: "card p-4 shadow-sm" },

            React.createElement(
                "h3",
                null,
                "Check Repair Status"
            ),

            React.createElement(
                "button",
                {
                    className: "btn btn-primary mt-2",
                    onClick: checkRepair
                },
                "Check Status"
            ),

            React.createElement(
                "p",
                { className: "mt-3" },
                status
            )
        );
    }

    const root = ReactDOM.createRoot(
        document.getElementById("repair-status")
    );

    root.render(
        React.createElement(RepairStatus)
    );

    const lightModeBtn = document.getElementById("lightModeBtn");
    const darkModeBtn = document.getElementById("darkModeBtn");

    lightModeBtn.addEventListener("click", function () {
        document.documentElement.setAttribute("data-bs-theme", "light");
    });

    darkModeBtn.addEventListener("click", function () {
        document.documentElement.setAttribute("data-bs-theme", "dark");
    });

    function checkRepairForm() {
    let phoneModel = document.getElementById("phoneModel").value;

    if (phoneModel === "") {
        alert("Please enter your phone model.");
        return false;
    }

    return true;
}
