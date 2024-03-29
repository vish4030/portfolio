
const text_tech =  document.querySelector('#text-tech');
const tech_arr = ['Frontend Developer', 'React Developer']
let flag = 0;
setInterval(()=>{
  text_tech.innerHTML = `${tech_arr[flag]} `
  flag ? flag=0 : flag=1;
},2000)


let projects = document.querySelector(".projects");
let project_arr = [{
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
    url:['https://vish4030.github.io/travel-booking/',"https://github.com/vish4030/travel-booking" ],
    img:"https://i.ibb.co/F7VJG7v/travel.png"
},
]
setTimeout(()=>{
  let projectBox="";
    project_arr.forEach((ele)=>{
    let box= `
      <div class='project-box'>
         <div class='img-box'>
           <img class='img-res' src='${ele.img}' alt='project-img' >
         </div>
         <ul class="flex justify-space-bet">
            <li>${ele.tech[0]}</li>
            <li>${ele.tech[1]}</li>
            <li>${ele.tech[2]}</li>
          </ul>
          <h3>${ele.name}</h3>
          <a href="${ele.url[0]}" target="_blank" class="btn">View website</a>
          <a href="${ele.url[1]}" target="_blank" class="btn">View Code</a>
       </div>`
       projectBox += `<div class='col-4 col-t-12'>${box}</div>`
       box="";
  })
  console.log(projectBox)
    projects.innerHTML +=  projectBox;
},1000)