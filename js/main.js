
const text_tech =  document.querySelector('#text-tech');
const tech_arr = ['Frontend Developer', 'React Developer']
let flag = 0;
setInterval(()=>{
  text_tech.innerHTML = `${tech_arr[flag]} `
  flag ? flag=0 : flag=1;
},2000)


let projects = document.querySelector(".projects");
let project_arr = [
{
    name:"Bus Ticket Booking",
    tech:['React', 'Express', 'Mongodb'],
    url:['https://ticketbook1.netlify.app/',"https://github.com/vish4030/BusTicket" ],
    img:"https://i.ibb.co/xshFh8r/bus-Ticket.png"
},
{
    name:"Food Ordering Website",
    tech:['React', 'Express', 'Mongodb'],
    url:['https://foodvilla4030.netlify.app/',"https://github.com/vish4030/foodvilla" ],
    img:"https://i.ibb.co/0nSk7QS/foodvilla.png"
},
{
    name:"Data Visualization",
    tech:['React', 'Express', 'Mongodb'],
    url:['https://data-visualization4030.netlify.app/',"https://github.com/vish4030/visualization_dashboard" ],
    img:"https://i.ibb.co/Cw0pw5C/data-visualization.png"
},
{
    name:"Travel booking",
    tech:['HTML', 'CSS', 'JavaScript'],
    url:['https://vish4030.github.io/travelBooking/',"https://github.com/vish4030/travelBooking/" ],
    img:"https://i.ibb.co/F7VJG7v/travel.png"
},
{
  name:"Food Recipe Search",
  tech:['HTML', 'CSS', 'JavaScript'],
  url:['https://vish4030.github.io/foodRecipe/', 'https://github.com/vish4030/foodRecipe'],
  img:"https://i.ibb.co/3pMMHDj/food-Recipe.png"
},
{
  name:"Website Template",
  tech:['HTML', 'CSS', 'JavaScript'],
  url:['https://vish4030.github.io/website-templet/', 'https://github.com/vish4030/website-templet'],
  img:"https://i.ibb.co/zmcNnqT/website-templete.png"
}

]
setTimeout(()=>{
  let projectBox="";
    project_arr.forEach((ele)=>{
    let box= `
      <div class='project-box'>
         <div class='img-box'>
           <img class='img-res' src='${ele.img}' alt='project-img' >
         </div>
         <ul class="flex justify-evn">
            <li>${ele.tech[0]}</li>
            <li>${ele.tech[1]}</li>
            <li>${ele.tech[2]}</li>
          </ul>
          <h3>${ele.name}</h3>
          <a href="${ele.url[0]}" target="_blank" class="btn">View website</a>
          <a href="${ele.url[1]}" target="_blank" class="btn">View Code</a>
       </div>`
       projectBox += `<div class='col-4 col-t-12 mb'>${box}</div>`
       box="";
  })
  console.log(projectBox)
    projects.innerHTML +=  projectBox;
},1000)
