// Mock SSH Console Commands
const commands = {
    help: "Available commands: help, stats, reboot, clear",
    stats: "Model: Is-a.space Server C6525\nProcessor: AMD EPYC 7763\nRAM: 768GB\nStatus: Operational",
    reboot: "Rebooting server... Done.",
    clear: ""
};

// Reference elements
const consoleOutput = document.getElementById("console-output");
const consoleInput = document.getElementById("console-input");

// Handle user input
consoleInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const input = consoleInput.value.trim();
        consoleInput.value = ""; // Clear input field

        // Append user input to console
        appendToConsole(`> ${input}`);

        // Check if command exists
        if (commands[input]) {
            appendToConsole(commands[input]);
        } else {
            appendToConsole("Unknown command. Type 'help' for a list of commands.");
        }
    }
});

// Append text to the console output
function appendToConsole(text) {
    const newLine = document.createElement("p");
    newLine.textContent = text;
    consoleOutput.appendChild(newLine);
    consoleOutput.scrollTop = consoleOutput.scrollHeight; // Scroll to bottom
}
