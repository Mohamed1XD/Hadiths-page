alert('هذا الموقع تم صنعه خلال يومين وسيتم تطويره بإذن الله')
// document.getElementById('main').innerHTML = ''
// axios.get('https://api.hadith.gading.dev/books/')
//   .then(function(response) {
//   var res = response.data
//     // handle success
//     for (var i in res.data) {
//     var content = `
//     <p> ${res.data[i].name} </p>
//     `
//     document.getElementById('main').innerHTML += content
//     }
//   })
//   .catch(function(error) {
//     // handle error
//     console.log('the error is : '+ error);
//   })
function changePage() {
  document.location.pathname = "/hadiths.html"
}