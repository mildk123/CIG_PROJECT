import React, { Component } from 'react'

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import ImageUploader from 'react-images-upload';


export class AddImage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pictures: [] 
    };
  }

  onDrop = (picture) => {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }
  render() {
    return (

      <Card style={{borderRadius: 0, border: 0}} raised={false}>
        <CardContent>
          <CardContent>
            <h1>Shop Gallery</h1>
          </CardContent>

          <CardContent style={{ padding: 50 }}>
            <ImageUploader
              withIcon={true}
              onChange={this.onDrop}
              maxFileSize={10012345}

              buttonText='Select images'
              buttonStyles={{padding: 10, backgroundColor: '#E55145',borderRadius: 5}}

              label="Max file size: 10mb | Accepted: jpg|png"
              labelStyles={{fontSize: '13px', backgroundColor : '#565656', color : 'white', padding: '5px'}}

              imgExtension={['.jpg', '.png']}
              withPreview={true}
              fileContainerStyle={{backgroundColor : '#eaeaea'}}
              accept="accept=image/*"
            />
          </CardContent>
        </CardContent>

      </Card>

    )
  }
}

export default AddImage
