var arvattava = Math.floor(Math.random()*10)+1;
var kerrat = 0;

window.onload= function alusta()
{
  var alustus = '';

  for(var i = 1; i <=10; i++)
  {
    for(var j = 0; j < 3; j++)
    {
      alustus += '<button class= "nayta" type="button" name="' + i +'" onclick="arvaa(this)" value = '+i+'>'+i+'</button>';
      if(i < 10 && j != 2)
      {
        i++;
      }
      else {
        j=3;
      }

    }
    alustus+= '<br>';
  }
  document.getElementById('peli').innerHTML = alustus;

}
function arvaa(arpa)
{
  kerrat++;
  var arvaus = arpa.value;
  if(kerrat < 4)
  {
    if(arvaus < arvattava)
    {
      document.getElementById("viesti").innerHTML = 'Valitsit liian pienen numeron';
    }
    else if(arvaus > arvattava)
    {
      document.getElementById("viesti").innerHTML = 'Valitsit liian suuren numeron';
    }
    else if (arvaus == arvattava){
      document.getElementById("viesti").innerHTML = 'Oikein! Käytit ' + kerrat + ' arvauskertaa';
    }
    }else /*(arvaus != arvattava && kerrat == 3)*/ {
      document.getElementById("viesti").innerHTML= 'Käytit kaikki arvauskertasi';
  }
}
