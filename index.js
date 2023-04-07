console.log("crud application is started");

let API = "https://6429cd4300dfa3b5473a87d7.mockapi.io/students";
console.log(API);

let Studentlist = {
  name: "sanjay",
  batch: "b4w3",
  age: 24,
};

//READ

function Readline() {
  fetch(API, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => allstudent(data))
    .catch((err) => console.log(err));
}

const studentlist = document.querySelector("#student-list");
const studentform = document.querySelector(".add-student");
const addbtn = document.querySelector("#new-stud-btn")
function readerstudent(stu) {
  const studentdiv = document.createElement("div");
  studentdiv.className = "card";
  studentdiv.innerHTML += `<h2>${stu.name}</h2>
  <p><span> batch:</span>${stu.batch}</p>
  <p><span> age:</span>${stu.age}</p>
  <button data-id= ${stu.id} class= "del-btn">delete</button>`;

  studentlist.appendChild(studentdiv);
}

function allstudent(students) {
  studentlist.innerHTML = "";
  students.forEach((stu) => {
    readerstudent(stu);
  });
}
studentlist.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.className === "del-btn") 
  {
    let id = event.target.dataset.id;
    let parent = event.target.parentNode;
    deleteF(id, parent);
  }
});
studentform.addEventListener("click",(event)=>{
  event.preventDefault();
  //console.log(event)
let name = document.getElementsByClassName("input-text")[0].value;
let batch = document.getElementsByClassName("input-text")[1].value;
let age = document.getElementsByClassName("input-text")[2].value;
//console.log(name);
let data= {
  name : name,
  batch : batch,
  age : age
}
if (event.target.name === "submit"){
  Creatdata(data)
}

});

Readline();

//   CREATE

let sanjay = {
  name: "sanjaykumar",
  batch: "b4we",
  age: 25,
};

function Creatdata(sanjay) {
  fetch(API, {
    method: "post",
    body: JSON.stringify(sanjay),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
//Creatdata()
//Readline()
function UpdateData() {
  let editStudent = {
    name: "sanjaykumar roja",
    batch: "b4we",
  };

  fetch(`${API}/2`, {
    method: "PUT",
    body: JSON.stringify(editStudent),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
UpdateData();
//Creatdata()

//delete delete

function deleteF(id, parent) {
  fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(() => parent.remove())
    .catch((err) => err);
}

deleteF(id,parent);
//https://github.com/SanJay1577/b43WE

