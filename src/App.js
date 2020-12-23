import logo from './logo.svg';
import React , {useState} from "react"
import Icons from './components/Icons';
import Footer from './components/Footer'

// toastify imports
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card, CardBody, Container, Button, Col, Row} from "reactstrap"

//import bootstarp css
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import { icons } from 'react-icons/lib';

const itemArray= new Array(9).fill("empty")

const App = () => {

  const [isPlayer, setIsPlayer] = useState(0)
  const [winMsg, setWinMsg] = useState("")
  const [count, setCount]= useState(0)
  const [isMove, setIsMove]= useState(false)
  const [isSelected, setIsSelected]= useState("")
  // const [possiblity, setPossiblity] = useState(false)
  var [oldPos, setOldPos] = useState();

  const reloadGame= () =>{
    setIsPlayer(false);
    setWinMsg("");
    setCount(0);
    itemArray.fill("empty", 0,9);
  }
  var possiblity="false";
  // var oldPos= null
  var newPos= null
  var goMove="false"
  const trunIcon= isPlayer? "player2": "player1"

  const checkIsWinner = () =>{
    if (itemArray[0]=== itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !=="empty"
      ){
        setWinMsg(`${itemArray[0]} won`)
      }else if(
        itemArray[3] === itemArray[4] &&
        itemArray[3] === itemArray[5] &&
        itemArray[3] !== "empty"
      ){
        setWinMsg(`${itemArray[3]} won`)
      }else if(
        itemArray[6] === itemArray[7] &&
        itemArray[6] === itemArray[8] &&
        itemArray[6] !== "empty"
      ){
        setWinMsg(`${itemArray[6]} won`)
      }else if(
        itemArray[3] === itemArray[4] &&
        itemArray[3] === itemArray[5] &&
        itemArray[3] !== "empty"
      ){
        setWinMsg(`${itemArray[3]} won`)
      }else if(
        itemArray[0] === itemArray[3] &&
        itemArray[0] === itemArray[6] &&
        itemArray[0] !== "empty"
      ){
        setWinMsg(`${itemArray[0]} won`)
      }else if(
        itemArray[1] === itemArray[4] &&
        itemArray[1] === itemArray[7] &&
        itemArray[1] !== "empty"
      ){
        setWinMsg(`${itemArray[1]} won`)
      }else if(
        itemArray[2] === itemArray[5] &&
        itemArray[2] === itemArray[8] &&
        itemArray[2] !== "empty"
      ){
        setWinMsg(`${itemArray[2]} won`)
      }
      // else if(
      //   itemArray[0] === itemArray[4] &&
      //   itemArray[0] === itemArray[8] &&
      //   itemArray[0] !== "empty"
      // ){
      //   setWinMsg(`${itemArray[0]} won`)
      // }else if(
      //   itemArray[2] === itemArray[4] &&
      //   itemArray[2] === itemArray[6] &&
      //   itemArray[2] !== "empty"
      // )
      // {
      //   setWinMsg(`${itemArray[2]} won`)
      // }

  }

  const isPossible = (position)=>{
    
    // oldPos= position;
    setOldPos(oldPos=position)
    // console.log("old pos is ", oldPos);


      if (itemArray[position]!=="empty") {
        switch (position) {
          case 0:
            if ((itemArray[1] === "empty") || (itemArray[3] === "empty") ){
              // console.log("im inside pos 0 chek");
              possiblity="true"
              return possiblity
            }
            break;

          case 1:
            if ((itemArray[0]=== "empty") || (itemArray[2]=== "empty") || (itemArray[4]=== "empty") ) {
              // console.log("im inside pos 1 chek");
              possiblity="true"
              return possiblity
            }
            break;

          case 2:
            if ((itemArray[1] === "empty") || (itemArray[5] === "empty")){
              // console.log("im inside pos 2 chek");
              possiblity="true"
              return possiblity
            }
            break;

          case 3:
            if ((itemArray[0]=== "empty") || (itemArray[6]=== "empty") || (itemArray[4]=== "empty") ){
              // console.log("im inside pos 3 chek");
              possiblity="true"
              return possiblity
            }
            break;

          case 4:
            if ((itemArray[1] === "empty") || 
                (itemArray[3] === "empty") || 
                (itemArray[5] === "empty") || 
                (itemArray[7] ) === "empty"){
              // console.log("im inside pos 4 chek");
              possiblity="true"
              return possiblity
            }
            
            break;

          case 5:
            if ((itemArray[2]=== "empty") || (itemArray[8]=== "empty") || (itemArray[4]=== "empty") ){
              // console.log("im inside pos  5 chek");
              possiblity="true"
              return possiblity
            }
            break;

          case 6:
            if ((itemArray[3] === "empty") || (itemArray[7] === "empty")){
              // console.log("im inside pos 6 chek");
              possiblity="true"
              return possiblity
            }
            break;

          case 7:
            if ((itemArray[6]=== "empty") || (itemArray[8]=== "empty") || (itemArray[4]=== "empty") ){
              // console.log("im inside pos 7 chek");
              possiblity="true"
              return possiblity
            }
            break;

          case 8:
            if ((itemArray[5] === "empty") || (itemArray[7] === "empty")){
              // console.log("im inside pos 8 chek");
              possiblity="true"
              return possiblity
            }
            break;  
            

          default:
            possiblity="false"
            return possiblity
            break;
        }
      }
  }

 

  const changeItem = (itemNumber) =>{
    if(winMsg){
      return toast(winMsg, {type: "success"})
    }

    isPossible(itemNumber);// checks the possibilty of coin selection

    if((itemArray[itemNumber] === "empty") && count<6){
      itemArray[itemNumber] = isPlayer ? "player2": "player1"
      setIsPlayer(!isPlayer)
      setCount(count+1)
    }else if ((itemArray[itemNumber] === "empty") && (count>=6)){
      return toast("Move the player", {type:"error"})
    }
    
    if((itemArray[itemNumber] !== "empty")) {
      if((count===6)){
        if(possiblity=== "true"){
          // console.log("inside");
          if(itemArray[itemNumber] === "player1") {
            itemArray[itemNumber] = "bplayer1"
            setCount(count+1)
            // console.log(count);
            setIsSelected("bp1");
            setIsMove(!isMove);
            possiblity="false"
            }else {
              return toast("Its player1 turn", {type:"error"})
            }
        }else{
          return toast("Cannot move", {type:"error"})
        }
        
        }
              
           
    } 

    
    if((itemArray[itemNumber] !== "empty") && (count>6)){
      if(itemArray[itemNumber] === "player1"){
        if(isPlayer=== false){
          if(possiblity==="true"){
            itemArray[itemNumber] = "bplayer1"
            setIsSelected("bp1")
            setIsMove(!isMove)
            possiblity="false"
          }else 
            {
              return toast("Cannot move", {type:"error"})
            }
          }else{
            return toast("Its player2's turn",{type:"error"})
          }
      }

      if(itemArray[itemNumber] === "player2"){
        if(isPlayer=== true){
          if(possiblity=== "true"){
            itemArray[itemNumber] = "bplayer2"
            setIsSelected("bp2")
            setIsMove(!isMove)
            possiblity="false"
          }else 
          {
            return toast("Cannot move", {type:"error"})
          }

          } else{
            return toast("Its player1's turn",{type:"error"})
          }
      }      
      
    }

    checkIsWinner();
  }

  const removeBp= ()=>{
    itemArray.map((item,index)=>{
      // console.log(item);
      if(item ==="bplayer1"){
        itemArray[index]= "empty"
      }else if(item ==="bplayer2"){
        itemArray[index]= "empty"
        
      }
    })
  }

  const canMove=(newP, oldP)=>{
    // console.log("newP", newP);
    // console.log("oldP",oldP);

    // if(newP===oldP){
    //   if(itemArray[newP] === "bplayer1") {
    //     itemArray[newP] = "player1"
    //   }else{
    //     itemArray[newP] = "player2"
    //   }
    // }

    switch (oldP) {
      case 0:
        if ((newP===1)||(newP===3)){
          // console.log("i m inside oldP 0");
          return goMove= "true"
        }
        break;
      
      case 1:
        if ((newP===0)||(newP===2)||(newP===4)){
          // console.log("i m inside oldP 1");
          return goMove= "true"
        }
        break;

      case 2:
        if ((newP===1)||(newP===5)){
          // console.log("i m inside oldP 2");
          return goMove= "true"
        }
        break;

      case 3:
        if ((newP===0)||(newP===6)||(newP===4)){
          // console.log("i m inside oldP 3");
          return goMove= "true"
        }
        break;

      case 4:
        if ((newP===1)||(newP===3)||(newP===5)||(newP===7)){
          // console.log("i m inside oldP 4");
          return goMove= "true"
        }
        break;

      case 5:
        if ((newP===2)||(newP===8)||(newP===4)){
          // console.log("i m inside oldP 5");
          return goMove= "true"
        }
        break;

      case 6:
        if ((newP===3)||(newP===7)){
          // console.log("i m inside oldP 6");
          return goMove= "true"
        }
        break;

      case 7:
        if ((newP===6)||(newP===8)||(newP===4)){
          // console.log("i m inside oldP 0");
          return goMove= "true"
        }
        break;

      case 8:
        if ((newP===5)||(newP===7)){
          // console.log("i m inside oldP 0");
          return goMove= "true"
        }
        break;
    
      default:
        break;
    }
  }

  const moveItem = (itemPosition) =>{
    newPos=itemPosition;
    // console.log("new pos is", newPos);

    canMove(newPos, oldPos);// checking can move?

    if ((itemArray[itemPosition]=== "empty") && (isSelected=== "bp1")){
        if(goMove==="true"){
          itemArray[itemPosition] = "player1"
          setIsPlayer(!isPlayer)
          removeBp()
          setIsMove(!isMove)
        } else{
          return toast("Cannot jump", {type:"error"})
        }
      }else if ((itemArray[itemPosition]=== "empty") && (isSelected === "bp2")){
        if(goMove==="true"){
          itemArray[itemPosition] = "player2"
          setIsPlayer(!isPlayer)
          removeBp()
          setIsMove(!isMove)
        }else{
          return toast("Cannot jump", {type:"error"})
        }
      }else if(oldPos===newPos) {
        if(itemArray[newPos] === "bplayer1") {
          itemArray[newPos] = "player1"
          removeBp()
          setIsMove(!isMove)
        }else{
          itemArray[newPos] = "player2"
          removeBp()
          setIsMove(!isMove)
        }
    }else {
      return toast("Select empty box to move", {type:"error"})
    }

    checkIsWinner();

  }

  return (
    
    <Container className="p-5">
      <h1 className='title'> TIC TAC TOE</h1>
      <ToastContainer position="bottom-center"/>
      <Row>
        <Col md={6} className="offset-md-3">
          {winMsg ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMsg}
              </h1>
              <Button
              color="success"
              block
              onClick= {reloadGame}>Reload the game </Button> 
            </div>
          ) : (
            <div>
              <h1 className="text-warning">
              {isPlayer ? "Player2": "Player1"}'s turn
              <Icons name={trunIcon}/>
            </h1>
            </div>
          )}
          <div className="grid">
            {itemArray.map((item, index)=>{
                // console.log(item); wrote coz --> icon css has bug
               return(
                <Card color="warning" onClick= {isMove? (()=> moveItem(index)):(()=> {changeItem(index)})}>
                  <CardBody className= "box">
                    <Icons name={item}/>
                  </CardBody>
                </Card>
               )
            })}
          </div>
        </Col>
        {/* <Col md={6} className="offset-md-3 text-white" >
          <h2>Player1 -- <Icons name="player1"/></h2>
          <h2>Player2 -- <Icons name="player2"/></h2>
        </Col> */}
      </Row>

     

            <Footer/>
            
    </Container>
  );
}

export default App;
