function jsondata(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function() {
    if(xhr.readyState === 4 && xhr.status === 200){
      callback(xhr.responseText);
    }
  };
  xhr.send();

}
// fuction calling
jsondata("data.json",function(text) {
  let data=JSON.parse(text);
  console.log(data);
  ba(data.basics);
  educa(data.education);
  skill(data.skills);


})
// main div class calling from html
var main=document.querySelector('.main');
// var main=document.getElementById('main');
// left div creation
var left=document.createElement("div");
left.classList.add("left");
// id for main div
left.setAttribute("id","left");
// appending to main div
main.appendChild(left);

console.log(left);
// we are placing data.basics in basic functon r constructor
function ba(basic){
  var img=document.createElement("img");
  img.src=basic.photo ;
  left.appendChild(img);
  // name creation
  var name=document.createElement("h1");
  name.textContent=basic.name;
  left.appendChild(name);
  // email creation
  var mail=document.createElement("p");
  mail.textContent=basic.email;
  name.appendChild(mail);
  // mobile number creation
   var mb=document.createElement("h4");
   mb.textContent=basic.mobile;
   mail.appendChild(mb);

}


// right div creation
var right=document.createElement('div');
right.classList.add("right");
main.appendChild(right);
// edu div creation
var edu=document.createElement("h1");
edu.textContent="Education Details:";
edu.appendChild(document.createElement("HR"));
right.appendChild(edu);

// fuction calling
function educa(education) {
  for(i in education){

    var e2=document.createElement("div");
    e2.classList.add("edu1");
    e2.textContent=education[i].course;

    // list creatoin
     var ul=document.createElement("ul");
     ul.classList.add("edu2");
     for(j in education[i].college){
       var li=document.createElement("li");
       li.textContent=education[i].college[j];
       edu.appendChild(e2);
       e2.appendChild(ul);
       ul.appendChild(li);

            }

  }

}
function skill(skills) {
  var skill_title=document.createElement("h1");

  skill_title.textContent="Skill Set:";
  // skill_title.appendChild(document.createElement(HR))
  right.appendChild(skill_title);
  var table=document.createElement("table");
  table.classList.add("table");
  skill_title.appendChild(table);
  var row="";
   for (i=0;i<skills.length;i++) {
     row=row +"<tr><td>"+skills[i].name+"</td><td>"+skills[i].value+"</td></tr>";


   }
 table.innerHTML=row;

}
