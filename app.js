const calcDay = document.getElementById('calc-days');
const calcMonth = document.getElementById('calc-months');
const calcYear = document.getElementById('calc-years');
const calcBtnEl = document.getElementById('calc-button');
const form = document.getElementById('form-container');
const alertAllTextEl = document.querySelectorAll('.alert-text');
const formInputAllEl = document.querySelectorAll('.form-input');

document.getElementById('calc-button').addEventListener('click', calculateAge);

function calculateAge() {
	let day = parseInt(document.getElementById('day').value.trim());
	let month = parseInt(document.getElementById('month').value.trim());
	let year = parseInt(document.getElementById('year').value.trim());

	// write a validateFunction and run the calculateAge ony when date is valid
	validateAllDateOptions(year, month, day);

	const inputDate = new Date(year, month - 1, day);
	const currentDate = new Date();

	const difference = currentDate - inputDate;

	const yearsDifference = new Date(difference).getFullYear() - 1970;
	const monthsDifference = new Date(difference).getMonth();
	const daysDifference = new Date(difference).getDate() - 1;

	calcDay.textContent = daysDifference;
	calcMonth.textContent = monthsDifference;
	calcYear.textContent = yearsDifference;

	form.reset();
}

function validateDate(year, month, day) {
	const inputDate = new Date(year, month - 1, day);

	return (
		inputDate.getFullYear() === year &&
		inputDate.getMonth() === month - 1 &&
		inputDate.getDate() === day
	);
}

function validateAllDateOptions(year, month, day) {
	if (day === '' || month === '' || year === '') {
		alertAllTextEl.forEach((element) => {
			element.textContent = 'This field is required.';
			element.style.visibility = 'visible';
		});
		formInputAllEl.forEach((element) => {
			element.classList.add('alert');
		});
		form.reset();
		return;
	}

	if (isNaN(day) || isNaN(month) || isNaN(year)) {
		alertAllTextEl.forEach((element) => {
			element.textContent = 'This field must be a number.';
			element.style.visibility = 'visible';
		});
		formInputAllEl.forEach((element) => {
			element.classList.add('alert');
		});
		form.reset();
		return;
	}

	const isValidDate = validateDate(year, month, day);

	if (!isValidDate) {
		alertAllTextEl[0].textContent = 'Must be a valid date';
		alertAllTextEl[0].style.visibility = 'visible';

		formInputAllEl.forEach((element) => {
			element.classList.add('alert');
		});
		return;
	}
}

// avoid repetition
// form reset
// add the correct error messages
// try to write it more concise
