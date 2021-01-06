import React from 'react';
import axios from 'axios';
import { Form, Card} from "react-bootstrap";
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {Link} from "react-router-dom";

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      opis: '',
      uspjeh: ''
    };
  } 

  handleInputChange = (event) => {
    event.preventDefault()
      this.setState({
        [event.target.name] : event.target.value
      });
  };
  handleClick = (e) => {
    e.preventDefault();
    axios.get("http://localhost:5000/employees/:").then((res)=> {
        this.setState({
            uspjeh: res.data,
        });
        this.state.uspjeh = "";
    })
    .catch(()=> {
        this.setState({ 
            searchBar: "",
            uspjeh: ""
        });
    });
  }
  _exportPdf = () => {
    html2canvas(document.querySelector("#divToPrint")).then(canvas => {
       const imgData = canvas.toDataURL('image/png');
       const pdf = new jsPDF();
       pdf.addImage(imgData, 'PNG', 0, 0);
       pdf.save("SecretSantaReport.pdf"); 
   });
}


   render() {
    return (
      <div className="main-div" id="div">
          <Card style={{ width: '55rem' }} id="prva">
              <Card.Body>
                <Card.Title id="naslov"> SECRET SANTA </Card.Title>
                  <Form>
                    <button onClick={this.handleClick}  id="match">Match</button>
                  </Form>
                  <Link to="/addemployee">  <button id="add"> Add new employee </button> </Link>
                 <br></br> <label id="labela"> Report</label>
                  <div id='divToPrint'>
                    <Hidden >
                      <Paper id="message2">  {this.state.uspjeh}</Paper>
                    </Hidden>
                   </div>
                   <button id="export" onClick={this._exportPdf} > Export as pdf</button>
              </Card.Body>
            </Card>
      </div>
    );
  }
}
export default Home;