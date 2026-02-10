/**
 * Lab 5: DOM Manipulation and Events
 * CSC4035 Web Programming and Technologies
 *
 * Complete all TODO sections following the instructions.
 * Run tests with: npm test
 *
 * DO NOT modify the module.exports at the bottom.
 */

// ============================================
// TASK 1: Element Selection
// ============================================

// 1.1 Get the task input element by ID
// TODO: Use document.getElementById() to get the element with id "task-input"
const taskInput = null; // Replace null with your code

// 1.2 Get the add button element by ID
// TODO: Use document.getElementById() to get the element with id "add-btn"
const addBtn = null; // Replace null with your code

// 1.3 Get the task list (ul element) by ID
// TODO: Use document.getElementById() to get the element with id "task-list"
const taskList = null; // Replace null with your code

// 1.4 Get the task counter element by ID
// TODO: Use document.getElementById() to get the element with id "task-counter"
const taskCounter = null; // Replace null with your code

// 1.5 Get dark mode button by ID
// TODO: Use document.getElementById() to get the element with id "dark-mode-btn"
const darkModeBtn = null; // Replace null with your code

// 1.6 Get search input by ID
// TODO: Use document.getElementById() to get the element with id "search-input"
const searchInput = null; // Replace null with your code

// 1.7 Get error message element by ID
// TODO: Use document.getElementById() to get the element with id "error-message"
const errorMessage = null; // Replace null with your code


// ============================================
// TASK 2: Content Modification Functions
// ============================================

let taskCount = 0;

/**
 * Update the task counter display
 * @param {number} count - The number of tasks
 */
function updateCounter(count) {
    // TODO: Set taskCounter's textContent to "Tasks: {count}"
    // Example: If count is 5, display "Tasks: 5"
    // YOUR CODE HERE
}

/**
 * Clear the input field
 */
function clearInput() {
    // TODO: Set taskInput's value to an empty string
    // YOUR CODE HERE
}

/**
 * Show an error message to the user
 * @param {string} message - The error message to display
 */
function showError(message) {
    // TODO:
    // 1. Set errorMessage's textContent to the message
    // 2. Remove the 'hidden' class from errorMessage to show it
    // 3. Use setTimeout to add the 'hidden' class back after 3000ms (3 seconds)
    // YOUR CODE HERE
}


// ============================================
// TASK 3: Element Creation
// ============================================

/**
 * Create a new task list item element
 * @param {string} taskText - The task description
 * @returns {HTMLLIElement} The created list item element
 */
function createTaskElement(taskText) {
    // TODO:
    // 1. Create an <li> element using document.createElement('li')
    // 2. Add the class 'task-item' to the li element
    // 3. Create a <span> element for the task text
    // 4. Set the span's textContent to taskText
    // 5. Create a <button> element for delete
    // 6. Set the button's textContent to "×" (multiplication sign)
    // 7. Add the class 'delete-btn' to the button
    // 8. Append the span to the li
    // 9. Append the button to the li
    // 10. Return the li element

    // YOUR CODE HERE
    return null; // Replace with your li element
}

/**
 * Add a new task to the list
 * @param {string} taskText - The task description
 * @returns {boolean} True if task was added, false otherwise
 */
function addTask(taskText) {
    // TODO:
    // 1. Validate that taskText is not empty (trim whitespace first)
    //    - If empty, call showError("Please enter a task") and return false
    // 2. Create a task element using createTaskElement(taskText)
    // 3. Append the task element to taskList
    // 4. Increment taskCount
    // 5. Call updateCounter(taskCount) to update the display
    // 6. Call clearInput() to clear the input field
    // 7. Return true

    // YOUR CODE HERE
    return false; // Replace with your code
}

/**
 * Delete a task from the list
 * @param {HTMLLIElement} taskElement - The task element to remove
 */
function deleteTask(taskElement) {
    // TODO:
    // 1. Remove the taskElement from the DOM using taskElement.remove()
    // 2. Decrement taskCount
    // 3. Call updateCounter(taskCount) to update the display

    // YOUR CODE HERE
}


