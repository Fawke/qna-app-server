const mongoose = require('mongoose');

const TagsSchema = mongoose.Schema({
	tagId: { type: Number, required: true },
	tagName: { type: String, required: true }
});

const NotificationSchema = mongoose.Schema({
	notificationId: { type: String, required: true, unique: true },
	questionId: { type: String, required: true },
	questionTitle: { type: String, requried: true },
	answerById: { type: String, required: true },
	answerByName: { type: String, required: true },
	userId: { type: Number, requird: true },
	read: { type: Boolean }
});

const UserSchema = mongoose.Schema({
	userId: { type: Number, reqruied: true, unique: true },
	userName: { type: String, required: true },
	profileImage: { type: String, required: true },
	tags: [TagsSchema],
	notifications: [NotificationSchema]
});

const UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;
