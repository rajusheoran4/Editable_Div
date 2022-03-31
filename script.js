// Out JavaScript Code for Editable Div


// Creating a div with javascript
let divElem = document.createElement('div');

// Styling the created div
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border: 2px solid #fff; margin:23px; padding:23px; width:auto;overflow:hidden;');

// Creating variable for storing text of editable div in the localStorage of your browser
let val = localStorage.getItem('text');
let text;
if (val == null) {

    text = document.createTextNode('This is my editable div. Click to edit it.');
}
else {
    text = document.createTextNode(val)
}

// Insert created text into editable div
divElem.appendChild(text);

// Grab the cotainer 
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');

// Insert the created div
container.insertBefore(divElem, first)

// Adding Click and Blur Event Listner on the editable div
divElem.addEventListener('click', function () {
    let noTextArea = document.getElementsByClassName('textarea').length;
    if (noTextArea == 0) {
        let html = elem.innerHTML;
        divElem.innerHTML = `<textarea class="textarea form-control" id="textarea" rows="3">${html}</textarea>`;
    }
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function () {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    })
})



// Editable Div By Geeks Help (www.geekshelp.in)
