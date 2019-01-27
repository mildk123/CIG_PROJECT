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

      <Card>
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
              buttonStyles={{padding: 20, backgroundColor: '#E55145'}}

              label="Max file size: 10mb | Accepted: jpg|png"
              labelStyles={{fontSize: '18px', backgroundColor : 'black', color : 'white', padding: '5px'}}

              imgExtension={['.jpg', '.png']}
              withPreview={true}
              fileContainerStyle={{backgroundColor : '#eaeaea',}}
              accept="accept=image/*"
            />
          </CardContent>
        </CardContent>

      </Card>

    )
  }
}

export default AddImage
