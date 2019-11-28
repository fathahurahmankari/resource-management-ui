import * as React from 'react';
import { Button, Dropdown, DropdownButton, InputGroup, FormControl, Table, Alert, Form} from 'react-bootstrap';
import {EmpDetailsTable} from "./EmpDetailsTable"
import axios from "axios";


export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTable : false,
      skillKeyWord : "",
      empDetails :[
        { id:1 , img: ""  , name: "George", emailAddress: "George@email.com" , phNomber: "98XXXXXXXX" ,skillSet: "JAVA, REACT, PYTHON" },
        {id: 2, img: "" , name: "Noah", emailAddress: "Noah@email.com" , phNomber: "98XXXXXXXX" ,skillSet:"JAVA, ASP.NET, NODE"},
        {id: 3, img: "", name: "Jack" , emailAddress:"Jack@email.com" , phNomber:"98XXXXXXXX" ,skillSet: "JAVA"},
        {id: 4, img:"" , name: "Jacob", emailAddress: "Jacob@email.com", phNomber: "98XXXXXXXX",skillSet: "JAVA"},
        {id: 5, img: "", name: "Charlie" , emailAddress: "Charlie@email.com", phNomber:"98XXXXXXXX" ,skillSet:"NODE, NODE" },
        {id: 6, img: "", name: "Muhammad", emailAddress:"Muhammad@email.com" , phNomber:"98XXXXXXXX" ,skillSet: "ASP.NET, NODE"},
        {id: 7, img: "", name: "Amelia", emailAddress: "Amelia@email.com", phNomber: "98XXXXXXXX",skillSet: "ASP.NET, NODE" },
        {id: 8, img: "", name: "Mia", emailAddress:"Mia@email.com" , phNomber: "98XXXXXXXX",skillSet: "ASP.NET" },
        {id: 9, img: "", name: "Poppy", emailAddress: "Poppy@email.com", phNomber: "98XXXXXXXX",skillSet: "REACT, ANGULAR"},
        {id: 10, img: "", name: "Lily", emailAddress: "Lily@email.com", phNomber: "98XXXXXXXX",skillSet: "ANGULAR"},
        {id: 11, img: "", name: "Ava", emailAddress: "Ava@email.com", phNomber: "98XXXXXXXX",skillSet: "REACT"}
       
       ],
       showError : false
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
   }


   handleSearch(event) {
    event.preventDefault();
    if(this.state.skillKeyWord !== ""){
      this.setState({
        showTable: true
      });
    }
    const data = this.state;
    console.log("Final Data", data);
    // axios.get(`link${data.skillKeyWord}`)
    // .then((res) =>{
    //   console.log(res);
    //   // code 
    // })
  }

  handleChange(event){
    event.preventDefault();
    this.setState({
        showTable: false,
        [event.target.name] : event.target.value
    });
  }

  

   render() {
    const { showTable, empDetails, skillKeyWord, showError } = this.state;
    
    return (
      <div className="App container-fluid">
      <div className="align"> 
      {/* <Form className="formField" onSubmit={this.handleSubmit}>
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="Category"
          id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#">Java</Dropdown.Item>
            <Dropdown.Item href="#">React</Dropdown.Item>
            <Dropdown.Item href="#">Asp.Net</Dropdown.Item>
            <Dropdown.Item href="#">Angular</Dropdown.Item>
          </DropdownButton>
        <Form.Control type="text" placeholder="Skills Looking for ?" name="skillKeyWord"
          value={skillKeyWord}
          onChange={this.handleChange}/>
          <Button variant="primary" type="submit" onClick={this.handleSearch} disabled={skillKeyWord === ""}>Submit</Button>
        </Form>
        </div> */}
     
        <InputGroup className="mb-3 searchField">
          <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="Category"
          id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#">Java</Dropdown.Item>
            <Dropdown.Item href="#">React</Dropdown.Item>
            <Dropdown.Item href="#">Asp.Net</Dropdown.Item>
            <Dropdown.Item href="#">Angular</Dropdown.Item>
          </DropdownButton>
          <FormControl
          placeholder="Skills Looking for ?"
          aria-label="Skills Looking for"
          aria-describedby="basic-addon2"
          name="skillKeyWord"
          value={skillKeyWord}
          onChange={this.handleChange}
          />
          <InputGroup.Append>
            <Button variant="primary" onClick={this.handleSearch} disabled={skillKeyWord === ""}>Search</Button>
          </InputGroup.Append>
          </InputGroup>
          </div> 
          <EmpDetailsTable showTable={showTable} empDetails={empDetails} skillKeyWord={skillKeyWord} showError={showError}/>
          
  </div>
    );
  }
}

