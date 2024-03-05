const services = [
    {img:"https://img.freepik.com/free-photo/medicine-uniform-healthcare-medical-workers-day-space-text_185193-108327.jpg?t=st=1709642134~exp=1709645734~hmac=178ec19e11a34158571ab0756b51fa00615e9bc6f950820c4268849ac384b1c4&w=1060",servicename:"Dry Cleaning",price:40.00},
    {img:"https://img.freepik.com/premium-photo/woman-loads-washing-machine-with-laundry-from-basket_535844-3854.jpg?w=1060",servicename:"Washing",price:20.00},
    {img:"https://img.freepik.com/free-vector/ironing-concept-illustration_114360-24151.jpg?t=st=1709642093~exp=1709645693~hmac=0fd492dda6b791a63e06990fa05954af2d9720e3dd277472b6654cf129ed43b9&w=740",servicename:"Ironing",price:30.00},
    {img:"https://img.freepik.com/free-photo/gorgeous-wedding-dress-beige-gowns-bridesmaids-hang-bad_1304-3698.jpg?t=st=1709642223~exp=1709645823~hmac=b3305f463aeb2602f682e0223c90b3d3a63865a13518b4abd385b256419dd90d&w=360",servicename:"Wedding Dress Cleaning",price:50.00},
]


let addedservices = [];

const updatetotal= ()=>{
    let sum = 0 ;
    const total = document.querySelector(".totalamt");
    const amount = addedservices.reduce((accumlator,element)=>{
        return accumlator + element.price;
    },0);
    console.log(amount);
    total.textContent = `₹${amount}`;
};

let num = 0;
const servicerender = (num)=>{
    const container = document.querySelector(".service-container");
    container.innerHTML = "";
    const servicehtml =  ` 
    <img src="${services[num].img}" alt="">
    <h1>${services[num].servicename} <span>₹${services[num].price}</span></h1>`
   
    container.innerHTML = servicehtml;
}
servicerender(0);


let sno = 1;
const additemfunction = (num) => {
   const tablecontainer = document.querySelector(".left-card-top table tbody");
  
   var html = document.createElement("tr"); 
   html.innerHTML = `<td styte="width: 10%;">${sno}</td>
   <td styte="width: 70%;">${services[num].servicename}</td>
   <td styte="width: 20%;">${services[num].price}</td>`
   tablecontainer.appendChild(html);
   sno++;
   addedservices.push(services[num]);
  
}


const additem = document.querySelector(".additem-btn");
additem.addEventListener("click",()=>{
    num =num+1;
    if (num==services.length){
    num = 0;}
    additemfunction(num);
    servicerender(num);
    updatetotal();
})

const skipitem = document.querySelector(".skip-btn");
skipitem.addEventListener("click",()=>{
    num =num+1;
    if (num==services.length){
    num = 0;}
    servicerender(num);
});

const booknow = document.querySelector(".bookingform");
booknow.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("ck");
    console.log(addedservices.length);
    const additemfirst =  document.querySelector(".additemsfirst");
    if(addedservices.length==0){
       additemfirst.textContent ="Please add item first";
    }else{
        additemfirst.textContent ="Thank you we will contact you shortly";
    } 
})