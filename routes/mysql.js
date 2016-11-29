var mysql = require('mysql');

function getConnection(){
	var connection = mysql.createConnection({
		  host     : 'localhost',
		  user     : 'root',
		  password : 'root',
		  database : 'finalproject226',
		  port : 3306
		});
	return connection;
}
//getting driver details
exports.executeQuery = function(query, callback){
	console.log("In execute query - "+ query);
	var connection = getConnection();
	if(connection){
		connection.query(query, function(err, results) {
			if (err) {
				console.log("Error "+err);
			//	connection.end();
				callback(err, null );
				return;
			}
			//connection.d
			callback(false, results);
		})
	}
	else{
		console.log("Unable to get SQL connection");
		callback(true, null);
	}
};