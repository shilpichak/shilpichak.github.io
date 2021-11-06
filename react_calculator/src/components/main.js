import React from 'react';
import $ from 'jquery';
import github from "./github.png"


//equalsHit tracks equal button
var equalsHit = 0
var decimalHit = 0
 //for my switch function

class Main extends React.Component  {
//set up
  constructor(props) {
    super(props);
    this.state = {
      formula: "",
      display: "0"
    }
    //this.handleClick = this.handleClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
	
	this.keyPress = this.keyPress.bind(this);
  }





componentDidMount(){
	
    window.addEventListener("keydown",this.keyPress)

  const roundAccurately = (number, decimalPlaces) =>
    Number(Math.round(number + "e" + decimalPlaces) + "e-" + decimalPlaces)

  //MY REGEX**************************
  var regex = /[x*X/+-]/

  //FUNCTION FOR NUMBER BUTTONS, RESET EQUALS HIT COUNT
  this.number = i => {
    if(this.state.formula.length > 20 | this.state.display.length > 12){
        this.setState({
          formula: "",
          display: "LIMIT REACHED"
        })
    }
    else if(this.state.formula === "0" | equalsHit >= 1){
      if(equalsHit >= 1){
        equalsHit = 0
      }
      this.setState({
        formula: i,
        display: i
      })
    }
//DONT ALLOW EXTRA ZEROES WHERE NOT ALLOWED
    else if(regex.test(this.state.display.charAt(0)) | this.state.display === "0"){
      if(this.state.display === "0"){
        var f = this.state.formula.split("")
        console.log(f)
         f.splice(f.length - 1, 1)
         var f = f.join("")
        console.log(f)
        this.setState({
          formula:  f  + i,
          display: i
        })
    }
      else{
        this.setState({
          formula: this.state.formula + i,
          display: i
        })
      }
  }
    else{
      this.setState({
        formula: this.state.formula + i,
        display: this.state.display + i
      })
    }
  }
//FUNCTION FOR OPERATORS, RESET DECIMAL AND EQUALS HIT COUNT************************************

  this.operator = sign => {
    decimalHit = 0
    if(this.state.formula.length > 25 | this.state.display.length > 15){
        this.setState({
          formula: "",
          display: "LIMIT REACHED"
        })
    }
    else if (equalsHit >= 1){
      equalsHit = 0
      this.setState({
        formula: this.state.display + sign,
        display: sign
      })
    }
    else if(/[-]/.test(this.state.formula.charAt(this.state.formula.length - 1)) && regex.test(this.state.formula.charAt(this.state.formula.length - 2)) ){
        var f = this.state.formula.split("")
         f.splice(f.length - 2, 2, sign)
         var f = f.join("")
        this.setState({
          formula: f ,
        })
    }
    else if(regex.test(this.state.formula.charAt(this.state.formula.length - 1))){
      var newStr = this.state.formula.slice(0,this.state.formula.length - 1) + sign
      this.setState({
        formula: newStr,
        display: sign
      })
    }
    else{
      this.setState({
        formula: this.state.formula + sign,
        display: sign
      })
    }
  }
  //DECIMAL FUNCTION*************************************************************************

  this.decimal = () =>{
    if(this.state.formula.length > 25 | this.state.display.length > 15){
        this.setState({
          formula: "",
          display: "LIMIT REACHED"
        })
    }
    else if(regex.test(this.state.display.charAt(0))){
      this.setState({
        formula: this.state.formula + "0.",
        display: "0."
      })
    }
    else if(this.state.display == 0 & this.state.formula == ""){
      this.setState({
        formula: this.state.formula + "0.",
        display: "0."
      })
    }
    //RESET DECIMAL AND EQUALS HIT COUNT
    else if(equalsHit >=1){
      equalsHit = 0
      this.setState({
        display: "0.",
        formula: "0."
      })
    }
      else{
        this.setState({
        formula: this.state.formula + ".",
        display: this.state.display + "."
      })
    }
  }
//NEGATIVES/SUBTRACTION BUTTON*******************************

  this.subtract = () => {
    if(!/[-]/.test(this.state.formula.charAt(this.state.formula.length - 1))){
      decimalHit = 0
      this.setState({
        formula: this.state.formula + "-",
        display: "-"
      })
    }
  }
  //EQUALS BUTTON FUNCTION, ROUND DECIMALS****************************************************************

  this.answer = () => {
    if(this.state.formula.length > 14 | this.state.display.length > 14){
        this.setState({
          formula: "",
          display: "LIMIT REACHED"
        })
    }
    else if(equalsHit == 0){
        if(!regex.test(this.state.formula.charAt(this.state.formula.length-1))){
          decimalHit = 0
          equalsHit += 1
          var answer = roundAccurately(eval(this.state.formula), 4).toString()
          console.log(this.state.formula.length)
          this.setState({
            formula: this.state.formula + "=" + answer,
            display: answer
          })
          return answer
      }
    }
  }
}

//****************FIXES*******************************
//fix negatives
//fix operator at end of formula and hitting equal


//SWITCH STATEMENT FOR BUTTON PRESSED, FUNCTIONS IN THE COMPONENT MOUNT ABOVE
  handleClick(event){
    switch(event.target.id){
      case "clear":
        decimalHit = 0
        this.setState({
          formula: "",
          display: "0"
        })
        break;
      case "divide":
        this.operator("/");
        break;
      case "multiply":
        this.operator("*");
        break;
      case "add":
        this.operator("+");
        break;
        //FIX NEGATIVES************************************
      case "subtract":
        this.subtract();
        break;
      case "seven":
        this.number("7");
        break;
      break;
      case "eight":
        this.number("8");
        break;
      case "nine":
        this.number("9");
        break;
      case "four":
        this.number("4");
        break;
      case "five":
        this.number("5");
        break;
      case "six":
        this.number("6");
        break;
      case "one":
        this.number("1");
        break;
      case "two":
        this.number("2");
        break;
      case "three":
        this.number("3");
        break;
      case "zero":
        this.number("0");
        break;
      case "decimal":
        decimalHit += 1
        if (decimalHit <= 1){
        this.decimal();
      }
        break;
      case "equals":

        this.answer()
        break;
    }
  }
//LOTSA CODE FOR CLICK HANDLER BECAUSE OF SWITCH STATEMENT, THANK YOU FOR YOUR PATIENCE


keyPress(event) {
	console.log(event.key);
	if(event.key>="0" && event.key<="9"){
		this.number(event.key);
	}
	
	if(event.key=="+"){
		this.operator("+");
	}
	if(event.key=="-"){
		this.subtract();
	}
	if(event.key=="*"){
		this.operator("*");
	}
	if(event.key=="/"){
		this.operator("/");
	}
	
	if(event.key=="=" || event.key=="Enter"){
		this.answer();
	}
	
	if(event.key=="."){
		decimalHit += 1
        if (decimalHit <= 1){
			this.decimal();
		}
	}
	
	if(event.key=="Escape"){
		decimalHit = 0
        this.setState({
          formula: "",
          display: "0"
        });
	}
	
    //let myKey = event.key.toUpperCase();
    //console.log(myKey.charCodeAt(0))
}





