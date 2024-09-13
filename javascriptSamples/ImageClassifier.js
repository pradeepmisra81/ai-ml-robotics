import * as tf from '@tensorflow/tfjs';

function ImageClassifier() {
  const [prediction, setPrediction] = useState(null);

  const classifyImage = async (imageElement) => {
    const model = await tf.loadLayersModel('/path-to-your-model/model.json');
    const prediction = model.predict(imageElement);
    setPrediction(prediction);
  };

  return (
    <div>
      <img src="/path-to-image.jpg" alt="Image" ref={classifyImage} />
      {prediction && <p>Prediction: {prediction}</p>}
    </div>
  );
}

export default ImageClassifier;
