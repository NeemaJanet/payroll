let salary=document.getElementById("input")
let baseSalary=document.getElementById("base-salary")
let nssfOne= document.getElementById("nssf-1")
let nssfTwo= document.getElementById("nssf-2")
let finalPaye= document.getElementById("final-paye")
let nhifj= document.getElementById("nhif")
let netPay= document.getElementById("net-pay")
let calcBtn=document.getElementById("calcbtn")
let nssf;
let paye;
let nhif;

calcBtn.addEventListener("click",function calc(){    
    //Base Salary
    baseSalary.textContent= salary.value
    //NSSF 1 and 2
    if(salary.value<0){alert("Please enter a suitable amount in numbers")}
       if(salary.value<18000){
        nssf=(salary.value*0.06).toFixed(2)
        nssfOne.textContent=nssf
        nssfTwo.textContent="N/A"
       }else{nssf="1080"
       nssfOne.textContent="N/A"
       nssfTwo.textContent=nssf}

    //Final P.A.Y.E
    if(salary.value<24000){
        paye=(salary.value*0.1).toFixed(2)
    }else if(salary.value<32333){
        paye=(salary.value*0.25).toFixed(2)
    }else{
        paye=(salary.value*0.3).toFixed(2)
    }
    finalPaye.textContent=paye
    

    //NHIF
    if(salary.value<5999){
        nhif=150
    }else if(salary.value<7999){
        nhif=300
    }else if(salary.value<11999){
        nhif=400
    }else if(salary.value<14999){
        nhif=500
    }else if(salary.value<19999){
        nhif=600
    }else if(salary.value<24999){
        nhif=750
    }else if(salary.value<29999){
        nhif=850
    }else if(salary.value<34999){
        nhif=900
    }else if(salary.value<39999){
        nhif=950
    }else if(salary.value<44999){
        nhif=1000
    }else if(salary.value<49999){
        nhif=1100
    }else if(salary.value<59999){
        nhif=1200
    }else if(salary.value<69999){
        nhif=1300
    }else if(salary.value<79999){
        nhif=1400
    }else if(salary.value<89999){
        nhif=1500
    }else if(salary.value<99999){
        nhif=1600
    }else{
        nhif=1700
    }
    nhifj.textContent=nhif

    //Net Pay
    //final=basesalary-paye-nssf-nhif
    final=(salary.value-paye-nhif-nssf).toFixed(2)
    netPay.textContent=final
    
})
