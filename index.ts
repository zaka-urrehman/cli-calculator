#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


// const sleep = () =>{
//     return new Promise((res)=>{
//         setTimeout(res,2000);
//     })
// }

// async function welcome() 
// {
// let rainbowTitle = chalkAnimation.rainbow(`lets start calculation`);
// await sleep;
// rainbowTitle.stop();
// console.log("calculato");
    
// }
// welcome();
async function askQuestion() {
    
  const answers = await  inquirer
    .prompt
    ([
{
    type: "list",
    name: "operator",
    message: "which operation do you want to perform",
    choices: ["addition", "subtraction", "multiplication", "division"]
},
{
    type: "number",
    name: "num1",
    message: "enter first number:"

},
{
    type: "number",
    name: "num2",
    message: "enter second number:"

}
    ])

   
        if(answers.operator=="addition"){console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2} `)}
        else if(answers.operator=="subtraction"){console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2} `)}
        else  if(answers.operator=="multiplication"){console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2} `)}
        else  if(answers.operator=="division"){console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2} `)}
   
};



async function startAgain() {
    do{ 
       await askQuestion();
        var again = await inquirer
        .prompt({
            type: "input",
            name: "restart",
            message: "do you want to do calculation again? y/n",
           
        })
    }while(again.restart == "Yes"||again.restart == "yes"||again.restart == "Y"||again.restart == "y")
    
}
startAgain();