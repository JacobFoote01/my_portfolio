import { Project, Skill } from "./model.js";

console.log('Syncing Database...')
await db.synch({ force: true })

console.log('Seeding Database...')

const Checkr = await Project.create({
    projectName: "Checkr",
    projectDesc: "This innovative collaborative 'To-Do List' application seamlessly integrates your personal and professional tasks. Each list is filled with rewarding activities completing tasks earns you points, accompanied by delightful incentives such as captivating cat photos or engaging short stories. To add a touch of fun, the application even includes a nostalgic game of snake for your enjoyment.",
    projectGit: "https://github.com/paulG1218/DM-Project3.git",
})

const VehicleLog = await Project.create({
    projectName: "Vehicle Log",
    projectDesc: "A React application tailored for car enthusiasts. Easily log in or create an account, manage vehicle details, create new entries, and track modifications and maintenance history effortlessly. The app ensures a secure experience with authentication, user-friendly vehicle creation, and convenient logout functionality",
    projectGit: "https://github.com/JacobFoote01/Project-2.git",
})

const TaskList = await Project.create({
    projectName: "Task List",
    projectDesc: "",
    projectGit: "https://github.com/JacobFoote01/task_list.git",
})