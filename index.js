let cvBtn=document.getElementById("cvBtn");
let submit=document.getElementById("submit");

cvBtn.addEventListener("click",function(){
    alert("Download Succesfully");
})

submit.addEventListener("click",function(){
    let email=document.getElementById("email");
    let pass=document.getElementById("pass");

    if(email.value =="" || pass.value=="")
    {
        alert(
            "Please Fill All Fields"
        )
    }
    else{
        window.location="index.html";
    }
})

let ul=document.querySelector("ul");
bar.addEventListener("click",function(){
    ul.classList.toggle("showData");

    if(ul.className == "showData")
    {
        bar.className="fa fa-close";
    }
    else
    {
        bar.className="fa fa-bars";
    }
})