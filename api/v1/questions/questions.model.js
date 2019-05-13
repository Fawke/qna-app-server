const mongoose = require('mongoose');

const AnswerSchema = mongoose.Schema({
    answerId: { type: String, required: true, unique: true },
    answerBody: { type: String, required: true },
    userId: { type: Number, required: true },
    // userName: { type: String, required: true }
});

const TagsSchema = mongoose.Schema({
    tagId: { type: Number, required: true },
    tagName: { type: String, required: true }
});

const QuestionSchema = mongoose.Schema({
    questionId: { type: Number, required: true, unique: true },
    questionTitle: { type: String, required: true},
    questionBody: { type: String, required: true },
    answers: [AnswerSchema],
    userId: { type: Number, requried: true }, 
    tags: [TagsSchema]
});

const QuestionModel = mongoose.model('Questions', QuestionSchema);
module.exports = QuestionModel;