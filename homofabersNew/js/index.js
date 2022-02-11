// animate 
function animateText2(){
    let i = 0
    let texts = ["Web Apps","Web Sites","Mobile Apps",
    "UI / UX Design","Bussiness Solutions"]
    let textAbout2 = document.getElementById("textAbout2")
    
    setInterval(() => {
        textAbout2.animate([{color:'white'},{color:'black'}],800)
        textAbout2.innerText = texts[(i % 5)]
        i++
    },3000);

} 

window.addEventListener("DOMContentLoaded" , ()=>{
    animateText2()
})
