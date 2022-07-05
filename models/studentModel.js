const mongoose = require('mongoose');


//Student data Schema

const studentSchema = mongoose.Schema({
    name    : {
        type : 'String',
        required : [true, 'name field is required'],
        trim    : true
    },
    email    : {
        type : 'String',
        required : [true, 'email field is required'],
        trim    : true,
        unique  : true
    },
    cell    : {
        type : 'String',
        required : [true, 'cell field is required'],
        trim    : true,
        unique  : true
    },
    photo    : {
        type : 'String',
        default : 'avatar.png'
    }
},{
    timestamps : true
});

//export Model

module.exports = mongoose.model('Student', studentSchema);