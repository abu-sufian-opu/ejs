const Student = require("../models/studentModel")


/**
 * @desc get all students data
 * @name Get /student
 * @access public
 */
const getallStudents = async (req, res) => {
    let students = await Student.find();
    res.render('index', {students});
}
/**
 * @desc get create student data
 * @name Get /student
 * @access public
 */
const getsingleStudent = async (req, res) => {
    let id = req.params.id;
    let singleData = await Student.findById(id);
    res.render('show', {singleData});
}
/**
 * @desc get create student data
 * @name Get /student
 * @access public
 */
const showStudentform = (req, res) => {
    res.render('create')
}
/**
 * @desc get create student data
 * @name Get /student
 * @access public
 */
const createStudent = (req, res) => {
    //store data to DB
    Student.create({
        ...req.body,
        photo : req.file.filename
    });

    //redirect to home page
    res.redirect('/student');
}
/**
 * @desc get edit student form data
 * @name Get /student
 * @access public
 */
const showStudentEditForm = async (req, res) => {
    
    let singleStudent = await Student.findById(req.params.id);

    res.render('edit', {singleStudent});
}

/**
 * @desc update student data
 * @name Get /student
 * @access public
 */
const updateStudent = async (req, res) => {
    let id = req.params.id;

    let fileName = 'req.body.old_photo';

    if (req.file) {
        fileName = req.file.filename
    }else{
        
    }
    await Student.findByIdAndUpdate( id, {
        ...req.body,
        photo : fileName
    }, {
        new : true
    });

    //redirect to home page
    res.redirect('/student');
}

/**
 * @desc get create student data
 * @name Get /student
 * @access public
 */
const deleteStudent = async (req, res) => {
    let id = req.params.id;
    await Student.findByIdAndDelete(id);

    //redirect to home page
    res.redirect('/student');
}

//exports Controler
module.exports = {
    getallStudents,
    createStudent,
    showStudentform,
    getsingleStudent,
    showStudentEditForm,
    updateStudent,
    deleteStudent
}