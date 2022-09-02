console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form has been submitted successfully!');
}

function catPhotoComp(evt) {
	evt.preventDefault();

	alert('Hey Sexy!')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('#catphoto')

img.addEventListener('mouseover', catPhotoComp)