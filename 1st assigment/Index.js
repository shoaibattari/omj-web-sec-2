// Empty array to store tasks
let tasks = [];

while (true) {
    // Show menu options
    let choice = prompt(
        "📌 To-Do List Menu:\n" +
        "1️⃣ Add Task (End)\n" +
        "2️⃣ Add Task (Start)\n" +
        "3️⃣ Remove Last Task\n" +
        "4️⃣ Remove First Task\n" +
        "5️⃣ Remove Specific Task\n" +
        "6️⃣ Update Task\n" +
        "7️⃣ View Tasks\n" +
        "8️⃣ Exit\n" +
        "Enter your choice (1-8):"
    );

    // Exit if user clicks "Cancel"
    if (choice === null) break;

    if (choice === "1") {
        // Add Task at the End
        let newTask = prompt("✍ Enter new task:");
        if (newTask) {
            tasks.push(newTask);
            alert("✅ Task added at the end!");
        } else {
            alert("⚠ Task cannot be empty!");
        }

    } else if (choice === "2") {
        // Add Task at the Start
        let newTask = prompt("✍ Enter new task:");
        if (newTask) {
            tasks.unshift(newTask);
            alert("✅ Task added at the start!");
        } else {
            alert("⚠ Task cannot be empty!");
        }

    } else if (choice === "3") {
        // Remove Last Task
        if (tasks.length > 0) {
            let removedTask = tasks.pop();
            alert(`🗑 Removed Last Task: ${removedTask}`);
        } else {
            alert("⚠ No tasks to remove!");
        }

    } else if (choice === "4") {
        // Remove First Task
        if (tasks.length > 0) {
            let removedTask = tasks.shift();
            alert(`🗑 Removed First Task: ${removedTask}`);
        } else {
            alert("⚠ No tasks to remove!");
        }

    } else if (choice === "5") {
        // Remove Specific Task
        if (tasks.length > 0) {
            let index = prompt("🔢 Enter task number to remove:");
            index = parseInt(index) - 1;
            if (index >= 0 && index < tasks.length) {
                let removedTask = tasks.splice(index, 1);
                alert(`🗑 Removed Task: ${removedTask}`);
            } else {
                alert("⚠ Invalid task number!");
            }
        } else {
            alert("⚠ No tasks available!");
        }

    } else if (choice === "6") {
        // Update Task
        if (tasks.length > 0) {
            let index = prompt("🔢 Enter task number to update:");
            index = parseInt(index) - 1;
            if (index >= 0 && index < tasks.length) {
                let newTask = prompt("✍ Enter new task:");
                if (newTask) {
                    tasks.splice(index, 1, newTask);
                    alert("✅ Task updated successfully!");
                } else {
                    alert("⚠ Task cannot be empty!");
                }
            } else {
                alert("⚠ Invalid task number!");
            }
        } else {
            alert("⚠ No tasks available!");
        }

    } else if (choice === "7") {
        // View Tasks
        if (tasks.length > 0) {
            alert("📋 Your Tasks:\n" + tasks.map((task, i) => `${i + 1}. ${task}`).join("\n"));
        } else {
            alert("⚠ No tasks available!");
        }

    } else if (choice === "8") {
        // Exit Program
        alert("👋 Exiting To-Do List...");
        break;

    } else {
        alert("⚠ Invalid choice! Please enter a number between 1-8.");
    }
                      }
