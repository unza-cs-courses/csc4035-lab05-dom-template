/**
 * Lab 5: DOM Manipulation and Events - Visible Test Suite
 * CSC4035 Web Programming and Technologies
 *
 * Run these tests locally with: npm test
 * Additional hidden tests will be used for final grading after the deadline.
 *
 * DO NOT MODIFY THIS FILE
 * Run with: npm test
 */

// Mock DOM environment for Node.js testing
const { JSDOM } = require('jsdom');

// Create a mock DOM
const dom = new JSDOM(`
<!DOCTYPE html>
<html>
<head><title>Test</title></head>
<body>
    <div class="container">
        <header>
            <h1>Task Manager</h1>
            <button id="dark-mode-btn">Toggle Dark Mode</button>
        </header>
        <main>
            <div class="task-input-section">
                <input type="text" id="task-input" placeholder="Enter a new task...">
                <button id="add-btn">Add Task</button>
            </div>
            <div id="error-message" class="error-message hidden"></div>
            <div class="task-controls">
                <span id="task-counter">Tasks: 0</span>
                <input type="text" id="search-input" placeholder="Search tasks...">
            </div>
            <ul id="task-list"></ul>
        </main>
    </div>
</body>
</html>
`, { url: 'http://localhost' });

// Set up global DOM objects
global.document = dom.window.document;
global.window = dom.window;

// Now require the app module
const app = require('../../app');

// Test counter
let passed = 0;
let failed = 0;

function test(name, fn) {
    try {
        fn();
        console.log(`  PASS: ${name}`);
        passed++;
    } catch (e) {
        console.log(`  FAIL: ${name}`);
        console.log(`        Error: ${e.message}`);
        failed++;
    }
}

function assertEqual(actual, expected, message = '') {
    if (actual !== expected) {
        throw new Error(`Expected "${expected}", got "${actual}". ${message}`);
    }
}

function assertNotNull(value, message = '') {
    if (value === null || value === undefined) {
        throw new Error(`Expected non-null value. ${message}`);
    }
}

function assertTrue(value, message = '') {
    if (value !== true) {
        throw new Error(`Expected true, got ${value}. ${message}`);
    }
}

function assertFalse(value, message = '') {
    if (value !== false) {
        throw new Error(`Expected false, got ${value}. ${message}`);
    }
}

function assertContains(str, substring, message = '') {
    if (!str.includes(substring)) {
        throw new Error(`Expected "${str}" to contain "${substring}". ${message}`);
    }
}

// Reset DOM state before each test group
function resetDOM() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    const taskCounter = document.getElementById('task-counter');
    taskCounter.textContent = 'Tasks: 0';
    const taskInput = document.getElementById('task-input');
    taskInput.value = '';
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';
    errorMessage.classList.add('hidden');
    document.body.classList.remove('dark-mode');
}

console.log('\n========================================');
console.log('Lab 5: DOM Manipulation and Events');
console.log('Visible Test Suite');
console.log('========================================\n');

// ============================================
// Task 2 Tests: Content Modification
// ============================================
console.log('--- Task 2: Content Modification ---');
resetDOM();

test('updateCounter should update task counter text', () => {
    const counter = document.getElementById('task-counter');
    app.updateCounter(5);
    assertContains(counter.textContent, '5', 'Counter should show the count');
});

test('updateCounter should handle zero', () => {
    const counter = document.getElementById('task-counter');
    app.updateCounter(0);
    assertContains(counter.textContent, '0', 'Counter should show 0');
});

test('clearInput should empty the input field', () => {
    const input = document.getElementById('task-input');
    input.value = 'test task';
    app.clearInput();
    assertEqual(input.value, '', 'Input should be empty after clearInput');
});

test('showError should display error message', () => {
    const errorEl = document.getElementById('error-message');
    app.showError('Test error');
    assertEqual(errorEl.textContent, 'Test error', 'Error message should be set');
    assertFalse(errorEl.classList.contains('hidden'), 'Error should be visible');
});

// ============================================
// Task 3 Tests: Element Creation
// ============================================
console.log('\n--- Task 3: Element Creation ---');
resetDOM();

test('createTaskElement should return an li element', () => {
    const element = app.createTaskElement('Test Task');
    assertNotNull(element, 'Should return an element');
    assertEqual(element.tagName, 'LI', 'Should be an LI element');
});

test('createTaskElement should have task-item class', () => {
    const element = app.createTaskElement('Test Task');
    assertTrue(element.classList.contains('task-item'), 'Should have task-item class');
});

test('createTaskElement should contain task text in span', () => {
    const element = app.createTaskElement('My Task');
    const span = element.querySelector('span');
    assertNotNull(span, 'Should contain a span');
    assertEqual(span.textContent, 'My Task', 'Span should contain task text');
});

