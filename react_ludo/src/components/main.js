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
      display: "0",
	  pawns:{
		"red":[-1,-1,-1,-1],
		"green":[-1,-1,-1,-1],
		"yellow":[-1,-1,-1,-1],
		"blue":[-1,-1,-1,-1],
	  }
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
	
	//console.log(event.key);
	if(event.key>="1" && event.key<="6"){
		this.number(event.key);
		//var color="red";
		//var color="green";
		//var color="yellow";
		var color="blue";
		
		var pawn_no=2;//1-4
		var index=pawn_no-1;
		var num=event.key.charCodeAt(0)-48;
		//console.log(this.state.pawns);
		let pawns = this.state.pawns;
		
		if(pawns[color][index]==-1 && num!=6){
			return;
		}
		else if(pawns[color][index]==-1 && num==6){
			pawns[color][index]=0;
		}
		else if(pawns[color][index]+num>56){
			return;
		}
		else{
			pawns[color][index]=pawns[color][index]+num;
		}
		//console.log(pawns[color][index]);
		this.setState({
			pawns:pawns,
		});
		$('[data-'+color+'="'+pawns[color][index]+'"]').css("top")
		$("#"+color+"-"+pawn_no).css("top",$('[data-'+color+'="'+pawns[color][index]+'"]').css("top"));
		$("#"+color+"-"+pawn_no).css("left",$('[data-'+color+'="'+pawns[color][index]+'"]').css("left"));
		$("#"+color+"-"+pawn_no).css("visibility","visible");
		$("#"+color+"-base-"+pawn_no).css("visibility","hidden");
		
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
		<h2 class="text-center" style={{color:"linear-gradient(90deg,#0047ff,#ff4040)",background:"white"}}>Shilpi Chak</h2>
        <div id = "ludo" style={{height: "500px", width: "500px", background: "#fff", 
		margin: "auto", padding: "6px" }}>
			<div class="game">
				<div class="house green">
					<div class="box">
						<div class="square square-one green"></div>
						<div class="square square-two green"></div>
						<div class="square square-three green"></div>
						<div class="square square-four green"></div>
						
						<div id="green-base-1" class="square square-one dark-green pawn">1</div>
						<div id="green-base-2" class="square square-two dark-green pawn">2</div>
						<div id="green-base-3" class="square square-three dark-green pawn">3</div>
						<div id="green-base-4" class="square square-four dark-green pawn">4</div>
					</div>
				</div>

				<div class="house yellow" style={{right: "0"}}>
					<div class="box">
						<div class="square square-one yellow"></div>
						<div class="square square-two yellow"></div>
						<div class="square square-three yellow"></div>
						<div class="square square-four yellow"></div>
						
						<div id="yellow-base-1" class="square square-one dark-yellow pawn">1</div>
						<div id="yellow-base-2" class="square square-two dark-yellow pawn">2</div>
						<div id="yellow-base-3" class="square square-three dark-yellow pawn">3</div>
						<div id="yellow-base-4" class="square square-four dark-yellow pawn">4</div>
					</div>
				</div>

				<div class="house red" style={{bottom: "0"}}>
					<div class="box">
						<div class="square square-one red"></div>
						<div class="square square-two red"></div>
						<div class="square square-three red"></div>
						<div class="square square-four red"></div>
						
						<div id="red-base-1" class="square square-one dark-red pawn">1</div>
						<div id="red-base-2" class="square square-two dark-red pawn">2</div>
						<div id="red-base-3" class="square square-three dark-red pawn">3</div>
						<div id="red-base-4" class="square square-four dark-red pawn">4</div>
					</div>
				</div>

				<div class="house blue" style={{bottom: "0",right: "0"}}>
					<div class="box">
						<div class="square square-one blue"></div>
						<div class="square square-two blue"></div>
						<div class="square square-three blue"></div>
						<div class="square square-four blue"></div>
						
						<div id="blue-base-1" class="square square-one dark-blue pawn">1</div>
						<div id="blue-base-2" class="square square-two dark-blue pawn">2</div>
						<div id="blue-base-3" class="square square-three dark-blue pawn">3</div>
						<div id="blue-base-4" class="square square-four dark-blue pawn">4</div>
					</div>
				</div>
				
				<div class="home" data-red="56" data-green="56" data-yellow="56" data-blue="56"></div>
				<div class="cells" data-red="12" data-yellow="38" data-blue="25" style={{top: "40%"}}></div>
				<div class="cells g-start" data-red="13" data-green="0" data-yellow="39" data-blue="26" style={{top: "40%", left:"6.66%"}}></div>
				<div class="cells" data-red="14" data-green="1" data-yellow="40" data-blue="27" style={{top: "40%", left:"13.32%"}}></div>
				<div class="cells" data-red="15" data-green="2" data-yellow="41" data-blue="28" style={{top: "40%", left:"19.98%"}}></div>
				<div class="cells" data-red="16" data-green="3" data-yellow="42" data-blue="29" style={{top: "40%", left:"26.64%"}}></div>
				<div class="cells" data-red="17" data-green="4" data-yellow="43" data-blue="30" style={{top: "40%", left:"33.3%"}}></div>
				
				{/*<div class="cells dark-red pawn" style={{top: "40%", left:"6.66%"}}>1</div>
				<div class="cells dark-green pawn" style={{top: "40%", left:"13.32%"}}>2</div>
					<div class="cells dark-blue pawn" style={{top: "40%", left:"19.98%"}}>3</div>-->*/}

				<div class="cells" data-red="18" data-green="5" data-yellow="44" data-blue="31" style={{top: "33.3%", left:"40%"}}></div>
				
				{/*<div class="cells dark-yellow pawn" style={{top: "13.32%", left:"40%"}}></div>*/}
				
				<div class="cells" data-red="19" data-green="6" data-yellow="45" data-blue="32" style={{top: "26.64%", left:"40%"}}></div>
				<div class="cells" data-red="20" data-green="7" data-yellow="46" data-blue="33" style={{top: "19.98%", left:"40%"}}></div>
				<div class="cells safe" data-red="21" data-green="8" data-yellow="47" data-blue="34" style={{top: "13.32%", left:"40%"}}></div>
				<div class="cells" data-red="22" data-green="9" data-yellow="48" data-blue="35" style={{top: "6.66%", left:"40%"}}></div>
				<div class="cells" data-red="23" data-green="10" data-yellow="49" data-blue="36" style={{top: "0", left:"40%"}}></div>

				<div class="cells" data-red="24" data-green="11" data-yellow="50" data-blue="37" style={{top: "0", left:"46.66%"}}></div>
				
				<div class="cells yellow" data-yellow="51" style={{top: "6.66%", left:"46.66%"}}></div>
				<div class="cells yellow" data-yellow="52" style={{top: "13.32%", left:"46.66%"}}></div>
				<div class="cells yellow" data-yellow="53" style={{top: "19.98%", left:"46.66%"}}></div>
				<div class="cells yellow" data-yellow="54" style={{top: "26.64%", left:"46.66%"}}></div>
				<div class="cells yellow" data-yellow="55" style={{top: "33.3%", left:"46.66%"}}></div>
				
				{/*<div class="cells dark-yellow pawn" style={{top: "33.3%", left:"46.66%"}}></div>*/}

				<div class="cells" data-red="25" data-green="12" data-blue="38" style={{top: "0", left:"53.32%"}}></div>
				<div class="cells y-start" data-red="26" data-green="13" data-yellow="0" data-blue="39" style={{top: "6.66%", left:"53.32%"}}></div>
				<div class="cells" data-red="27" data-green="14" data-yellow="1" data-blue="40" style={{top: "13.32%", left:"53.32%"}}></div>
				<div class="cells" data-red="28" data-green="15" data-yellow="2" data-blue="41" style={{top: "19.98%", left:"53.32%"}}></div>
				<div class="cells" data-red="29" data-green="16" data-yellow="3" data-blue="42" style={{top: "26.64%", left:"53.32%"}}></div>
				<div class="cells" data-red="30" data-green="17" data-yellow="4" data-blue="43" style={{top: "33.3%", left:"53.32%"}}></div>

				<div class="cells" data-red="31" data-green="18" data-yellow="5" data-blue="44" style={{top: "40%", right: "33.3%"}}></div>
				<div class="cells" data-red="32" data-green="19" data-yellow="6" data-blue="45" style={{top: "40%", right:"26.64%"}}></div>
				<div class="cells" data-red="33" data-green="20" data-yellow="7" data-blue="46" style={{top: "40%", right:"19.98%"}}></div>
				<div class="cells safe" data-red="34" data-green="21" data-yellow="8" data-blue="47" style={{top: "40%", right:"13.32%"}}></div>
				<div class="cells" data-red="35" data-green="22" data-yellow="9" data-blue="48" style={{top: "40%", right:"6.66%"}}></div>
				<div class="cells" data-red="36" data-green="23" data-yellow="10" data-blue="49" style={{top: "40%", right:"0"}}></div>

				<div class="cells" data-red="37" data-green="24" data-yellow="11" data-blue="50" style={{top: "46.66%", right:"0"}}></div>
				<div class="cells blue" data-blue="51" style={{top: "46.66%", right:"6.66%"}}></div>
				<div class="cells blue" data-blue="52" style={{top: "46.66%", right:"13.32%"}}></div>
				<div class="cells blue" data-blue="53" style={{top: "46.66%", right:"19.98%"}}></div>
				<div class="cells blue" data-blue="54" style={{top: "46.66%", right:"26.64%"}}></div>
				<div class="cells blue" data-blue="55" style={{top: "46.66%", right: "33.3%"}}></div>

				<div class="cells" data-red="38" data-green="25" data-yellow="12" style={{top: "53.32%", right:"0"}}></div>
				<div class="cells b-start" data-red="39" data-green="26" data-yellow="13" data-blue="0" style={{top: "53.32%", right:"6.66%"}}></div>
				<div class="cells" data-red="40" data-green="27" data-yellow="14" data-blue="1" style={{top: "53.32%", right:"13.32%"}}></div>
				<div class="cells" data-red="41" data-green="28" data-yellow="15" data-blue="2" style={{top: "53.32%", right:"19.98%"}}></div>
				<div class="cells" data-red="42" data-green="29" data-yellow="16" data-blue="3" style={{top: "53.32%", right:"26.64%"}}></div>
				<div class="cells" data-red="43" data-green="30" data-yellow="17" data-blue="4" style={{top: "53.32%", right: "33.3%"}}></div>

				<div class="cells" data-red="44" data-green="31" data-yellow="18" data-blue="5" style={{bottom: "33.3%", left:"53.32%"}}></div>
				<div class="cells" data-red="45" data-green="32" data-yellow="19" data-blue="6" style={{bottom: "26.64%", left:"53.32%"}}></div>
				<div class="cells" data-red="46" data-green="33" data-yellow="20" data-blue="7" style={{bottom: "19.98%", left:"53.32%"}}></div>
				<div class="cells safe" data-red="47" data-green="34" data-yellow="21" data-blue="8" style={{bottom: "13.32%", left:"53.32%"}}></div>
				<div class="cells" data-red="48" data-green="35" data-yellow="22" data-blue="9" style={{bottom: "6.66%", left:"53.32%"}}></div>
				<div class="cells" data-red="49" data-green="36" data-yellow="23" data-blue="10" style={{bottom: "0",left:"53.32%"}}></div>

				<div class="cells" data-red="50" data-green="37" data-yellow="24" data-blue="11" style={{bottom: "0",left:"46.66%"}}></div>
				<div class="cells red " data-red="51" style={{bottom: "6.66%", left:"46.66%"}}></div>
				<div class="cells red" data-red="52" style={{bottom: "13.32%", left:"46.66%"}}></div>
				<div class="cells red" data-red="53" style={{bottom: "19.98%", left:"46.66%"}}></div>
				<div class="cells red" data-red="54" style={{bottom: "26.64%", left:"46.66%"}}></div>
				<div class="cells red" data-red="55" style={{bottom: "33.3%", left:"46.66%"}}></div>

				<div class="cells" data-green="38" data-yellow="25" data-blue="12" style={{bottom: "0",left:"40%"}}></div>
				<div class="cells r-start" data-red="0" data-green="39" data-yellow="26" data-blue="13" style={{bottom: "6.66%", left:"40%"}}></div>
				<div class="cells" data-red="1" data-green="40" data-yellow="27" data-blue="14" style={{bottom: "13.32%", left:"40%"}}></div>
				<div class="cells" data-red="2" data-green="41" data-yellow="28" data-blue="15" style={{bottom: "19.98%", left:"40%"}}></div>
				<div class="cells" data-red="3" data-green="42" data-yellow="29" data-blue="16" style={{bottom: "26.64%", left:"40%"}}></div>
				<div class="cells" data-red="4" data-green="43" data-yellow="30" data-blue="17" style={{bottom: "33.3%", left:"40%"}}></div>

				<div class="cells" data-red="5" data-green="44" data-yellow="31" data-blue="18" style={{top: "53.32%", left:"33.3%"}}></div>
				<div class="cells" data-red="6" data-green="45" data-yellow="32" data-blue="19" style={{top: "53.32%", left:"26.64%"}}></div>
				<div class="cells" data-red="7" data-green="46" data-yellow="33" data-blue="20" style={{top: "53.32%", left:"19.98%"}}></div>
				<div class="cells safe" data-red="8" data-green="47" data-yellow="34" data-blue="21" style={{top: "53.32%", left:"13.32%"}}></div>
				<div class="cells" data-red="9" data-green="48" data-yellow="35" data-blue="22" style={{top: "53.32%", left:"6.66%"}}></div>
				<div class="cells" data-red="10" data-green="49" data-yellow="36" data-blue="23" style={{top: "53.32%", left:"0"}}></div>

				<div class="cells" data-red="11" data-green="50" data-yellow="37" data-blue="24" style={{top: "46.66%", left:"0"}}></div>
				<div class="cells green" data-green="51" style={{top: "46.66%", left:"6.66%"}}></div>
				<div class="cells green" data-green="52" style={{top: "46.66%", left:"13.32%"}}></div>
				<div class="cells green" data-green="53" style={{top: "46.66%", left:"19.98%"}}></div>
				<div class="cells green" data-green="54" style={{top: "46.66%", left:"26.64%"}}></div>
				<div class="cells green" data-green="55" style={{top: "46.66%", left:"33.3%"}}></div>




				<div id="red-1" class="cells dark-red pawn" style={{visibility:"hidden"}}>1</div>
				<div id="red-2" class="cells dark-red pawn" style={{visibility:"hidden"}}>2</div>
				<div id="red-3" class="cells dark-red pawn" style={{visibility:"hidden"}}>3</div>
				<div id="red-4" class="cells dark-red pawn" style={{visibility:"hidden"}}>4</div>
				
				<div id="green-1" class="cells dark-green pawn" style={{visibility:"hidden"}}>1</div>
				<div id="green-2" class="cells dark-green pawn" style={{visibility:"hidden"}}>2</div>
				<div id="green-3" class="cells dark-green pawn" style={{visibility:"hidden"}}>3</div>
				<div id="green-4" class="cells dark-green pawn" style={{visibility:"hidden"}}>4</div>
				
				<div id="yellow-1" class="cells dark-yellow pawn" style={{visibility:"hidden"}}>1</div>
				<div id="yellow-2" class="cells dark-yellow pawn" style={{visibility:"hidden"}}>2</div>
				<div id="yellow-3" class="cells dark-yellow pawn" style={{visibility:"hidden"}}>3</div>
				<div id="yellow-4" class="cells dark-yellow pawn" style={{visibility:"hidden"}}>4</div>
				
				<div id="blue-1" class="cells dark-blue pawn" style={{visibility:"hidden"}}>1</div>
				<div id="blue-2" class="cells dark-blue pawn" style={{visibility:"hidden"}}>2</div>
				<div id="blue-3" class="cells dark-blue pawn" style={{visibility:"hidden"}}>3</div>
				<div id="blue-4" class="cells dark-blue pawn" style={{visibility:"hidden"}}>4</div>

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
