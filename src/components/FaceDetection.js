import React from 'react'

const FaceDetection = ({ imageUrl, box }) => {
  return (
    <div className="center mt4">
      <div className="absolute mt2">
        <img
          id="inputImage"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        <div
          className="boundingBox"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        ></div>
      </div>
    </div>
  );
}

export default FaceDetection