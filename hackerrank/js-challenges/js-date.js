// https://www.hackerrank.com/challenges/js10-date/problem

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
	inputString += inputStdin;
});

process.stdin.on('end', _ => {
	inputString = inputString.trim().split('\n').map(string => {
		return string.trim();
	});

	main();    
});

function readLine() {
	return inputString[currentLine++];
}

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[(new Date(dateString)).getDay()];
    //return new Intl.DateTimeFormat('en-Us', {weekday:'long'}).format(date);
}


function main() {
	const d = +(readLine());

	for (let i = 0; i < d; i++) {
		const date = readLine();

		console.log(getDayName(date));
	}
}
