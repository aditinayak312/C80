name_of_the_students=[];
function submit(){
    var n_1 =document.getElementById("name_1").value;
    var n_2 =document.getElementById("name_2").value;
    var n_3 =document.getElementById("name_3").value;
    var n_4 =document.getElementById("name_4").value;
    name_of_the_students.push(n_1);
    name_of_the_students.push(n_2);
    name_of_the_students.push(n_3);
    name_of_the_students.push(n_4);
    document.getElementById("name_show").innerHTML=name_of_the_students;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="block";
}    
function arrange(){
    name_of_the_students.sort();
    console.log(name_of_the_students);
    document.getElementById("name_show").innerHTML=name_of_the_students;

}
