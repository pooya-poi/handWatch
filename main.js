const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
const digit = document.querySelector('#digital')
const year = document.querySelector('.year')
const month = document.querySelector('.month')
const weekday = document.querySelector('.weekday')
// const monthName = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
setInterval(() => {

	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * deg;
	let ss = day.getSeconds() * deg;


	let h = day.getHours();
	let m = day.getMinutes();
	let s = day.getSeconds();
	let Y = day.getFullYear();
	let M = day.getMonth();
	let D = day.getDate();

	console.log(day)


	digit.innerHTML = h + ":" + m + ":" + s;

	year.innerHTML = Y
	month.innerHTML = monthName[M]
	weekday.innerHTML = D

	hr.style.transform = `rotatez(${(hh) + (mm / 12)}deg)`;
	mn.style.transform = `rotatez(${(mm)}deg)`;
	sc.style.transform = `rotatez(${(ss)}deg)`;
})

