# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Github](https://github.com/graficdoctor/fe-24-003-age-calculator-app)
- Live Site URL: [Deployed on Netlify](https://cheerful-squirrel-f1af5a.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```html
<input
	onkeypress="return (event.charCode == 8 || (event.charCode >= 48 && event.charCode <= 57))"
/>
```

- [How to make HTML input tag only accept numerical values?](https://stackoverflow.com/questions/13952686/how-to-make-html-input-tag-only-accept-numerical-values)
- This code allows only numeric input (0-9) and allows the backspace key (charCode 8).

Let's break down the condition:

- `event.charCode != 8`: This part ensures that the backspace key is allowed (charCode 8).
- `(event.charCode >= 48 && event.charCode <= 57)`: This part checks if the key pressed is a numeric key (0-9) based on ASCII values.

```js
const yearsDifference = dateDifference.getFullYear() - 1970;
const monthsDifference = dateDifference.getMonth();
const daysDifference = dateDifference.getDate() - 1;
```

- The `-1970` adjustment is necessary because the `getYear()` or `getFullYear()` method returns the year minus 1900. In JavaScript, the Date object represents years as the number of years since 1900. So, when you calculate the difference in years using `dateDifference.getFullYear() - 1970`, it adjusts for the fact that the year returned by `getFullYear()` is relative to 1900. The subtraction of 1970 corrects for this offset, ensuring that you get the actual difference in years.

For example, if `getYear()` returns 122, it corresponds to the year 2022 (since 1900). Therefore, `dateDifference.getFullYear()` - 1970 would give you 2022 - 1970 = 52, which is the correct difference in years.

- Subtract 1 from `getDate()` since it returns the day of the month (1-31), and you want the days difference.

### Continued development

I'm not too comfortable working with Date in JavaScript. I definitely need to do more reading and more practice on this subject. Same goes for form validation. I still have trouble writing the JavaScript necessary.
What I still need to implement here is: an alert-message only showing up underneath the input-box with the wrong value. _I'll get back to this later_

## Author

- Website - [Katrien Schuermans](https://www.katriens.be)
- Frontend Mentor - [@graficdoctor](https://www.frontendmentor.io/profile/graficdoctor)
- Twitter - [@graficdoctor](https://www.twitter.com/graficdoctor)
