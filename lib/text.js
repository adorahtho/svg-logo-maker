//text class with svg text render method
class Text {
  constructor(text, textColor){
    this.text = text
    this.textColor = textColor
  }
  render(){
    return `<text x="150" y="160" font-size="90" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  }
}

module.exports = Text
