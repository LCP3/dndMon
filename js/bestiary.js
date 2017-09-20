window.onload = loadMonsterData;

function loadMonsterData() {
    var monsters = monsterData.compendium.monster;
    var monsterList = document.querySelector("#monsterList");

    for (var i=0; i < monsters.length; i++){
        var name = monsters[i].name;
        var bookSource = "";
        var type = "";
        var challengeRating = monsters[i].cr;
    }

    
// Loop through bestiary json, create li's, populate

    for (var i=0; i < monsters.length; i++){
        var li = document.createElement("li");
        li.id = [i];
        li.setAttribute("data-creature", monsters[i].name);
        li.innerHTML = "<span class='name col-xs-3'>" + monsters[i].name + "</span>" +
         "<span class='type col-xs-3'>" + monsters[i].type + "</span>" +
          "<span class='source col-xs-3'>" + monsters[i].source + "</span>" +
           "<span class='cr col-xs-3'>" + "CR" + " " + monsters[i].cr + "</span>";
        document.getElementsByTagName("ul")[0].appendChild(li);
    }
}

monsterName = document.querySelector(".monsterName");

// capture event target
document.addEventListener("click", function(e){
    // if e.target is a span
    if(e.target.tagName === "SPAN"){
        // select parent node, then set ID
        var creatureId = e.target.parentNode.getAttribute("id");
        console.log(creatureId);
        pickMonster(creatureId);
    }
    // if target is a li
    else if(e.target.tagName === "LI"){
        // set id
        var creatureId = e.target.getAttribute("id");
        console.log(creatureId);
        pickMonster(creatureId);
    }
    // else
});

function pickMonster(id) {
    // initialize monsters
    var monsters = monsterData.compendium.monster;

    // set table fields
    var name = document.querySelector(".monsterName");
    name.innerHTML = monsters[id].name;
}

