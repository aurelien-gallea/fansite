"use strict"
// DOM selection --------------------------------------------

    //TANKS
const warrior       = document.querySelector("#war-img");
const darkKnight    = document.querySelector("#drk-img");
const paladin       = document.querySelector("#pld-img");
const gunbreaker    = document.querySelector("#gnb-img");
    // HEALERS
const whiteMage     = document.querySelector("#whm-img");    
const scholar       = document.querySelector("#sch-img");    
const astrologian   = document.querySelector("#ast-img");    
const sage          = document.querySelector("#sage-img");
    // DPS MELEE
const monk          = document.querySelector("#monk-img");
const dragoon       = document.querySelector("#drg-img");
const ninja         = document.querySelector("#nin-img");
const samurai       = document.querySelector("#sam-img");
const reaper        = document.querySelector("#rpr-img");
    // DPS PHYSICAL RANGED
const bard          = document.querySelector("#bard-img");
const machinist     = document.querySelector("#mch-img");
const dancer        = document.querySelector("#dnc-img");
    // DPS CASTER
const blackMage     = document.querySelector("#blm-img");
const summoner      = document.querySelector("#smn-img");
const redMage       = document.querySelector("#rdm-img");

// --------------------------------------------------------------
function eventHover(job,jobOverlay) {

   let mouve = document.querySelector(jobOverlay);

    job.addEventListener('mouseover', ()=> {
        mouve.style.display = "block";
        mouve.classList.toggle("flip-2-hor-top-1");

    })
    job.addEventListener('mouseout', ()=> {
        
        mouve.style.display = "none";
        mouve.classList.toggle("flip-2-hor-top-1");
    })
}
// TANKS
eventHover(warrior, ".warrior-overlay");
eventHover(darkKnight, ".darkKnight-overlay");
eventHover(paladin, ".paladin-overlay");
eventHover(gunbreaker, ".gunbreaker-overlay");
// HEALERS
eventHover(whiteMage, ".whiteMage-overlay");
eventHover(scholar, ".scholar-overlay");
eventHover(astrologian, ".astrologian-overlay");
eventHover(sage, ".sage-overlay");
// DPS MELEE
eventHover(monk, ".monk-overlay");
eventHover(dragoon, ".dragoon-overlay");
eventHover(ninja, ".ninja-overlay");
eventHover(samurai, ".samurai-overlay");
eventHover(reaper, ".reaper-overlay");
// DPS PHYSICAL RANGED
eventHover(bard, ".bard-overlay");
eventHover(machinist, ".machinist-overlay");
eventHover(dancer, ".dancer-overlay");
// DPS CASTER
eventHover(blackMage, ".blackMage-overlay");
eventHover(summoner, ".summoner-overlay");
eventHover(redMage, ".redMage-overlay");