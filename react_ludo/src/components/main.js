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
		<h2 class="text-center" style={{color:"white",background:"linear-gradient(90deg,#0047ff,#ff4040)"}}>REACT LUDO</h2>
		<h2 class="text-center" style={{color:"linear-gradient(90deg,#0047ff,#ff4040)",background:"white"}}>=/Enter => "=" &nbsp;&nbsp;&nbsp;&nbsp; Esc => "AC"</h2>
        <div id = "ludo" style={{height: "500px", width: "500px", background: "#fff", 
		margin: "auto", padding: "6px" }}>
			<div class="game">
				<div class="house green">
					<div class="box">
						<div class="square square-one green"></div>
						<div class="square square-two green"></div>
						<div class="square square-three green"></div>
						<div class="square square-four green"></div>
					</div>
				</div>

				<div class="house yellow" style={{right: "0"}}>
					<div class="box">
						<div class="square square-one yellow"></div>
						<div class="square square-two yellow"></div>
						<div class="square square-three yellow"></div>
						<div class="square square-four yellow"></div>
					</div>
				</div>

				<div class="house red" style={{bottom: "0"}}>
					<div class="box">
						<div class="square square-one red"></div>
						<div class="square square-two red"></div>
						<div class="square square-three red"></div>
						<div class="square square-four red"></div>
					</div>
				</div>

				<div class="house blue" style={{bottom: "0",right: "0"}}>
					<div class="box">
						<div class="square square-one blue"></div>
						<div class="square square-two blue"></div>
						<div class="square square-three blue"></div>
						<div class="square square-four blue"></div>
					</div>
				</div>

				<div class="home"></div>
				<div class="cells" style={{top: "40%"}}></div>
				<div class="cells g-start" style={{top: "40%", left:"6.66%"}}></div>
				<div class="cells" style={{top: "40%", left:"13.32%"}}></div>
				<div class="cells" style={{top: "40%", left:"19.98%"}}></div>
				<div class="cells" style={{top: "40%", left:"26.64%"}}></div>
				<div class="cells" style={{top: "40%", left:"33.3%"}}></div>

				<div class="cells" style={{top: "0", left:"40%"}}></div>
				<div class="cells" style={{top: "6.66%", left:"40%"}}></div>
				<div class="cells safe" style={{top: "13.32%", left:"40%"}}></div>
				<div class="cells" style={{top: "19.98%", left:"40%"}}></div>
				<div class="cells" style={{top: "26.64%", left:"40%"}}></div>
				<div class="cells" style={{top: "33.3%", left:"40%"}}></div>

				<div class="cells" style={{top: "0", left:"46.66%"}}></div>
				<div class="cells yellow" style={{top: "6.66%", left:"46.66%"}}></div>
				<div class="cells yellow" style={{top: "13.32%", left:"46.66%"}}></div>
				<div class="cells yellow" style={{top: "19.98%", left:"46.66%"}}></div>
				<div class="cells yellow" style={{top: "26.64%", left:"46.66%"}}></div>
				<div class="cells yellow" style={{top: "33.3%", left:"46.66%"}}></div>

				<div class="cells" style={{top: "0", left:"53.32%"}}></div>
				<div class="cells y-start" style={{top: "6.66%", left:"53.32%"}}></div>
				<div class="cells" style={{top: "13.32%", left:"53.32%"}}></div>
				<div class="cells" style={{top: "19.98%", left:"53.32%"}}></div>
				<div class="cells" style={{top: "26.64%", left:"53.32%"}}></div>
				<div class="cells" style={{top: "33.3%", left:"53.32%"}}></div>

				<div class="cells" style={{top: "40%", right: "33.3%"}}></div>
				<div class="cells" style={{top: "40%", right:"26.64%"}}></div>
				<div class="cells" style={{top: "40%", right:"19.98%"}}></div>
				<div class="cells safe" style={{top: "40%", right:"13.32%"}}></div>
				<div class="cells" style={{top: "40%", right:"6.66%"}}></div>
				<div class="cells" style={{top: "40%", right:"0"}}></div>

				<div class="cells blue" style={{top: "46.66%", right: "33.3%"}}></div>
				<div class="cells blue" style={{top: "46.66%", right:"26.64%"}}></div>
				<div class="cells blue" style={{top: "46.66%", right:"19.98%"}}></div>
				<div class="cells blue" style={{top: "46.66%", right:"13.32%"}}></div>
				<div class="cells blue" style={{top: "46.66%", right:"6.66%"}}></div>
				<div class="cells" style={{top: "46.66%%", right:"0"}}></div>

				<div class="cells" style={{top: "53.32%", right: "33.3%"}}></div>
				<div class="cells" style={{top: "53.32%", right:"26.64%"}}></div>
				<div class="cells" style={{top: "53.32%", right:"19.98%"}}></div>
				<div class="cells" style={{top: "53.32%", right:"13.32%"}}></div>
				<div class="cells b-start" style={{top: "53.32%", right:"6.66%"}}></div>
				<div class="cells" style={{top: "53.32%", right:"0"}}></div>

				<div class="cells" style={{bottom: "0",left:"53.32%"}}></div>
				<div class="cells" style={{bottom: "6.66%", left:"53.32%"}}></div>
				<div class="cells safe" style={{bottom: "13.32%", left:"53.32%"}}></div>
				<div class="cells" style={{bottom: "19.98%", left:"53.32%"}}></div>
				<div class="cells" style={{bottom: "26.64%", left:"53.32%"}}></div>
				<div class="cells" style={{bottom: "33.3%", left:"53.32%"}}></div>

				<div class="cells" style={{bottom: "0",left:"46.66%"}}></div>
				<div class="cells red " style={{bottom: "6.66%", left:"46.66%"}}></div>
				<div class="cells red" style={{bottom: "13.32%", left:"46.66%"}}></div>
				<div class="cells red" style={{bottom: "19.98%", left:"46.66%"}}></div>
				<div class="cells red" style={{bottom: "26.64%", left:"46.66%"}}></div>
				<div class="cells red" style={{bottom: "33.3%", left:"46.66%"}}></div>

				<div class="cells" style={{bottom: "0",left:"40%"}}></div>
				<div class="cells r-start" style={{bottom: "6.66%", left:"40%"}}></div>
				<div class="cells" style={{bottom: "13.32%", left:"40%"}}></div>
				<div class="cells" style={{bottom: "19.98%", left:"40%"}}></div>
				<div class="cells" style={{bottom: "26.64%", left:"40%"}}></div>
				<div class="cells" style={{bottom: "33.3%", left:"40%"}}></div>

				<div class="cells" style={{top: "53.32%", left:"33.3%"}}></div>
				<div class="cells" style={{top: "53.32%", left:"26.64%"}}></div>
				<div class="cells" style={{top: "53.32%", left:"19.98%"}}></div>
				<div class="cells safe" style={{top: "53.32%", left:"13.32%"}}></div>
				<div class="cells" style={{top: "53.32%", left:"6.66%"}}></div>
				<div class="cells" style={{top: "53.32%", left:"0"}}></div>

				<div class="cells green" style={{top: "46.66%", left:"33.3%"}}></div>
				<div class="cells green" style={{top: "46.66%", left:"26.64%"}}></div>
				<div class="cells green" style={{top: "46.66%", left:"19.98%"}}></div>
				<div class="cells green" style={{top: "46.66%", left:"13.32%"}}></div>
				<div class="cells green" style={{top: "46.66%", left:"6.66%"}}></div>
				<div class="cells" style={{top: "46.66%", left:"0"}}></div>


			</div>
        </div>
        <div id = "spacer">
        </div>
		<br/><br/>
        <div id = "github" style={{margin:"auto",width:"100px"}}>
          <a id= "github-link" href = "https://github.com/ShilpiChak" target = "_blank">
            <img src = {github} alt = "Github" width="100px"/>
          </a>
        </div>
      </div>



    </div>

  );
}
}
export default Main;
//
