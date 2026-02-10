# Lab 5: DOM Manipulation and Events

**Course:** CSC4035 Web Programming and Technologies
**Estimated Time:** 2 hours
**Weight:** 1% of final grade

---

## Purpose

This lab teaches you to interact with web page elements using JavaScript. You will select elements, modify content and styles dynamically, and respond to user interactions with event handlers. These skills enable you to create interactive web applications.

---

## Learning Outcomes

By completing this lab, you will be able to:

1. Select DOM elements using `getElementById` and `querySelector`
2. Modify element content, attributes, and styles dynamically
3. Create and remove DOM elements programmatically
4. Attach event listeners and handle user interactions
5. Implement event delegation for dynamic content
6. Toggle CSS classes for visual effects (dark mode)

---

## Setup

1. Clone this repository
2. Install dependencies: `npm install jsdom`
3. Open `index.html` in a browser to test manually
4. Complete the functions in `app.js`
5. Run tests with `npm test`

---

## Files

| File | Description |
|------|-------------|
| `index.html` | HTML structure for the Task Manager |
| `styles.css` | CSS styles including dark mode |
| `app.js` | **Your code goes here** - Complete the TODO sections |
| `tests/visible/tests.js` | Automated tests (do not modify) |

---

## Tasks

### Task 1: Element Selection (15 minutes)

Complete the element selection variables at the top of `app.js`:
- Use `document.getElementById()` to select each element by its ID
- Elements needed: task input, add button, task list, counter, dark mode button, search input, error message

### Task 2: Content Modification (20 minutes)

Implement these functions:
- `updateCounter(count)` - Update the task counter display text
- `clearInput()` - Clear the task input field
- `showError(message)` - Display an error message temporarily

### Task 3: Element Creation (30 minutes)

Implement these functions:
- `createTaskElement(taskText)` - Create and return a new task `<li>` element
- `addTask(taskText)` - Add a new task to the list
- `deleteTask(taskElement)` - Remove a task from the list

### Task 4: Event Handling (30 minutes)

Implement these handler functions:
- `handleAddClick()` - Handle add button click
- `handleInputKeypress(event)` - Handle Enter key in input
- `handleTaskListClick(event)` - Handle delete button clicks (event delegation)
- `handleTaskDoubleClick(event)` - Handle double-click to mark complete

Then uncomment the event listener setup code in Task 6.

### Task 5: Style Manipulation (15 minutes)

Implement these functions:
- `toggleDarkMode()` - Toggle dark mode on/off
- `highlightTasks(term)` - Highlight tasks matching search term

---

## Running Tests

```bash
npm test
```

You should see output showing which tests pass (PASS) and fail (FAIL).

---

## Testing in Browser

1. Open `index.html` in your browser
2. Test each feature:
   - Add tasks using the button and Enter key
   - Delete tasks using the X button
   - Double-click tasks to mark complete
   - Toggle dark mode
   - Search to highlight matching tasks

---

## Grading

| Component | Weight |
|-----------|--------|
| Visible Tests | 40% |
| Hidden Tests | 30% |
| Code Quality | 20% |
| Academic Integrity | -10% if flagged |

### Visible Tests (This Lab)

The tests in `tests/visible/tests.js` run on every push. These cover basic functionality for each function.

### Hidden Tests

Additional tests run after the deadline covering:
- Edge cases (empty inputs, special characters)
- Event handling edge cases
- Performance with many tasks
- Code style and best practices

---

## Submission

1. Complete all functions in `app.js`
2. Ensure `npm test` passes
3. Test manually in browser
4. Commit and push your changes
5. Check the Actions tab for test results

```bash
git add .
git commit -m "Complete Lab 5"
git push
```

---

## Tips

- Use `document.getElementById()` for single elements
- Use `element.classList.add/remove/toggle()` for class manipulation
- Use `element.closest('li')` to find parent elements in event handlers
- Use `event.target` to get the element that triggered an event
- Event delegation: attach one listener to parent, check target in handler

---

## Resources

- [MDN DOM Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [MDN Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [MDN classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [MDN Event Delegation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation)

---

## Academic Integrity

- **Allowed:** Course materials, MDN, W3Schools
- **Allowed:** Discussing concepts with classmates
- **NOT Allowed:** Copying code from others
- **NOT Allowed:** Using AI to generate solutions
- **NOT Allowed:** Using jQuery or other libraries (pure JavaScript only)

All submissions are checked with plagiarism detection tools.
