
let body = document.querySelector('body');

let header = document.createElement('h1');
header.className = "header";
header.innerHTML = "Christian Mingle"
body.appendChild(header);
let header2 = document.createElement('h2');
header2.className = "header2";
header2.innerHTML = "Find your perfect match!";
body.appendChild(header2);

let person = document.createElement('div');
person.className = "people";
body.appendChild(person);

for(i=0; i<data.results.length; i++){
    display();
}

function display(){
//individual/div main
    let individual = document.createElement('div');
    individual.className = "person";
    person.appendChild(individual);
//profile/div/[img, names/div, dob/div]
    let profile = document.createElement('div');
    profile.className = "profile";
    individual.appendChild(profile);    
//profile pic/img
    let newPic = document.createElement('img');
    newPic.className = "images"
    newPic.src = data.results[i].picture['large'];
    profile.appendChild(newPic);
//names/div
    let names = document.createElement('div');
    names.className = "name";
    profile.appendChild(names);
//names/div/name
    let name = document.createElement('P');
    name.innerHTML = data.results[i].name['first'] + " " + data.results[i].name['last'];
    names.appendChild(name);
//dob/div
    let dob = document.createElement('div');
    dob.className = "age"
    profile.appendChild(dob);
//dob/div/age
    let Age = document.createElement('p');
    Age.innerHTML = "Age:" + " " + data.results[i].dob.age;
    dob.appendChild(Age);

//contact info/div
    let contact = document.createElement('div');
    contact.className = "contact";
    individual.appendChild(contact);
//contact info/div/email
    let email = document.createElement('p');
    email.innerHTML = data.results[i].email;
    contact.appendChild(email);
//contact info/div/number
    let number = document.createElement('p');
    number.innerHTML = "Cell:" + " " + data.results[i].cell;
    contact.appendChild(number);
//gender/div
    let personalinfo = document.createElement('div');
    if(data.results[i].gender=="male"){
            personalinfo.className="genderm"    
        }else{
            personalinfo.className="genderf"
        }
    personalinfo.innerHTML = data.results[i].gender;
    individual.appendChild(personalinfo);

    console.log(body);
}