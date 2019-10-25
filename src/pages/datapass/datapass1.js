import React from 'react'
import { Button, List, Typography } from 'antd'

export default class Page extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state ={deps:[]}
  }

  render() {
    const { params: { config }, history } = this.props
    return (
      <div>
        <h3 style={{ marginBottom: 16 }}>Default Size</h3>
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
        <h3 style={{ margin: '16px 0' }}>Small Size</h3>
        <List
          size="small"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
        <h3 style={{ margin: '16px 0' }}>Large Size</h3>
        <List
          size="large"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
        <Button onClick={() => {
          history.goBack()
        }}>back</Button>
      </div>
    )
  }

} // class Page end
