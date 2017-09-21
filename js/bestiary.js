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
    var name = document.querySelector("#monsterName");
    name.innerHTML = monsters[id].name;
    
    var size = document.querySelector("#monsterSize");
    size.innerHTML = monsters[id].size;
    
    var type = document.querySelector("#monsterType");
    type.innerHTML = monsters[id].type;
    
    var source = document.querySelector("#monsterSource");
    source.innerHTML = monsters[id].source;
    
    var alignment = document.querySelector("#monsterAlignment");
    alignment.innerHTML = monsters[id].alignment;
    
    var ac = document.querySelector("#monsterAc");
    ac.innerHTML = monsters[id].ac;
    
    var hp = document.querySelector("#monsterHp");
    hp.innerHTML = monsters[id].hp;
    
    var speed = document.querySelector("#monsterSpeed");
    speed.innerHTML = monsters[id].speed;
    
    var str = document.querySelector("#monsterStr");
    str.innerHTML = monsters[id].str;
    
    var dex = document.querySelector("#monsterDex");
    dex.innerHTML = monsters[id].dex;

    var con = document.querySelector("#monsterCon");
    con.innerHTML = monsters[id].con;

    var int = document.querySelector("#monsterInt");
    int.innerHTML = monsters[id].int;

    var wis = document.querySelector("#monsterWis");
    wis.innerHTML = monsters[id].wis;

    var cha = document.querySelector("#monsterCha");
    cha.innerHTML = monsters[id].cha;

    var resist = document.querySelector("#monsterResist");
    resist.innerHTML = monsters[id].resist;

    var immune = document.querySelector("#monsterImmune");
    immune.innerHTML = monsters[id].immune;

    var condImmune = document.querySelector("#monsterCondImmune");
    condImmune.innerHTML = monsters[id].conditionImmune;

    var senses = document.querySelector("#monsterSenses");
    senses.innerHTML = monsters[id].senses;

    var passive = document.querySelector("#monsterPassive");
    passive.innerHTML = monsters[id].passive;

    var languages = document.querySelector("#monsterLanguages");
    languages.innerHTML = monsters[id].languages;

    var cr = document.querySelector("#monsterCr");
    cr.innerHTML = monsters[id].cr;
}

