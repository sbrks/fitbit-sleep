d3.csv('data/01_july2015.csv', function(d) {
	return {
		date : d.Date,
		calories_burned : d["Calories Burned"],
		steps : d.Steps,
		distance : d.Distance,
		floors : d.Floors,
		activity_calories : d["Activity Calories"]
	};
}, function(data) {
	console.log(data[0]);
	});


d3.csv('data/02_august2015.csv', function(d) {
	return {
		date : d.Date,
		calories_burned : d["Calories Burned"],
		steps : d.Steps,
		distance : d.Distance,
		floors : d.Floors,
		activity_calories : d["Activity Calories"]
	};
}, function(data) {
	console.log(data[0]);
});

d3.csv('data/03_september2015.csv', function(d) {
	return {
		date : d.Date,
		calories_burned : d["Calories Burned"],
		steps : d.Steps,
		distance : d.Distance,
		floors : d.Floors,
		activity_calories : d["Activity Calories"]
	};
}, function(data) {
	console.log(data[0]);
	});