  render(){
  return (


    <div >

      <div id = "container">
		<h2 class="text-center" style={{color:"white",background:"linear-gradient(90deg,#0047ff,#ff4040)"}}>Keyboard Support Added</h2>
		<h2 class="text-center" style={{color:"linear-gradient(90deg,#0047ff,#ff4040)",background:"white"}}>=/Enter => "=" &nbsp;&nbsp;&nbsp;&nbsp; Esc => "AC"</h2>
        <div id = "calculator">
          <div id = "formula-screen">
            {this.state.formula}
          </div>
          <div id = "display">
            {this.state.display}
          </div>
          <div id = "button-container">
            <div className = "AC" id = "clear" onClick = {this.handleClick}>
              <div id = "text">AC</div>
            </div>
            <div className = "buttonD operator" id = "divide" onClick = {this.handleClick}>
              <div id = "text">/</div>
            </div>
            <div className = "buttonX operator" id = "multiply" onClick = {this.handleClick}>
              <div id = "text">x</div>
            </div>
            <div className = "button7 number" id = "seven" onClick = {this.handleClick}>
              <div id = "text">7</div>
            </div>
            <div className = "button8 number" id = "eight" onClick = {this.handleClick}>
              <div id = "text">8</div>
            </div>
            <div className = "button9 number" id = "nine" onClick = {this.handleClick}>
              <div id = "text">9</div>
            </div>
            <div className = "buttonS operator" id = "subtract" onClick = {this.handleClick}>
              <div id = "text">-</div>
            </div>
            <div className = "button4 number" id = "four" onClick = {this.handleClick}>
              <div id = "text">4</div>
            </div>
            <div className = "button5 number" id = "five" onClick = {this.handleClick}>
              <div id = "text">5</div>
            </div>
            <div className = "button6 number" id = "six" onClick = {this.handleClick}>
              <div id = "text">6</div>
            </div>
            <div className = "buttonP operator" id = "add" onClick = {this.handleClick}>
              <div id = "text">+</div>
            </div>
            <div className = "button1 number" id = "one" onClick = {this.handleClick}>
              <div id = "text">1</div>
            </div>
            <div className = "button2 number" id = "two" onClick = {this.handleClick}>
              <div id = "text">2</div>
            </div>
            <div className = "button3 number" id = "three" onClick = {this.handleClick}>
              <div id = "text">3</div>
            </div>
            <div className = "equals" id = "equals" onClick = {this.handleClick}>
              <div id = "textEquals">=</div>
            </div>
            <div className = "button0 number" id = "zero" onClick = {this.handleClick}>
              <div id = "text">0</div>
            </div>
            <div className = "buttonDD number" id = "decimal" onClick = {this.handleClick}>
              <div id = "text">.</div>
            </div>
          </div>
        </div>
        <div id = "spacer">
        </div>
        <div id = "github">
          <a id= "github-link" href = "https://github.com/KonoPowa" target = "_blank">
            <img src = {github} alt = "Github"/>
          </a>
        </div>
      </div>



    </div>

  );
}
}
export default Main;
//
