// let addTodoElement = () => {
//     let dataArea = document.querySelector("data_table");
//     let listTemplate = document.querySelector("template");
//     element = {
//         dataArea,
//         listTemplate,
//     }
//     return element
// }

// function reFresh(){
//     // let alllen = addTodoElement().allArea.childElementCount;
//     // let todolen = addTodoElement().todoListArea.childElementCount;
//     // let finishedlen = addTodoElement().finishedArea.childElementCount;
//     // for(let i = 0; i < alllen-1; i++){
//     //     addTodoElement().allArea.removeChild(addTodoElement().allArea.lastElementChild);
//     // }
//     // for(let j = 0; j < todolen-1; j++){
//     //     addTodoElement().todoListArea.removeChild(addTodoElement().todoListArea.lastElementChild);
//     // }
//     // for(let k = 0; k < finishedlen-1; k++){
//     //     addTodoElement().finishedArea.removeChild(addTodoElement().finishedArea.lastElementChild);
//     // }
//     memberlist.forEach(element => {
//         let clone = document.importNode(addTodoElement().listTemplate.content,true)
//         let name = element.name.first+' '+element.name.last;
//         let age = element.dob.age;
//         let address = element.location.street+' '+element.location.city+' '+element.location.state;
//         let email = element.email;
//         let phone = element.phone;
//         let pw = element.login.password;
//         clone.querySelector(".data .name").textContent = name;
//         clone.querySelector(".data .age").textContent = age;
//         clone.querySelector(".data .address").textContent = address;
//         clone.querySelector(".data .email").textContent = email;
//         clone.querySelector(".data .phone").textContent = phone;
//         clone.querySelector(".data .pw").textContent = pw;
//         console.log(clone);
//         //addTodoElement().dataArea.append(clone);
//     });
    
// }



memberlist = [];
$('button').click(function(){
    $.getJSON('https://randomuser.me/api/')
    .done(function(re){
        let element = re.results[0];
        let name = `${element.name.first} ${element.name.last}`;
        let age = element.dob.age;
        let address = element.location.street.number+' '+element.location.street.name+' '+element.location.city+' '+element.location.state;
        let email = element.email;
        let phone = element.phone;
        let pw = element.login.password;
        let table = document.getElementById("myTable");
        let row = table.insertRow();
        let c1 = row.insertCell(0);
        let c2 = row.insertCell(1);
        let c3 = row.insertCell(2);
        let c4 = row.insertCell(3);
        let c5 = row.insertCell(4);
        let c6 = row.insertCell(5);
        c1.innerHTML = name;
        c2.innerHTML = age;
        c3.innerHTML = address;
        c4.innerHTML = email;
        c5.innerHTML = phone;
        c6.innerHTML = pw;
        console.log(table);
    })
    .fail(function(w){
        alert("faill openapi,"+w)
    });
})