// ============================================
// TASK 4: Event Handling
// ============================================

/**
 * Handle add button click
 * This function should be called when the add button is clicked
 */
function handleAddClick() {
    // TODO:
    // 1. Get the value from taskInput
    // 2. Call addTask with that value

    // YOUR CODE HERE
}

/**
 * Handle Enter key press on input
 * @param {KeyboardEvent} event - The keyboard event
 */
function handleInputKeypress(event) {
    // TODO:
    // 1. Check if event.key is 'Enter'
    // 2. If it is, get the value from taskInput and call addTask with it

    // YOUR CODE HERE
}

/**
 * Handle clicks on the task list (event delegation)
 * @param {MouseEvent} event - The click event
 */
function handleTaskListClick(event) {
    // TODO:
    // 1. Check if the clicked element (event.target) has the class 'delete-btn'
    //    Hint: Use event.target.classList.contains('delete-btn')
    // 2. If it does, find the parent <li> element using event.target.closest('li')
    // 3. Call deleteTask with the parent li element

    // YOUR CODE HERE
}

/**
 * Handle double-click on task list to toggle completion
 * @param {MouseEvent} event - The double-click event
 */
function handleTaskDoubleClick(event) {
    // TODO:
    // 1. Find the closest <li> element to the clicked target
    //    Hint: Use event.target.closest('li')
    // 2. If an li was found, toggle the 'completed' class on it
    //    Hint: Use element.classList.toggle('completed')

    // YOUR CODE HERE
}


// ============================================
// TASK 5: Style Manipulation
// ============================================

/**
 * Toggle dark mode on the page
 */
function toggleDarkMode() {
    // TODO: Toggle the 'dark-mode' class on document.body
    // Hint: Use document.body.classList.toggle('dark-mode')

    // YOUR CODE HERE
}

/**
 * Highlight tasks containing a search term
 * @param {string} term - The search term
 */
function highlightTasks(term) {
    // TODO:
    // 1. Get all elements with class 'task-item' using querySelectorAll
    // 2. Loop through each task item
    // 3. Get the text content from the span inside the task
    //    Hint: Use taskItem.querySelector('span').textContent
    // 4. If the text includes the search term (case-insensitive):
    //    - Add the 'highlighted' class to the task item
    // 5. Otherwise:
    //    - Remove the 'highlighted' class from the task item
    // Note: If term is empty, remove highlighting from all tasks

    // YOUR CODE HERE
}


// ============================================
// TASK 6: Initialize Event Listeners
// ============================================

// TODO: Set up all event listeners when the DOM is ready
// The code below runs when the script loads
// You need to add event listeners to the elements

// 6.1 Add click listener to add button
// TODO: addBtn.addEventListener('click', handleAddClick);

// 6.2 Add keypress listener to input for Enter key
// TODO: taskInput.addEventListener('keypress', handleInputKeypress);

// 6.3 Add click listener to task list for event delegation (delete buttons)
// TODO: taskList.addEventListener('click', handleTaskListClick);

// 6.4 Add double-click listener to task list for marking complete
// TODO: taskList.addEventListener('dblclick', handleTaskDoubleClick);

// 6.5 Add click listener to dark mode button
// TODO: darkModeBtn.addEventListener('click', toggleDarkMode);

// 6.6 Add input listener to search input for highlighting
// TODO: searchInput.addEventListener('input', (e) => highlightTasks(e.target.value));


// Initialize the counter display
if (taskCounter) {
    updateCounter(taskCount);
}


// ============================================
// EXPORTS - DO NOT MODIFY
// ============================================
// These exports allow the test suite to test your functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        // Task 2 functions
        updateCounter,
        clearInput,
        showError,
        // Task 3 functions
        createTaskElement,
        addTask,
        deleteTask,
        // Task 4 functions
        handleAddClick,
        handleInputKeypress,
        handleTaskListClick,
        handleTaskDoubleClick,
        // Task 5 functions
        toggleDarkMode,
        highlightTasks
    };
}
