// Import ORM to interact with database constructor
var orm = require("../config/prm.js");

// constructor class for the burgers 
var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne : function(cols,vals,cb){
        orm.insertOne("burgers",objColVals,condition,function(res){
            cb(res);
        });
    },
    updateOne : function(condition,cb){
        orm.updateOne("burgers",condition,function(res){
            cb(res);
        });
    }
};

// Export database functions for controller
module.exports = burger;