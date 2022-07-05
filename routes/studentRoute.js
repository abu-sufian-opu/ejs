const express = require('express');
const { getallStudents, createStudent, showStudentform, getsingleStudent, deleteStudent, showStudentEditForm, updateStudent } = require('../controlers/studentControler');
const router = express.Router();
const multer = require('multer');
const path = require('path');


//multer configaration
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb( null, path.join(__dirname, '../assets/upload/'));
    },
    filename : (req, file, cb) => {
        cb( null, Date.now() + '_' + file.originalname );
    }
});

//Load Multer
const studentMulter = multer({
    storage : storage
}).single('photo')


//Student Routes
router.get('/create', showStudentform);
router.get('/', getallStudents);
router.post('/', studentMulter, createStudent);
router.get('/:id', getsingleStudent);
router.get('/edit/:id', showStudentEditForm);
router.post('/edit/:id', studentMulter, updateStudent);
router.get('/delete/:id', deleteStudent);



//Export Router
module.exports = router;