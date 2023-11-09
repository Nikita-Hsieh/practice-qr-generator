/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';

const prompt = inquirer.createPromptModule();


inquirer
  .prompt([
    {message: "type your URL", 
     name : "URL"}
  ])
  .then((answers) => {
    const url = answers.url  
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));


    fs.writeFile("URL.txt", URL, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
})


  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



