const calcDay = document.getElementById('calc-days');
const calcMonth = document.getElementById('calc-months');
const calcYear = document.getElementById('calc-years');
const calcBtnEl = document.getElementById('calc-button');
const form = document.getElementById('form-container');
const alertAllTextEl = document.querySelectorAll('.alert-text');
const formInputAllEl = document.querySelectorAll('.form-input');

document.getElementById('calc-button').addEventListener('click', function () {
	let day = parseInt(document.getElementById('day').value.trim());
	let month = parseInt(document.getElementById('month').value.trim());
	let year = parseInt(document.getElementById('year').value.trim());

	const validationResult = validateAllDateOptions(year, month, day);

	if (validationResult.isValid) {
		const inputDate = new Date(year, month - 1, day);
		const currentDate = new Date();

		const difference = currentDate - inputDate;

		const yearsDifference = new Date(difference).getFullYear() - 1970;
		const monthsDifference = new Date(difference).getMonth();
		const daysDifference = new Date(difference).getDate() - 1;

		calcDay.textContent = daysDifference;
		calcMonth.textContent = monthsDifference;
		calcYear.textContent = yearsDifference;
		resetAlerts();
		form.reset();
	} else {
		alertAllTextEl.forEach((element) => {
			element.textContent = validationResult.message;
			element.style.visibility = 'visible';
		});

		formInputAllEl.forEach((element) => {
			element.classList.add('alert');
		});
	}
});

function validateAllDateOptions(year, month, day) {
	let message = '';

	if (isNaN(day) || isNaN(month) || isNaN(year)) {
		message = 'This field is required.';
		return { isValid: false, message };
	}

	if (!validateDate(year, month, day)) {
		message = 'Must be a valid date';
		return { isValid: false, message };
	}

	return { isValid: true, message };
}

function validateDate(year, month, day) {
	const inputDate = new Date(year, month - 1, day);

	return (
		inputDate.getFullYear() === year &&
		inputDate.getMonth() === month - 1 &&
		inputDate.getDate() === day
	);
}

function resetAlerts() {
	alertAllTextEl.forEach((element) => {
		element.textContent = '';
		element.style.visibility = 'hidden';
	});

	formInputAllEl.forEach((element) => {
		element.classList.remove('alert');
	});
}
