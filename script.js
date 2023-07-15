//your JS code here. If required.
const selectEl = document.getElementById('colorSelect');
const btn = document.querySelector('form > input');
// console.log(selectEl, form);

btn.addEventListener('click', (e) => {
    // console.log('abc');
    // e.preventDefault();
    const options = selectEl.children;
    console.log(options);

    const filteredOptions = [];

    for(let option of options) {
        // console.log(option);
        if(!option.selected) filteredOptions.push(option);    
    }

    // options.filter(option => !option.selected);
    // console.log(filteredOptions);
    selectEl.innerHTML = filteredOptions.map(option => `<option>${option.outerText}</option>`).join();
})
