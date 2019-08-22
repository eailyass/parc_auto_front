import React, {Component} from 'react'
import '../styles/Drivers.css';

function searchingForm(term){
  return function(x){

    return x.firstName.toLowerCase().includes(term.toLowerCase()) || !term;
    return x.lastName.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class Drivers extends Component {
  

    constructor(props){
        super(props)
        this.state = {
            isLoaded: false,
            items : [],
            term: '',
            
        }
        this.searchHandler = this.searchHandler.bind(this);
    }
    searchHandler(event){
      this.setState({ term: event.target.value})
    }
  

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/drivers')
          .then(response => response.json())
          .then(json =>{ this.setState({  isLoaded:true,
            items: json, })
    });
      }
     

    render(){
        
        let {isLoaded,  items, term }= this.state;
      if(!isLoaded){
        return "loading";
      }
      
      else{
    return (
      <div className="Drivers">
        <form>
          <input type="text" class="form-control" placeholder="search" 
          onChange={this.searchHandler} />
        </form>
           <table class="table">
               <thead class="thead-dark">
                 <tr>
                   <th scope="col">Id</th>
                   <th scope="col">FirstName</th>
                   <th scope="col">LastName</th>
                   <th scope="col">LicenceNumber</th>
                   <th scope="col">Birthday</th>
                  
                 </tr>
               </thead>
            {items.filter(searchingForm(term)).map(driver => ( 
              
               <tbody>
                 <tr>
                   <td>{driver.id}</td>
                   <td>{driver.firstName}</td>
                   <td>{driver.lastName}</td>
                   <td>{driver.licenseNumber}</td>
                   <td>{driver.birthday}</td>
                  
                 </tr>
                 
               </tbody>
            
            ))}
           </table>
            </div>
         
     
    );
  }
  }

}
export default Drivers;