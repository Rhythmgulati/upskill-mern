studentsArr = [
    {name:"NITIN",marks:88,class:3,address:"Haridwar"},
    {name:"Raju",marks:38,class:6,address:"Haridwar"},
    {name:"Mohit",marks:85,class:2,address:"Haridwar"},
    {name:"Aman",marks:28,class:3,address:"Haridwar"},
    {name:"Mohan",marks:38,class:3,address:"Haridwar"},
    { name: "John Doe", marks: 85, class: 10, address: "123 Main St" },
    { name: "Jane Smith", marks: 92, class: 11, address: "456 Elm St" },
    { name: "David Johnson", marks: 78, class: 12, address: "789 Oak St" },
    { name: "Emily Davis", marks: 88, class: 10, address: "101 Pine St" }
];

const render = (arr)=>{
    const container = document.querySelector(".box-container");
container.innerHTML = "";
const boxhtml = arr.map((element)=>{
    return `  <div class="box">
    <p>Student Name:<span>${element.name}</span></p>
    <p>Marks:<span>${element.marks}</span></p>
    <p>Class:<span>${element.class}</span></p>
    <p>Address:<span>${element.address}</span></p>
</div>`
});
container.innerHTML = boxhtml;
};


const search = ()=>{
    const searchtext = document.querySelector(".search-container input").value.toLowerCase();
    console.log(searchtext)
    const filteredstudent = studentsArr.filter((element)=>{
        return element.name.toLowerCase().includes(searchtext);
    }); 
    render(filteredstudent);
    console.log(filteredstudent);
}

render(studentsArr);