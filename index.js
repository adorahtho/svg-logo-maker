const inquirer = require('inquirer')
const fs = require('fs')
const shapes = require('./lib/shapes.js')


function askQuestions() {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo.'
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color keyword (OR a hexadecimal number) for the text.'
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape.',
        choices: ['circle', 'triangle', 'square']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword (OR a hexadecimal number) for the shape color.',
      },
    ])
    .then((response)=> {
      console.log(response)
    })
  }

  askQuestions()

