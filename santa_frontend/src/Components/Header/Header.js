import React from 'react'
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isDesktop: false,
          show: [false] 
        };
    
        this.updatePredicate = this.updatePredicate.bind(this);
      }
      componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
      }
    
      updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 600 });
      }

      
    
      showHide(num){
        this.setState((prevState) => {
            const newItems = [...prevState.show];
            newItems[num] = !newItems[num];
            return {show: newItems};
        });
      }

    render() {
       
 const isDesktop = this.state.isDesktop;
        return (
            
        <div className="nav-link active"> 
        {isDesktop ? (
          
          
            <div id="meni">
                   <ul>
                    <li className="meni2"><Link className="link-stil" id="home" to={`/`}>  Home </Link></li>
                    <li className="meni2"><Link className="link-stil" id="addemp" to={`/addemployee`}>  Add employee</Link></li>
                    </ul>
               </div>
               
            ) : (
            <div id="mali_meni" style={{float:"right"}}>
            
                 
              
              <i className="fa fa-bars"  style={{color:"white"}} onClick={()=>this.showHide(0)}></i>
              { this.state.show[0] && 
                   
                        <ul>
                        <li className="meni2"><Link className="link-stil" to={`/`}> Home </Link></li><br />
                        <li className="meni2"><Link className="link-stil" id="addemp" to={`/addemployee`}>  Add employee</Link></li>
                        </ul>
                  
              }
            </div> )} </div>
        );
    }
}