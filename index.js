const inquirer = require('inquirer')
const fs = require('fs')
const { Triangle, Circle, Square } = require('./lib/shapes.js')

class CreateLogo {
  constructor(){
    this.text = []
    this.shape = []
  }
  askQuestions() {
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
      ])
      .then(({text, textColor}) => {
        this.text.push({text, textColor})
        console.log(this.text)
        return this.askShapeQs()
      })
      .then(() => {
        return fs.writeFile(
          join(__dirname, 'examples', 'logo.svg')
          
        )
      })
  }
  askShapeQs() {
    return inquirer
      .prompt([
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
      .then(({shape, shapeColor}) => {
        this.shape.push({ shape, shapeColor})
        console.log(this.shape)
      })
  }
}

function createSvg(){
  const shapeEl = new Shape

  return `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">

${shapeAndText}

</svg>`
}

const createLogo = new CreateLogo()

createLogo.askQuestions()
