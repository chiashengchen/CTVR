import React from 'react'
import { Button, List, Typography, Input } from 'antd'
//import ModalPage from './modalpage';

const { Search } = Input;

export default class Datapass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state ={deps:[]/*, addModalShow : false*/}
  }

  handleSubmit(event){
    console.log(event);
    fetch('http://140.115.54.75:5001/api/values',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      /*body:JSON.stringify({
        departmentID:null,
        departmentString: event
      })*/
      body:event
    }
    )
    .then(res=> res.json())
    .then((result)=>{
      alert(result)
      console.log(result);
    },
    (error)=>{
      alert(error);
      console.log(error);
    }
    )
  }

  componentDidMount(){
    this.refreshList();
    console.log("componetDidMount")
  }

  refreshList(){
    /*fetch('http://140.115.54.75:5001/api/values')
    .then(response=> response.json())
    .then(data =>{
      this.setState({deps:data});
    });*/
    
    this.setState({
      deps:[{"departmentID":1,"departmentString":2},
      {"departmentID":1,"departmentString":2},
      {"departmentID":1,"departmentString":2},
      {"departmentID":1,"departmentString":2},
      {"departmentID":12,"departmentString":23}
    ]
    })
  
  //console.log(deps.map(dep=>{dep.DepartmentID}))
  
  }
  

  render() {
    //let addModalClose=()=> this.setState({addModalShow : false})
    const {deps}=this.state;
    const { history } = this.props
    return (
      <div>
        {/*<p>demo - {config}</p>
        <hr />
        <h3 style={{ marginBottom: 16 }}>Default Size</h3>*/}
        <List
          //header={<div>Header</div>}
          //footer={<div>Footer</div>}
          bordered
          dataSource={deps.map(dep=>
            //<td>{dep.departmentID}</td>
	          <div>{dep.departmentString}</div>
            )}
          renderItem={item => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
        <Button onClick={() => {
          history.goBack()
        }}>back</Button>
        <br />
        {/*input*/}
        <Search
          name="departmentID"
          placeholder="departmentID"
          enterButton="Search"
          size="large"
          onSearch={this.handleSubmit}
        />
      </div>
    )
  }

} // class Page end
