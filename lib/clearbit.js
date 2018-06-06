const authorizationi = "Bearer sk_bd5aa3403ef67f9661b7027af4bb0ba5";
// TODO

const mail = document.getElementById("clearbitEmail")
const form = document.getElementById('clearbitForm')
const fullname = document.getElementById('userName')
const email = document.getElementById('userEmail')
const bio = document.getElementById('userBio')
const location = document.getElementById('userLocation')

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const urul = `https://person-stream.clearbit.com/v2/combined/find?email=${mail.value}`
	fetch(urul, { headers: { Authorization: authorizationi } })
	.then(response => response.json())
	.then((data) => {

		fullname.innerText = data.person.name.fullName
		email.innerText = data.person.email
		bio.innerText = data.person.bio
		location.innerText = data.person.location


	});
})