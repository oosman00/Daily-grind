/*
    what we need to change
    Day of week - day
    Coffee Name - name
    Coffee pic  - pic
    Alt tag     - alt
    Coffee Description -desc
    Color for coffee    -color

*/

let myDate = new Date();
let myDay =""
let today = "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if(urlParams.has('day')){//use query sstring
    myDay = urlParams.get('day');
    myDay = parseInt(myDay)
}else{//use date object
    myDay = myDate.getDay();

}





function coffeeTemplate (coffee){
    let myReturn = "";
    
    myReturn = 
    `<img src=${coffee.pic} width="200px" height = "200px">    
    <p>
    <video style="align-self: center;" width="640" height="480" controls>
    <source src=${coffee.video} type="video/webm">
 </video>
   <strong id= "coffee-highlight" class="feature">${coffee.day}'s Coffee Special:</strong>
    ${coffee.day}'s song of the day is <strong>${coffee.name}"</strong>,
   ${coffee.desc}  <strong> link: </strong> <a href=${coffee.link}>youtube</a>
 

</p>`;
    return myReturn;


}
switch(myDay){

    
    case 1:
        today = "Monday";

        coffee = {
            color: "salmon",         
            name: "Dumb",         
            pic: "images/bubble-tea.jpg",         
            alt: "Daboii music video",         
            day: "Monday",         
            desc: `Popular Norcal rapper Daboii`,
            link:"//www.youtube.com/watch?v=DPyKx67a74w",
            video: "videos/daboii.mp4"
        };

    break;
 
case 2:
    today = "Tuesday";

    coffee = {
        color: "orange",
        name: "Back in Blood",
        pic: "images/caramel-latte.jpg",
        alt: "Pooh sheistys hit song",
        day: "Tuesday",
        desc: 'Pooh sheistys collab with Durkio!',
        link:"//www.youtube.com/watch?v=0-Tm65i96TY",
        video: "videos/pooh.mp4"
    };

break;   


case 3:
    today = "Wednesday";

    coffee = {
        color: "magenta",
        name: "FEAR",
        pic: "images/drip.jpg",
        alt: "A pic of drip coffee",
        day: "Wednesday",
        desc: 'Some days you just need the drip!',
        link:"//www.youtube.com/watch?v=jdbQYDkNjfk",
        video: "videos/FEAR..mp4"
    };

break;

case 4:
    today = "Thursday";

    coffee = {
        color: "pink",
        name: "Rio music song",
        pic: "images/frappaccino.jpg",
        alt: "Rio da og",
        day: "Thursday",
        desc: 'TURN YO SPEAKERS UP', 
        link: "//www.youtube.com/watch?v=JG1krsIolsQ",
        video: "videos/Rio.mp4"
    };

break;


case 5:
    today = "Friday";

    coffee = {
        color: "green",
        name: "Joey",
        pic: "images/Cappuccino.jpg",
        alt: "Joey bada$$ music video",
        day: "Friday",
        desc: `Joey's breakthrough song`,
        link: "//www.youtube.com/watch?v=N1yGG8jMSTI",
        video: "videos/Joey.mp4"
     };

break;     


case 6:
    today = "Saturday";

    coffee = {
        color: "Blue",
        name: "King Von",
        pic: "images/cold-brew.jpg",
        alt: "King Von latest album single",
        day: "Saturday",
        desc: `Popular song from Chicagos favorite artist`,
        link: "//www.youtube.com/watch?v=mTgYW99VEg8",
        video: "videos/Von.mp4"

    
    };

break;


case 0:
    today = "Sunday";

    coffee = {
        color: "purple",
        name: "Kendrick lamar",
        pic: "images/mocha.jpg",
        alt: "Kendrick music video",
        day: "Sunday",
        desc: `Kendrick lamars video of his latest album` ,
        link:"//www.youtube.com/watch?v=kL9QqLugfLU",
        video:"videos/YAH..mp4"
        
    };

break;    



}





//console.log(queryString);

console.log(coffee);

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;

document.getElementById("coffee-highlight").style.color = coffee.color;
