import { Project, Skill, db } from "./model.js";

console.log('Syncing Database...')
await db.sync({ force: true })

console.log('Seeding Database...')

const Checkr = await Project.create({
    projectName: "Checkr",
    projectDesc: "A collaborative 'To-Do List' application seamlessly integrates your personal and professional tasks. Each list is filled with rewarding activities completing tasks earns you points, accompanied by delightful incentives such as captivating cat photos or engaging short stories. To add a touch of fun, the application even includes a game of snake.",
    projectGit: "https://github.com/paulG1218/DM-Project3.git",
})

const VehicleLog = await Project.create({
    projectName: "Vehicle Log",
    projectDesc: "A React application tailored for car enthusiasts. Easily log in or create an account, manage vehicle details, create new entries, and track modifications and maintenance history effortlessly. The app ensures a secure experience with authentication, user-friendly vehicle creation, and convenient logout functionality",
    projectGit: "https://github.com/JacobFoote01/Project-2.git",
})

const TaskList = await Project.create({
    projectName: "Task List",
    projectDesc: "an intuitive to-do list equipped with seamless features. With an 'Add' button for new entries, an 'Edit' button for modifications, and a 'Remove' button for deletions, organizing tasks is a breeze. Task and estimated time inputs further enhance the experience, providing a user-friendly interface for efficient task management",
    projectGit: "https://github.com/JacobFoote01/task_list.git",
})

const React = await Skill.create({
    skillName: "React",
    skillLogo: ""
})