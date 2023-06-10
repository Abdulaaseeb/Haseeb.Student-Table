var Roll_Num = document.getElementById("Roll_Num")
var stu = document.getElementById("tbody")
var arr = [
    {
        StudentName:"A.Haseeb",
        FatherName:"M.Haroon",
        RollNum:"201",
        Cnic:"123497",
        Contact:"328947864290"
    },

    {
        StudentName:"M.Adil",
        FatherName:"M.Haroon",
        RollNum:"202",
        Cnic:"123497",
        Contact:"328947864290"
    },

    {
        StudentName:"A.Rheem",
        FatherName:"M.Haroon",
        RollNum:"203",
        Cnic:"123497",
        Contact:"328947864290"
    },

    {
        StudentName:"A.Shakoor",
        FatherName:"M.Haroon",
        RollNum:"204",
        Cnic:"123497",
        Contact:"328947864290"
    },

    {
        StudentName:"A.Mannan",
        FatherName:"M.Haroon",
        RollNum:"205",
        Cnic:"123497",
        Contact:"328947864290"
    },

    {
        StudentName:"M.Ali",
        FatherName:"M.Amin",
        RollNum:"206",
        Cnic:"123497",
        Contact:"328947864290"
    },

    {
        StudentName:"A.Ahad",
        FatherName:"M.Amin",
        RollNum:"207",
        Cnic:"123497",
        Contact:"328947864290"
    },

    {
        StudentName:"A.Basit",
        FatherName:"M.Amin",
        RollNum:"208",
        Cnic:"123497",
        Contact:"328947864290"
    },

    {
        StudentName:"M.Hasan",
        FatherName:"M.Amin",
        RollNum:"209",
        Cnic:"123497",
        Contact:"328947864290"
    },

    {
        StudentName:"M.Tlha",
        FatherName:"M.Amin",
        RollNum:"2010",
        Cnic:"123497",
        Contact:"328947864290"
    },
]
function randertable(){
for(var i = 0; i < arr.length; i++){
    stu.innerHTML += `<tr>
    <td>${arr[i].StudentName}</td>
    <td>${arr[i].FatherName}</td>
    <td>${arr[i].RollNum}</td>
    <td>${arr[i].Cnic}</td>
    <td>${arr[i].Contact}</td>
   </tr>`
}
}
randertable()
function search(){
for(var i = 0; i < arr.length; i++){
    if(Roll_Num.value == arr[i].RollNum){
    stu.innerHTML = `<tr>
    <td>${arr[i].StudentName}</td>
    <td>${arr[i].FatherName}</td>
    <td>${arr[i].RollNum}</td>
    <td>${arr[i].Cnic}</td>
    <td>${arr[i].Contact}</td>
   </tr>`
   Roll_Num.value = ""  
    }
}
}