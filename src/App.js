import { Component } from "react";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import SearchField from "./components/SearchField";
import Heading from "./components/Heading";
import ParticlesBg from "particles-bg";
import FaceDetection from "./components/FaceDetection";
import SignIn from "./components/SignIn";
import Register from "./components/Register";

const returnRequestOptions = (imageUrl) => {
  const PAT = "88fc1a140c1a4241a0843e0f47f5957a";
  const USER_ID = "kamran";
  const APP_ID = "face-detection-project";
  const MODEL_ID = "face-detection";
  const IMAGE_URL = imageUrl;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  return requestOptions;
};

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onRouteChange = (route) => {
     if (route === "signout") {
       this.setState(initialState);
     } else if (route === "home") {
       this.setState({ isSignedIn: true });
     }
     this.setState({ route: route });
  };
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch(
      "https://api.clarifai.com/v2/models/face-detection/outputs",
      returnRequestOptions(this.state.input)
    )
      .then((response) => response.json())
      .then((result) => this.displayBox(this.calculateFaceLocation(result)))
      .catch((error) => console.log("error", error));
  };

  calculateFaceLocation = (data) => {
    const FaceLocation =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: FaceLocation.left_col * width,
      topRow: FaceLocation.top_row * height,
      rightCol: width - FaceLocation.right_col * width,
      bottomRow: height - FaceLocation.bottom_row * height,
    };
  };

  displayBox = (box) => {
    this.setState({ box: box });
  };
  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <ParticlesBg className="particles" type="cobweb" bg={true} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {
        route === "home" ? (
          <div>
            <Logo />
            <Heading />
            <SearchField
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
            />
            <FaceDetection imageUrl={imageUrl} box={box} />
          </div>
        ) : route === "signin" ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}
export default App;
