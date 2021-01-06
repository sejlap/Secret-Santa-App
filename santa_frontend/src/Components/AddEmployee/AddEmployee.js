import React from 'react';
import { Button, Form,  Card} from "react-bootstrap";
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import {Link} from "react-router-dom";
class AddEmployee extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name: '',
      surname: '',
      uspjeh: '',
      opis: ''
    };
  } 
 handleSubmit = (event) => {
    event.preventDefault();
    let reqBody = {
      name: this.state.name,
      surname: this.state.surname
    };
    axios.post("http://localhost:5000/employees", reqBody)
         .then(res=> { 
          this.setState({
            name: "",
            surname: "",
            uspjeh: res.data
          });
          this.state.uspjeh = "";
         })
         .catch(error => {
            this.setState({ 
              name: "",
             surname: ""
        });

    });
  }
  /*componentDidMount() {
    axios.get('http://localhost:5000/sinonimi')
      .then(response => this.setState({items: response.data}))
      .catch(err => { 
        this.setState({errorMessage: err.message});
      })
  }*/
  handleInputChange = (event) => {
    event.preventDefault()
      this.setState({
        [event.target.name] : event.target.value
      });
  };
 
  render() {
    const { name, surname} = this.state
  
    return (
      <div className="main-div" id="div">
            <Card style={{ width: '55rem' }} id="prva">
              <Card.Body>
                <Card.Title id="naslov"> Add new employee </Card.Title>
                  <Form onSubmit= {this.handleSubmit}  id="forma" >
                    <Form.Text className="label"> Add a name</Form.Text>
                    <Form.Control type="text1" placeholder="Enter a name" className="bar" id="input1" name= "name" value={name} onChange= {this.handleInputChange}/>
                    <Form.Text className="label"> Add a surname</Form.Text>
                    <Form.Control type="text2" placeholder="Enter surname" className="bar" id="input2" name= "surname" value={surname} onChange= {this.handleInputChange}/>
                    <button type="submit" id="save" >Save</button>
                    <Link to="/"> <button id="back"> Back </button> </Link>
                  </Form>

                  <Hidden >
                    <Paper id="message"> {this.state.uspjeh}</Paper>
                  </Hidden>
                  
              </Card.Body>
            </Card>
      </div>
    );
  }
}

export default AddEmployee;