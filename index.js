const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')
const { Triangle, Circle, Square } = require('./lib/shapes')
const Text = require('./lib/text')

class CreateLogo {
  constructor(){
    this.text = ''
    this.textColor = ''
    this.shape = ''
    this.shapeColor = ''
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
        this.text = text
        this.textColor = textColor
        return this.askShapeQs()
      })
  }
  askShapeQs() {
    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'shape',
          message: 'Please select a shape.',
          choices: ['Circle', 'Triangle', 'Square']
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter a color keyword (OR a hexadecimal number) for the shape color.',
        },
      ])
      .then(({shape, shapeColor}) => {
        this.shape = shape
        this.shapeColor = shapeColor
      })
  }
  renderSvgCode(){
    const shapeEl = this.getShapeEl()
    const textEl = new Text(this.text, this.textColor).render()
  
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
  
  ${shapeEl}
  
  ${textEl}
  
  </svg>`
  }
  getShapeEl(){
    switch (this.shape) {
      case 'Circle':
        return new Circle(this.shapeColor).render();
      case 'Triangle':
        return new Triangle(this.shapeColor).render();
      case 'Square':
        return new Square(this.shapeColor).render();
      default:
        throw new Error('Invalid shape');
    }
  }
  createSvgFile(svgCode) {
    fs.writeFile(
      path.join(__dirname, 'examples', 'logo.svg'),
      svgCode, (err) => {
        if(err) {
          console.error('Failed to create logo.svg file.', err)
        }else {
          console.log(`Generated logo.svg`)
        }
      }
    )
  }
}

const createLogo = new CreateLogo()

createLogo.askQuestions().then(() => {
  const svgCode = createLogo.renderSvgCode()
  createLogo.createSvgFile(svgCode)
})
