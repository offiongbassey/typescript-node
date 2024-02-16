import express from 'express';
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 3000;
import db from './models';
import { users } from './seeders/users';
import { projects } from './seeders/project';
import { projectAssignments } from './seeders/projectAssignments';

// const createProjectAssignments = () => {
//     projectAssignments.map((projectAssignment) => {
//         db.ProjectAssignment.create(projectAssignment)
//     })
// }

// createProjectAssignments();

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})