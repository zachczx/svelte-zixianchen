/**
 * @function changeDateFormat - change dates from dd-mm-yyy to dd mmm yyy
 * @param {Date} date - from .md file in date format
 */
export default function changeDateFormat(date) {
	let objectDate = new Date(date);

	let day = objectDate.getDate();

	let month = objectDate.getMonth();
	const monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const adjustedMonth = monthsList[month];

	let year = objectDate.getFullYear();

	return `${day} ${adjustedMonth} ${year}`;
}
