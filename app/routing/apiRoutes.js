// LOAD DATA
var friendsData = require("../data/friends");

// ROUTING
module.exports = function (app) {

    // API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // API POST Requests
    app.post("/api/friends", function (req, res) {

        var newUser = req.body.scores;
        // console.log("NEW USER " + newUser)

        var scoresArray = [];
        var bestMatch = 0;


        // Compute best match

        for (var i = 0; i < friendsData.length; i++) {
            var difference = 0;
            var currentFriend = friendsData[i]
            console.log("FRIEND", currentFriend)
            for (var j = 0; j < currentFriend.scores.length; j++) {
                // var currentFriendScore = currentFriend.scores[j];
                // console.log("CURRENT " + currentFriendScore);
                // var newUserScores = newUser.scores[j];
                // console.log("NEW " + newUserScores )
                difference += Math.abs((newUser[j] - currentFriend.scores[j]));
                console.log("DIFF " + difference)
            }

            console.log("FINAL RESULT " + difference); // print final result #

            // Push results into scoresArray
            scoresArray.push(difference);
        }

        // After all friends are compared, find the best match
        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }

        // Return bestMatch data
        var theMatch = friendsData[bestMatch];
        res.json(theMatch);

        // Pushes new submission into the friendsData array/friends
        friendsData.push(req.body);

    });
};


