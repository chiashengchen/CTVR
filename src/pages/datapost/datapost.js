import React from 'react'
import { Button, List, Typography } from 'antd'

export default class Datapass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state ={deps:[]}
  }

  componentDidMount(){
    this.refreshList();
    console.log("componetDidMount")
  }

  refreshList(){
    fetch('http://140.115.54.75:5001/api/values')
    .then(response=> response.json())
    .then(data =>{
      this.setState({deps:data});
    });
    
    /*this.setState({
      deps:[{"DepartmentID":1,"Value":2},
      {"DepartmentID":1,"Value":2},
      {"DepartmentID":1,"Value":2},
      {"DepartmentID":1,"Value":2},
      {"DepartmentID":12,"Value":23}
    ]
    })
  */
  //console.log(deps.map(dep=>{dep.DepartmentID}))
  
  }
  

  render() {

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
	    <td>{dep.departmentString}</td>
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
      </div>
    )
  }

} // class Page end
