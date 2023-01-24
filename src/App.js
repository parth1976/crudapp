import {React , Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends Component {
  constructor(){
    super();
    this.state={
      employeeData : []
     }
}
  handledelete= (e) =>{
    e.preventDefault();
    let employeeData = this.state.employeeData;

    employeeData.pop(employeeData);

    this.setState({
      employeeData : employeeData
    })
    }
    handleSorting =(e)=>{
      e.preventDefault();
      let employeeData = this.state.employeeData;
      let name = this.state.name;
          employeeData.sort(function(a, b) { return 2 * (a.name > b.name) - 1; })
      this.setState({
        employeeData : employeeData
      })
    }

  
  handleSubmit= (e) =>{
    e.preventDefault();
    let employeeData = this.state.employeeData;
    let name = this.refs.textName.value;
    let surname = this.refs.textSurname.value;
    let age = this.refs.textAge.value;
    let mf = this.refs.maleRadio.value;
    let fm = this.refs.femaleRadio.value;
    
    let above18 = this.refs.checkBox.value;
    
    let newemployee = {
      "name" : name,
      "surname" :  surname,
      "age": age,
      "mf":mf,
      "fm":fm,
      "above18" : above18
    }
    employeeData.push(newemployee);
    this.setState({
      employeeData : employeeData
    })
      this.refs.myForm.reset();
  }
 
    render(){
      let employeeData = this.state.employeeData;
      return(
        <div>
          <form ref='myForm'>
            <h1> EmployeeData </h1> 
            <label> Name: </label>
            <input type="text" ref = "textName" placeholder=' enter name'/><br/><br/>

            <label> surname: </label>
            <input type="text" ref="textSurname" placeholder='enter a surname'/> <br/><br/>

            <label> Age:</label>
            <input type="text" ref = "textAge" placeholder='enter a age'/> <br/><br/>

             <label> male</label>
            <input type="radio" ref="maleRadio"  value="male" />
            <label>female</label>
            <input type="radio" ref="femaleRadio" value="female"/> <br/><br/> 

            <input type="checkbox" ref="checkBox" value="yes" /><label> above 18? </label> <br/><br/>

            <button onClick={e => this.handleSubmit(e) }> Submit </button>
          </form>
          <table class="table table-bordered border-primary">
            <tr>
              <th>name </th>
              <th> surname</th>
              <th>age</th>
              <th> mf</th>
              <th>above 18</th>

              </tr>
              {
                employeeData.map((data, i) =>
                <tr key={i}>
                  <td>{data.name}</td>
                  <td>{data.surname}</td>
                  <td>{data.age}</td> 
                  <td> {data.mf || data.fm}</td>
                  <td>{data.above18}</td>

                  <td><button>edit</button></td>
                  <td><button onClick={e => this.handledelete(e) } >delete</button></td>
                </tr>
                  
                )
              }
          </table>
          <button onClick={e =>this.handleSorting(e)}> Sort </button>
          </div>
        )
    }
}
export default App ;