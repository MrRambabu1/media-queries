import logo from './logo.svg';
import './App.css';
import shiva3 from "./images/Shiva3.jpg";
import srcsong from "./mediasrc/Manassa.mp3";
import srcvideo from "./mediasrc/184972-874460313.mp4"

function App() {
  return (
    <div className="App maindiv" >
      <h1>Image using Internet </h1>
      <div><img src="https://t4.ftcdn.net/jpg/05/97/92/25/360_F_597922554_NchpW6uj35RPOI4yeJeT4ElPxIHbHJlx.jpg"></img>
      </div>
      <h1>Image using Public folder</h1>
           <div>
            <img src="./images/Shiva2.jpg"></img>
           </div>
           <h1>Image using Src folder</h1>
           <div>
            <img src={shiva3}></img>
           </div>
           <div><h1>Audio section</h1>
           <h2>Access audio file from internet</h2>
           <div>
            <audio src="https://services.brninfotech.com/tws/media2/songs/GeorgeReddy/05%20-%20Jajimogulali.mp3" controls></audio>
           </div>
           <h2>Access audio file from Local public folder</h2>
           <div>
            <audio src="./Media/Atu Nuvve.mp3" controls></audio>
           </div>
           <h2>Access audio file from Src public folder</h2>
           <div>
            <audio src={srcsong} controls></audio>
           </div></div>

           <div><h1>Video section</h1>
           <h2>Access Video file from internet</h2>
           <div className="videodiv">
            <video src="https://services.brninfotech.com/tws/media2/trailers/saaho.mp4" autoPlay muted controls></video>
           </div>
           <h2>Access Video file from Local public folder</h2>
           <div className="videodiv">
            <video src="./Media/13704-250154065.mp4"  controls autoPlay muted></video>
           </div>
           <h2>Access Video file from Src public folder</h2>
           <div className="videodiv">
            <video src={srcvideo} controls autoPlay muted></video>
           </div></div>

           

           

  
    </div>
  );
}

export default App;
