let ObjectiveBtn = document.getElementById("ObjectiveBtn");
let EducationBtn = document.getElementById("EducationBtn");
let SkillsBtn = document.getElementById("SkillsBtn");
let workExpBtn = document.getElementById("workExpBtn");

let objectiveSec: any = document.getElementById("objectiveSec");
let eduSec: any = document.getElementById("eduSec");
let skillSec: any = document.getElementById("skillSec");
let workExpSec: any = document.getElementById("workExpSec");

ObjectiveBtn?.addEventListener("click", ()=>{
    if(objectiveSec.style.display == "block"){
        objectiveSec.style.display = "none";
    }else{
        objectiveSec.style.display = "block"
    }
})

EducationBtn?.addEventListener("click", ()=>{
    if (eduSec.style.display == "block") {
        eduSec.style.display = "none"
    }else{
        eduSec.style.display = "block"
    }
})

SkillsBtn?.addEventListener("click", ()=>{
    if (skillSec.style.display == "block") {
        skillSec.style.display = "none"
    }else{
        skillSec.style.display = "block"
    }
})

workExpBtn?.addEventListener("click", ()=>{
    if (workExpSec.style.display == "block") {
        workExpSec.style.display = "none"
    }else{
        workExpSec.style.display = "block"
    }
})