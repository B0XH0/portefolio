export function config(){
const form = document.getElementById('form');
const result = document.getElementById('result');

const apiKey = '9bd7fab5-9c61-4830-bb23-701f207074f0';

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  object.access_key = apiKey; 
  const json = JSON.stringify(object);
  
  result.innerHTML = "Attendez...";

  fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: json
  })
  .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
          result.innerHTML = "Votre message à été envoyez";
          result.style.color = "green";
      } else {
          console.log(response);
          result.innerHTML = json.message;
      }
  })
  .catch(error => {
      console.log(error);
      result.innerHTML = "OOPS! Un problème est apparue!";
      result.style.color = "red";
  })
  .then(function() {
      form.reset();
      setTimeout(() => {
          result.style.display = "none";
      }, 3000);
  });
});
}