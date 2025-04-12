# ✅ TodoList App

A clean and functional to-do list app to help you manage daily tasks. Includes full CRUD operations and a "mark as done" feature that prevents editing completed items. Uses `json-server` to simulate a REST API with local data.

## ✨ Features

- ➕ Add new to-do items
- ✏️ Edit existing tasks (only if not completed)
- 🗑️ Delete tasks
- ☑️ Check/uncheck tasks as done
- 🚫 Prevent editing of tasks once they’re marked as done
- 📦 Data stored locally via `json-server`

## 🖼️ Screenshots
- [Mainpage](./image/todolist-app%20homepage.JPG)

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [json-server](https://www.npmjs.com/package/json-server) for mock REST API

 You can install `json-server` globally if you haven’t already:
```console
    npm install -g json-server
```

### Installation

1. **Clone the repository:**
```console
   git clone https://github.com/Manabe7/react-practice-todolist.git
   cd my-vue-app
```
2. **Install dependencies:**
```console
    npm install
```
3. **Start the JSON Server:**
```console
    npx json-server -p 3500 -w data/db.json 
```
4. **Start the Vite development server:**
```console
    npm run dev
```

🖱️ Usage
- Add a task using the input field and "Add" button.

- Click the checkbox to mark a task as complete/incomplete.

- Completed tasks cannot be edited.

- Delete tasks using the "Delete" button.

- All data is persisted using the local mock API.

🛠 Tech Stack
- React

- JavaScript

- json-server

- CSS