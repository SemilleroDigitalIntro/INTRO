const visual= document.querySelector("#visual");
const buttons= document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () =>{
        if(btn.id === "="){
            visual.value = eval(visual.value);
        } else if (btn.id === "ac"){
            visual.value = "";
        } else if (btn.id == "de"){
            visual.value = visual.value.slice(0, -1);
        } else {
            visual.value += btn.id
        }
    })
})