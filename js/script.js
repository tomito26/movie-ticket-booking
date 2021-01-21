 var swiper = new Swiper(".swiper-container", {
   slidesPerView: 6.2,
   spaceBetween: 30,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
 });
// business logic
function Tickets(name,timeOfDay,age){
    this.name = name;
    this.timeOfDay = timeOfDay;
    this.age = age;
}

let form = document.getElementById("addForm");
form.addEventListener("submit",watchMovie);

function watchMovie(e){
  e.preventDefault()
  let movieName = document.getElementById("movieName");
  console.log(movieName.value)
}