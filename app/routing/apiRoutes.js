var bodyParser = require('body-parser');
var path = require('path');

var friends = require('../data/friends.js');

module.export = function(app){

    app.get('/api/friends', function(req, res){
        result.JSON(friends);
    });

    app.post("/api/friends", function(req, res){
        var you = req.body;
        var newFriend = -1;
        var newFriendScore = 100;
        var currentFriendScore = 0;

        for (i = 0; i < friendsTable.length; i++){

            if (you.sex != friends[i].sex){
                for (j = 0; j < you.scores.length; j++){
                    currentFriendScore = currentFriendScore + Math.abs(friends[i].scores[j] - you.scores[j]);
                }

                if (currentFriendScore <= newFriendScore){
                    newFriend = i;
                    newFriendScore = currentFriendScore;
                }

                currentFriendScore = 0;
            }
        }

        friends.push(you);
        newFriendDetails = friends[newFriend];
        results.JSON(newFriendDetails);
    })
};