import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { uploadImage } from '../actions';

const CLOUDINARY_UPLOAD_PRESET = 'yzo22f3q';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dm4fqf9nm/image/upload';

class ImageUpload extends Component {

  static propTypes = {
    uploadImage: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      uploadedFileCloudinaryUrl: '',
    };
  }

  onImageDrop = (files) => {
    this.setState({
      uploadedFile: files[0],
    });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url,
        });
        this.props.uploadImage(response.body.secure_url);
      }
    });
  }


  render() {
    return (
      <div>
        <div className="FileUpload">
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop}
          >
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
        </div>
        <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? null :
          <div>
            <p>{this.state.uploadedFile.name}</p>
            <img src={this.state.uploadedFileCloudinaryUrl} />
          </div>}
        </div>
      </div>
    );
  }
}

export default connect(null, { uploadImage })(ImageUpload);
