//Net Salary Calculator
    /* Global variables */
    const prompt = require("prompt-sync")();
    const personalRelief = 28800;
    let monthlySalary=prompt('enter Monthly Salary');
    let annualySalary=prompt('enter Annual Salary');
      
            /* Calculates both gross salry, nssf, nhif when the amount entered
            is between 288000 and 388000 */
            if(monthlySalary < 388000){
                const kraRate = (0.10 * monthlySalary)
                const nssfRate = (0.06 * monthlySalary)
                const grossIncome = (monthlySalary + personalRelief - nssfRate - kraRate)
                console.log(`Monthly Gross Income ${grossIncome}`);
    
            /* Calculates both gross salary, nssf, nhif when the amount entered
            is over 388000 */
            if(monthlySalary > 388000){
                const kraRate = (0.30 * monthlySalary)
                const nssfRate = (0.06 * monthlySalary)
                const grossIncome = (monthlySalary + personalRelief - nssfRate - kraRate)
                console.log(`Monthly Gross Income ${grossIncome}`);
            }
          
            /* Calculates both gross salary, nssf, nhif when the amount entered
            is between 288000 and 388000 */
            if(annualySalary > 288000 && annualySalary < 388000){
                const kraRate = (0.10 * annualySalary)
                const nssfRate = (0.06 * annualySalary)
                const grossIncome = (annualySalary + personalRelief - nssfRate - kraRate)
                console.log(`Annual Gross Income ${grossIncome}`);
            }
            
            /* Calculates both gross salary, nssf, nhif when the amount entered
            is above 388000 */
            if(annualySalary > 388000){
                const kraRate = (0.30 * annualySalary)
                const nssfRate = (0.06 * annualySalary)
                const grossIncome = (annualySalary + personalRelief - nssfRate - kraRate)
                console.log(`Annual Gross Income ${grossIncome}`);
            }
        }

