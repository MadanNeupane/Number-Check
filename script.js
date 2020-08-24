const form = document.getElementById('form');
const output = document.getElementById('output');
output.style.fontSize = '1.1em';


form.addEventListener('submit', e => {
    e.preventDefault();
    let input = form.querySelector('input');
    let user_input = input.value;
    if (user_input.length > 0) {
        showOutput(user_input);
    }
})


const number_pattern = /^(\+?977)?(\s?\-?\s?)?\d{8,10}$/
const ntc_pattern = /^(\+?977)?(\s?\-?\s?)?98[4-6]\d{7}$/
const ncell_pattern = /^(\+?977)?(\s?\-?\s?)?98[0-2]\d{7}$/
const smart_pattern = /^(\+?977)?(\s?\-?\s?)?(96[1-2]|988)\d{7}$/
const utl_pattern = /^(\+?977)?(\s?\-?\s?)?972\d{7}$/
const hello_pattern = /^(\+?977)?(\s?\-?\s?)?963\d{7}$/
const cdma_pattern = /^(\+?977)?(\s?\-?\s?)?97[4-5]\d{7}$/
const landline_pattern = /^(\+?977)?(\s?\-?\s?)?0?[1-9]\d{7}$/

const showOutput = (number) => {
    let result;

    if (number.match(number_pattern)) {
        if (number.match(ntc_pattern)) {
            result = "NTC"
        } else if (number.match(ncell_pattern)) {
            result = "Ncell";
        } else if (number.match(smart_pattern)) {
            result = "Smart Cell";
        } else if (number.match(utl_pattern)) {
            result = "UTL";
        } else if (number.match(hello_pattern)) {
            result = "Hello";
        } else if (number.match(cdma_pattern)) {
            result = "CDMA";
        } else if (number.match(landline_pattern)) {
            result = "Landline";

        } else {
            result = "valid number. But, it doesn't look like a registered Nepali";
        }
        output.innerHTML = `${number} is a <span style='color:#32ff7e'>${result}</span> phone number.`;
    } else if (Number.isInteger(Number(number))) {
        output.innerHTML = `<span style='color:#fed330'>It is not a Nepali phone number. Try again!</span>`;
    } else {
        result = "invalid"
        output.innerHTML = `<span style='color:#f1c40f'>${number} is ${result}. Please enter a valid phone number and try again.</span>`;
    }

}