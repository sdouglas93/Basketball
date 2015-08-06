//import the request module
var request = require('request');

request('http://foureyes.github.io/csci-ua.0480-fall2014-002/homework/02/2014-06-15-heat-spurs.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    finalFunction(body); 
  }
})

var request1 = require('request');
request1('http://foureyes.github.io/csci-ua.0480-fall2014-002/homework/02/2014-04-09-thunder-clippers.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    finalFunction(body); 
  }
})

var finalFunction=function(game){
//store all the information into a variable
//var basketballData=[{"position": "F", "freeThrowsAttempted": 9, "defensiveRebounds": 9, "offensiveRebounds": 1, "threesMade": 3, "turnovers": 1, "freeThrowsMade": 8, "assists": 5, "threesAttempted": 9, "fieldGoalsMade": 10, "fieldGoalsAttempted": 21, "name": "L. James", "steals": 0, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 2, "offensiveRebounds": 0, "threesMade": 1, "turnovers": 0, "freeThrowsMade": 0, "assists": 1, "threesAttempted": 2, "fieldGoalsMade": 1, "fieldGoalsAttempted": 2, "name": "R. Lewis", "steals": 0, "team": "Heat"}, {"position": "C", "freeThrowsAttempted": 2, "defensiveRebounds": 7, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 1, "assists": 2, "threesAttempted": 5, "fieldGoalsMade": 6, "fieldGoalsAttempted": 14, "name": "C. Bosh", "steals": 1, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 4, "defensiveRebounds": 3, "offensiveRebounds": 0, "threesMade": 1, "turnovers": 3, "freeThrowsMade": 2, "assists": 1, "threesAttempted": 2, "fieldGoalsMade": 4, "fieldGoalsAttempted": 12, "name": "D. Wade", "steals": 0, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 2, "defensiveRebounds": 4, "offensiveRebounds": 1, "threesMade": 1, "turnovers": 4, "freeThrowsMade": 2, "assists": 2, "threesAttempted": 3, "fieldGoalsMade": 1, "fieldGoalsAttempted": 8, "name": "R. Allen", "steals": 1, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 0, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 1, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 0, "fieldGoalsAttempted": 0, "name": "S. Battier", "steals": 1, "team": "Heat"}, {"position": "C", "freeThrowsAttempted": 0, "defensiveRebounds": 5, "offensiveRebounds": 1, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 0, "fieldGoalsAttempted": 1, "name": "C. Andersen", "steals": 1, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 2, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 2, "assists": 1, "threesAttempted": 1, "fieldGoalsMade": 0, "fieldGoalsAttempted": 2, "name": "N. Cole", "steals": 0, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 1, "fieldGoalsAttempted": 2, "name": "U. Haslem", "steals": 0, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 3, "defensiveRebounds": 1, "offensiveRebounds": 2, "threesMade": 0, "turnovers": 1, "freeThrowsMade": 1, "assists": 1, "threesAttempted": 0, "fieldGoalsMade": 4, "fieldGoalsAttempted": 7, "name": "M. Beasley", "steals": 0, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 5, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 4, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 2, "fieldGoalsAttempted": 3, "name": "M. Chalmers", "steals": 1, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 1, "fieldGoalsMade": 0, "fieldGoalsAttempted": 1, "name": "J. Jones", "steals": 0, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 1, "turnovers": 0, "freeThrowsMade": 0, "assists": 1, "threesAttempted": 2, "fieldGoalsMade": 1, "fieldGoalsAttempted": 2, "name": "T. Douglas", "steals": 0, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 6, "defensiveRebounds": 8, "offensiveRebounds": 2, "threesMade": 3, "turnovers": 3, "freeThrowsMade": 5, "assists": 2, "threesAttempted": 4, "fieldGoalsMade": 7, "fieldGoalsAttempted": 10, "name": "K. Leonard", "steals": 1, "team": "Spurs"}, {"position": "F", "freeThrowsAttempted": 6, "defensiveRebounds": 6, "offensiveRebounds": 2, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 4, "assists": 2, "threesAttempted": 0, "fieldGoalsMade": 5, "fieldGoalsAttempted": 10, "name": "T. Duncan", "steals": 0, "team": "Spurs"}, {"position": "C", "freeThrowsAttempted": 0, "defensiveRebounds": 8, "offensiveRebounds": 1, "threesMade": 1, "turnovers": 2, "freeThrowsMade": 0, "assists": 6, "threesAttempted": 3, "fieldGoalsMade": 2, "fieldGoalsAttempted": 7, "name": "B. Diaw", "steals": 1, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 2, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 1, "freeThrowsMade": 0, "assists": 2, "threesAttempted": 3, "fieldGoalsMade": 0, "fieldGoalsAttempted": 5, "name": "D. Green", "steals": 2, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 2, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 2, "assists": 2, "threesAttempted": 1, "fieldGoalsMade": 7, "fieldGoalsAttempted": 18, "name": "T. Parker", "steals": 0, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 5, "defensiveRebounds": 4, "offensiveRebounds": 0, "threesMade": 3, "turnovers": 2, "freeThrowsMade": 4, "assists": 4, "threesAttempted": 6, "fieldGoalsMade": 6, "fieldGoalsAttempted": 11, "name": "M. Ginobili", "steals": 0, "team": "Spurs"}, {"position": "C", "freeThrowsAttempted": 2, "defensiveRebounds": 2, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 1, "assists": 2, "threesAttempted": 0, "fieldGoalsMade": 1, "fieldGoalsAttempted": 1, "name": "T. Splitter", "steals": 1, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 5, "turnovers": 0, "freeThrowsMade": 0, "assists": 2, "threesAttempted": 8, "fieldGoalsMade": 6, "fieldGoalsAttempted": 10, "name": "P. Mills", "steals": 0, "team": "Spurs"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 0, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 2, "threesAttempted": 0, "fieldGoalsMade": 0, "fieldGoalsAttempted": 0, "name": "M. Bonner", "steals": 0, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 2, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 1, "threesAttempted": 0, "fieldGoalsMade": 2, "fieldGoalsAttempted": 3, "name": "M. Belinelli", "steals": 0, "team": "Spurs"}, {"position": "C", "freeThrowsAttempted": 0, "defensiveRebounds": 0, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 1, "fieldGoalsAttempted": 1, "name": "J. Ayres", "steals": 0, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 0, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 1, "fieldGoalsMade": 0, "fieldGoalsAttempted": 2, "name": "C. Joseph", "steals": 0, "team": "Spurs"}, {"position": "F", "freeThrowsAttempted": 2, "defensiveRebounds": 0, "offensiveRebounds": 1, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 2, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 0, "fieldGoalsAttempted": 0, "name": "A. Baynes", "steals": 0, "team": "Spurs"} ]

// convert the String data into an actual JavaScript object
var data= JSON.parse(game);

var team1name = data[0].team;
var team2name='';

for(var i=0; i< data.length; i++){
	if(data[i].team != team1name){
		team2name = data[i].team;
	}
}

//calculate the final scores for the team1
var finalScoreTeam1=function(array,score){
	var total1=0;
	for(var i=0; i<array.length;i++){
		if(array[i].team===team1name){
			total1+= (array[i].threesMade*3);
			total1+= (array[i].fieldGoalsMade*2-(array[i].threesMade)*2);
			total1+=(array[i].freeThrowsMade);	
		}
	}
	return total1;
}

//calculate the final scores for the team2
var finalScoreTeam2=function(array,score){
	var total2=0;
	for(var i=0; i<array.length;i++){
		if(array[i].team===team2name){
			total2+= (array[i].threesMade*3);
			total2+= ((array[i].fieldGoalsMade)*2-(array[i].threesMade)*2);
			total2+=(array[i].freeThrowsMade);
		}
	}
	return total2;
}

//print out the total scores 
console.log("Final Score: ", team1name, finalScoreTeam1(data), ", ", team2name, finalScoreTeam2(data));
// print out 5 equal signs for the next line 
console.log("=====");

//create variables 
var count=0;
var findName=0;
//create a function that finds the name of the player with the higherst percentage
var highPercentage= function(array)
{
		var percentage= (array.threesMade/array.fieldGoalsMade);
			if(array.fieldGoalsMade>5){
			if(percentage>count){count=percentage;findName=data.indexOf(array);}}
}
// use for each method to loop 
data.forEach(highPercentage);
console.log("* Player with highest percentage of points from three pointers: "+data[findName].name);

//create variables to total rebounds
var totalRebounds=0;
var totalRebounds1=0;

//create a function that totals the rebounds
var mostRebounds=function(rebound)
{
	var numRebounds=rebound.offensiveRebounds+rebound.defensiveRebounds;
	
	if(rebound.team ==team1name){totalRebounds+=numRebounds;}
	else if(rebound.team ==team2name){totalRebounds1+=numRebounds;}
}
data.forEach(mostRebounds);

//see what teams has the most rebounds 
if(totalRebounds > totalRebounds1){console.log("* Team with the most rebounds: ",team1name + " with "+totalRebounds);}
if(totalRebounds1>totalRebounds){console.log("* Team with the most rebounds: ",team2name+ " with "+totalRebounds1);}


//create a function to filter out the non guards
var nonGuardPosition=function(guard){if(guard.position!="G"){return guard.position;}}

// filter the person who is not a guard 
var notGuard=data.filter(nonGuardPosition);

//create variables to tally up max points 
var assistPoints=0;
var maxNum=0;
var findPlayer=0;

//find the player with the most assists that is not a guard 
var maxAssists=function(guard){
	if(guard.assists>maxNum){ maxNum=guard.assists;findPlayer=notGuard.indexOf(guard);}
}

notGuard.forEach(maxAssists);

console.log("* Non guard player with most assists "+notGuard[findPlayer].name+" with "+maxNum);


var filterTurnovers=function(array)
{
var moreTurnovers=array.turnovers>array.assists
if(moreTurnovers){return moreTurnovers;}}

var filterNames=data.filter(filterTurnovers);

var name=function(playName){console.log("\t"+playName.name);}

console.log("* Players with more turnovers than assists: ");
filterNames.forEach(name);
console.log("");
}


