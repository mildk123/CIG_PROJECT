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
              buttonText='Choose images'
              onChange={this.onDrop}
              maxFileSize={10012345}
              label="Max file size: 10mb | Accepted: jpg|png"
              imgExtension={['.jpg', '.png']}
              withPreview={true}
              accept="accept=image/*"
            />
          </CardContent>
        </CardContent>

      </Card>

    )
  }
}

export default AddImage
