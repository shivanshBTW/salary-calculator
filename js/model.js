const salaryOperations=
{   salary : 0,
    takeSalary(salary){
        this.salary=salary;
    },
    hra(){
        return this.salary*.30;
    },
    da(){
        return this.salary*.20;
    },
    ta(){
        return this.salary*.10;
    },
    pf(){
        return this.salary*.05;
    },
    tax(){
        return this.salary*.10
    },
    gs(){
        return parseInt(this.salary)+this.hra()+this.da()+this.ta()-this.pf()
    },
    ns(){
        return this.gs()-this.tax();
    }
};
