//ennum practice pannanum

var myNodeList = document.getElementsByTagName("li");
for(var i = 0; i<myNodeList.length;i++){
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.appendChild(txt);
    span.className = "close";
    myNodeList[i].appendChild(span)
}

var close = document.getElementsByClassName("close");
for(var i = 0; i< close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if(ev.target.tagName == 'LI'){
        ev.target.classList.toggle('checked');
    }
},false);

function addElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ""){
        alert("Write something before adding an item.");
    } else{
        document.getElementById("myUL").appendChild(li);
    }
      document.getElementById("myInput").value = "";

      var span = document.createElement("span");
      var txt = document.createTextNode("\u00D7");
      span.appendChild(txt);
      span.className = "close";
      li.appendChild(span);

    for(var i = 0; i< close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    
}

var ip = document.getElementById("myInput");
ip.addEventListener("keydown",function(e){
    if(e.keyCode == 13){
        addElement();
    }
});


/*function classChanger(id,classTochange) {
    var element = document.getElementById(id);
    element.classList.toggle(classTochange);
    
}

function darkMode() {
    classChanger("body","dark");
    classChanger("myInput","d-input");
    classChanger("header","d-header");
    classChanger("myUL","d-ul");
    classChanger("addBtn","d-addBtn");
    classChanger("h1","d-h1");    
}*/


function darkMode() {
    var id = ["body","myInput","header","myUL","addBtn","h1"];
    var classTochange = ["dark","d-input","d-header","d-ul","d-addBtn","d-h1"]

    for(var j = 0; j< id.length;j++){
        var element = document.getElementById(id[j]);        
        element.classList.toggle(classTochange[j]);
    }

}
