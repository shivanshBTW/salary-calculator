window.addEventListener("DOMContentLoaded",init);

function init(){
    bindEvents();
    fillWithZeros();
}

function computeSalary(){
    var salary = document.querySelector('#salary').value;
    //console.log("compute is called " + salary);
    salaryOperations.takeSalary(salary);
    // var hra = salaryOperations.hra();
    // var da = salaryOperations.da();
    // printResult(hra,da);

    printResult();

    // console.log(document.querySelector('.gg'));
}

function printResult(){
    // document.querySelector("#HRA").innerText = hra;
    // document.querySelector("#DA").innerText = da;
    for(let key in salaryOperations){
        if(typeof salaryOperations[key]==='function'){
            if(key=='takeSalary'){
                continue;

            }
            document.querySelector(`#${key}`).innerHTML = salaryOperations[key]();
        }
    }


}

function fillWithZeros(){
    var spans = document.querySelectorAll('span');
    for( span of spans){
        span.innerText=0;
    }
}

function bindEvents(){
    document.querySelector('#computeButton').addEventListener("click",computeSalary);
}
