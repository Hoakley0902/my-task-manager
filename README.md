# My Task Manager

**Stay organized, one task at a time.**

A responsive task manager built with HTML, CSS, and vanilla JavaScript. Organize tasks by priority and category, track deadlines, and monitor your progress.

I built this project to strengthen my JavaScript fundamentals by connecting task data, user interactions, and a dynamically updated interface.

## Features

| Feature | What it does |
| --- | --- |
| Task management | Add tasks, mark them complete or incomplete, and delete them. |
| Priorities | Assign Low, Medium, or High priority and update it after creating a task. |
| Categories | Organize tasks into Personal, Work, or Learning and filter the displayed list. |
| Due dates | Add an optional deadline and automatically sort tasks by date, with undated tasks last. |
| Overdue indicators | Identify unfinished tasks with due dates before today. |
| Progress tracking | View total, displayed, completed, remaining, and overdue task counts, plus a completion percentage and progress bar. |
| Saved tasks | Keep tasks and their changes between page refreshes using browser storage. |
| Responsive interface | Use a layout that adjusts to smaller screens, with wrapping text and controls. |

The category filter changes the displayed task list and “Tasks shown” count. The other progress statistics describe all saved tasks.

## Built With

- **HTML** — page structure, forms, labels, and native controls.
- **CSS** — layout, task cards, responsive styling, and visible focus indicators.
- **JavaScript** — task data, event handling, filtering, sorting, and progress calculations.
- **localStorage** — browser-based persistence using JSON.

## Run Locally

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Install the Live Server extension if needed.
4. Right-click `index.html` and select **Open with Live Server**.

No build step is required.

## Project Files

| File | Purpose |
| --- | --- |
| `index.html` | Task form, progress overview, category filter, and task list container. |
| `style.css` | Page styling, responsive layout, and focus states. |
| `script.js` | Task operations, rendering, storage, and calculations. |
| `README.md` | Project overview, setup instructions, and testing notes. |

## Testing

Manual checks completed during development:

- Empty task names trigger the browser’s required-field message.
- Long task text wraps within its card.
- Tasks can be added without a due date.
- Adding, completing, changing priorities, and deleting tasks update the interface.
- Saved task changes remain after refreshing the page.
- Category filtering and due-date sorting work together.
- Progress counts, completion percentage, and the progress bar update with task changes.
- The layout works at phone-sized browser widths.
- Controls can be navigated and operated with a keyboard, with visible focus indicators.

## What I Learned

This project gave me practice with:

- Writing functions and using parameters and return values.
- Creating page elements and responding to user events.
- Working with arrays and objects using `forEach`, `filter`, `sort`, and `splice`.
- Keeping task data and the displayed interface in sync.
- Saving and loading data with JSON and localStorage.
- Building responsive layouts and using labels, native controls, and focus styles.
- Testing edge cases and tracking changes with Git.

## Data Storage

Tasks are stored in the current browser for the current site address.

They do not sync between devices or browsers. Tasks created while running the app locally will not automatically appear on the deployed website. Clearing the website’s browser storage removes its saved tasks.

## Live Demo

[Open My Task Manager](https://haley-task-manager.netlify.app/)