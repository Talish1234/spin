var players = [];
var newPlayer;
var i = 0;
players.push(newPlayer);
document.querySelector(".add").addEventListener("click",()=>
{
 newPlayer = document.querySelector(".player").value;
 players.push(newPlayer);
 i++;
document.querySelector(".player").value = "";
 console.log(players)
}
);

document.querySelector(".submit").addEventListener("click",()=>
{
 newPlayer = players[Math.floor(Math.random()*i+1)];
 document.querySelector(".result").innerHTML = newPlayer;
});