test('createTaskElement should have delete button', () => {
    const element = app.createTaskElement('Test Task');
    const button = element.querySelector('button');
    assertNotNull(button, 'Should contain a button');
    assertTrue(button.classList.contains('delete-btn'), 'Button should have delete-btn class');
});

test('addTask should add task to the list', () => {
    resetDOM();
    const taskList = document.getElementById('task-list');
    const initialCount = taskList.children.length;
    app.addTask('New Task');
    assertEqual(taskList.children.length, initialCount + 1, 'Task list should have one more item');
});

test('addTask should return false for empty input', () => {
    resetDOM();
    const result = app.addTask('   ');
    assertFalse(result, 'Should return false for empty task');
});

test('addTask should return true for valid input', () => {
    resetDOM();
    const result = app.addTask('Valid Task');
    assertTrue(result, 'Should return true for valid task');
});

test('deleteTask should remove task from list', () => {
    resetDOM();
    const taskList = document.getElementById('task-list');
    app.addTask('Task to Delete');
    const task = taskList.querySelector('li');
    const countBefore = taskList.children.length;
    app.deleteTask(task);
    assertEqual(taskList.children.length, countBefore - 1, 'Task should be removed');
});

// ============================================
// Task 4 Tests: Event Handling
// ============================================
console.log('\n--- Task 4: Event Handling ---');
resetDOM();

test('handleAddClick should add task from input', () => {
    resetDOM();
    const input = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    input.value = 'Click Added Task';
    const initialCount = taskList.children.length;
    app.handleAddClick();
    assertEqual(taskList.children.length, initialCount + 1, 'Task should be added on click');
});

test('handleInputKeypress should add task on Enter', () => {
    resetDOM();
    const input = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    input.value = 'Enter Added Task';
    const initialCount = taskList.children.length;
    const enterEvent = new dom.window.KeyboardEvent('keypress', { key: 'Enter' });
    app.handleInputKeypress(enterEvent);
    assertEqual(taskList.children.length, initialCount + 1, 'Task should be added on Enter');
});

test('handleInputKeypress should not add task on other keys', () => {
    resetDOM();
    const input = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    input.value = 'Should Not Add';
    const initialCount = taskList.children.length;
    const spaceEvent = new dom.window.KeyboardEvent('keypress', { key: ' ' });
    app.handleInputKeypress(spaceEvent);
    assertEqual(taskList.children.length, initialCount, 'Task should not be added on other keys');
});

// ============================================
// Task 5 Tests: Style Manipulation
// ============================================
console.log('\n--- Task 5: Style Manipulation ---');
resetDOM();

test('toggleDarkMode should add dark-mode class', () => {
    document.body.classList.remove('dark-mode');
    app.toggleDarkMode();
    assertTrue(document.body.classList.contains('dark-mode'), 'Should add dark-mode class');
});

test('toggleDarkMode should remove dark-mode class when present', () => {
    document.body.classList.add('dark-mode');
    app.toggleDarkMode();
    assertFalse(document.body.classList.contains('dark-mode'), 'Should remove dark-mode class');
});

test('highlightTasks should highlight matching tasks', () => {
    resetDOM();
    app.addTask('Buy groceries');
    app.addTask('Clean house');
    app.addTask('Buy milk');
    app.highlightTasks('Buy');
    const tasks = document.querySelectorAll('.task-item');
    let highlightedCount = 0;
    tasks.forEach(task => {
        if (task.classList.contains('highlighted')) highlightedCount++;
    });
    assertEqual(highlightedCount, 2, 'Two tasks should be highlighted');
});

test('highlightTasks should be case-insensitive', () => {
    resetDOM();
    app.addTask('Buy groceries');
    app.highlightTasks('buy');
    const task = document.querySelector('.task-item');
    assertTrue(task.classList.contains('highlighted'), 'Should match case-insensitively');
});

test('highlightTasks should remove highlight when term is empty', () => {
    resetDOM();
    app.addTask('Test Task');
    app.highlightTasks('Test');
    app.highlightTasks('');
    const task = document.querySelector('.task-item');
    assertFalse(task.classList.contains('highlighted'), 'Should remove highlight for empty term');
});

// Summary
console.log('\n========================================');
console.log(`Results: ${passed} passed, ${failed} failed`);
console.log(`Score: ${Math.round((passed / (passed + failed)) * 100)}%`);
console.log('========================================\n');

console.log('Note: This is your visible test score (40% of final grade).');
console.log('Make sure all tests pass before pushing to GitHub.\n');

if (failed > 0) {
    process.exit(1);
}
