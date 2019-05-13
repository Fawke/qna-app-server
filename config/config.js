module.exports = {
	GOOGLE_CLIENT_ID: '884723337264-71295so6udlsd5f4bpoe4tfumfdhpblt.apps.googleusercontent.com',
	GOOGLE_CLIENT_SECRET: 'KH3iuU2OvdrOl9ULk9vTf-mz',
	GOOGLE_CALLBACK_URL: 'http://localhost:8080/api/v1/auth/google/callback',
	MONGODB_DBNAME: 'qna-app',
	MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017',
	PORT: process.env.PORT || 8080,
	SECRET_KEY: '0987654321POIUYTREWQ'
}
