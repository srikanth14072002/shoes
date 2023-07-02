var inputTags=document.querySelectorAll("input")
var selectTag=document.querySelectorAll("select")
console.log(inputTags);
function storeTheData()
{
    var fName=inputTags[0].value 
    var sName=inputTags[1].value 
    var mandE=inputTags[2].value 
    var pass=inputTags[3].value 
    var dd=selectTag[0].value 
    var mo=selectTag[1].value 
    var yy=selectTag[2]. value 
    localStorage.setItem("FirstName",fName)
    localStorage.setItem("SecondName",sName)
    localStorage.setItem("password",pass)
    localStorage.setItem("date",dd)
    localStorage.setItem("month",mo)
    localStorage.setItem("year",yy)
}
function gender(gen)
{
    var gender=gen;
    localStorage.setItem("gender",gender)
}