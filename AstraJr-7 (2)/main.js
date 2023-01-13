document.getElementsByClassName("circle")
let colorChanging=document.getElementsByClassName("circle")
colorChanging=Array.from(colorChanging)
colorChanging.forEach(element => {
    element.addEventListener("click", function(event) {
        document.body.style.backgroundColor=event.target.id
    }) 
    
});

