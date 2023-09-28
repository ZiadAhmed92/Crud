let productName =document.getElementById("productName");
let productPrice =document.getElementById("productPrice");
let productCategory =document.getElementById("productCategory");
let productDesc =document.getElementById("productDesc");
let btn =document.getElementById("btn");
let alertErrors =document.getElementById("alert");
let errors =``;
let arr;
if(localStorage.getItem("all produce")==null){
arr=[];
}else{
    arr=JSON.parse(localStorage.getItem("all produce"));
    addProduce();
}
btn.addEventListener("click", function(){
   if(validateProduceName()==true&&validateProducePrice()==true&&validateProduceCategory()==true){
   
        let obj ={
            name:productName.value ,
            Price:productPrice.value ,
            Category:productCategory.value ,
            Desc:productDesc.value ,
        }
        arr.push(obj);
        localStorage.setItem("all produce",JSON.stringify(arr));
        addProduce();
        clearForm();
          errors=`Successful Operation`;
          alertErrors.innerHTML=errors;
  }else{
    
alertErrors.innerHTML=errors;
   
alertErrors.innerHTML=errors;
   alertErrors.innerHTML=errors;
  

   }
 
 }
);

function clearForm(){
    productName.value="";
    productPrice.value="";
    productCategory.value="";
    productDesc.value="";
}
function addProduce(){
    btn.innerHTML="add produce";
    var tbody = ``;
    for(i=0;i<arr.length;i++){
        
 
    tbody+=`
        <tr id="produce${i}">
            <td class="text-capitalize">${i}</td>
            <td class="text-capitalize">${arr[i].name}</td>
            <td class="text-capitalize">${arr[i].Price}</td>
            <td class="text-capitalize">${arr[i].Category}</td>
            <td class="text-capitalize">${arr[i].Desc}</td>
            <td><button class="btn btn-outline-warning text-capitalize" id="update"onclick="upDate(${i})">update</button></td>
            <td><button class="btn btn-outline-dark text-capitalize" id="delete"onclick="deleteProducts(${i})">delete</button></td>
        </tr>  `
        

}
 document.getElementById("tbody").innerHTML=tbody;
}
function deleteProducts(i){
    arr.splice(i,1);
    addProduce();
    localStorage.setItem("all produce",JSON.stringify(arr));

}
function upDate(index){
    arr.splice(index,1);
    let produceReturn =JSON.parse(localStorage.getItem("all produce",arr));
    localStorage.setItem("all produce",JSON.stringify(arr));
   
    addProduce();
    productName.value=produceReturn[index].name;
    productPrice.value=produceReturn[index].Price;
    productCategory.value=produceReturn[index].Category;
    productDesc.value=produceReturn[index].Desc;
    btn.innerHTML="Update";
   
}
function searchProducts(search2){
    var tbody = ``;
//    console.log(arr[0].name.toLowerCase().includes(search2))
    for(i=0;i<arr.length;i++){
       
        if (arr[i].name.toLowerCase().includes(search2.toLowerCase()) == true){
            tbody+=`
            <tr id="produce${i}">
                <td class="text-capitalize">${i}</td>
                <td class="text-capitalize">${arr[i].name}</td>
                <td class="text-capitalize">${arr[i].Price}</td>
                <td class="text-capitalize">${arr[i].Category}</td>
                <td class="text-capitalize">${arr[i].Desc}</td>
                <td><button class="btn btn-outline-warning text-capitalize" id="update"onclick="upDate(${i})">update</button></td>
                <td><button class="btn btn-outline-dark text-capitalize" id="delete"onclick="deleteProducts(${i})">delete</button></td>
            </tr>  `
        }
    }

document.getElementById("tbody").innerHTML=tbody;
}

function validateProduceName(){
    let regux = /^[A-Z][a-z]{3,8}$/ 
    if(regux.test(productName.value)==true){
  
        return true ;
    }else{

        errors+=`<h4> Name in-valid</h4>`;
        
        return false ;
    }

}
function validateProducePrice(){
    let regux = /^([1-9][0-9]{3}[0-9]?|100000)$/;
    if(regux.test(productPrice.value)){
        return true ;
    }else{
        errors+=`<h4>Enter Price from 1000$ to 100000$ </h4>`;
        return false ;
    }

}
function validateProduceCategory(){
    let regux = /^[A-Z][a-z]{3,10}$/;
    if(regux.test(productCategory.value)){
        return true ;
    }else{
        errors+=`<h4>Category in-valid </h4>`;
        return false ;
    }

}