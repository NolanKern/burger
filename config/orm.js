// Share created connection to mysql from connection.js
var connection = require('./connection.js');

// Helper function for SQL syntax
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}

	return arr.toString();
}
// obj for manipulating the sql database
var orm = {
    // for selecting all of the burgers
	selectAll: function(table, cb){
		var queryString = 'SELECT * FROM ' + table + ';';
		connection.query(queryString, function(err, result){
			if (err) throw err;
			cb(result);
		})
    },
    // when the user is adding a burger
	insertOne: function (table, burger_name, cb) {
		var queryString = "INSERT INTO " + table + " (burger_name) VALUES ('" + burger_name + "')";
		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
    },
    // when the user wishes to change a burger
	updateOne: function (table, objColVals, condition, cb) {
		var queryString = 'UPDATE ' + table;

		queryString += ' SET ';
		queryString += objToSql(objColVals);
		queryString +=' WHERE ';
		queryString += condition;
		console.log(condition);

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
};

module.exports = orm;