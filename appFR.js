// Complete Project Details at: https://RandomNerdTutorials.com/
  
// Database Paths
const dbPathTemp  = 'Room1/temp';
const dbPathHum  = 'Room1/hum';
const dbPathFan  = 'Room1/fan';
const dbPathLight  = 'Room1/light';
const dbPathFanbtn  = 'Room1/fanbtn';
const dbPathLightbtn  = 'Room1/lightbtn';


// Database references 
var dbRefTemp   = database.ref(dbPathTemp);
var dbRefHum   = database.ref(dbPathHum);
var dbRefFan   = database.ref(dbPathFan);
var dbRefLight   = database.ref(dbPathLight);
var dbRefFansw   = database.ref(dbPathFanbtn);
var dbRefLightsw   = database.ref(dbPathLightbtn);

const dbPathTempinput  = 'Room1/tempinput';
var dbRefTempinput   = database.ref(dbPathTempinput);

// Update database uppon button click
function adjust(){
  // dbRefTempinput.set(1);
  var x = document.getElementById("tempadjust").value;
  console.log('Temp : ' + x);
  dbRefTempinput.set(x); 
}

//Write data from Web Page to Firebase 
function checkstatefan()
{
    var chkBoxFan = document.getElementById('fansw');
    if (chkBoxFan.checked)
    {
      console.log('State : ' + chkBoxFan.checked);
      dbRefFansw.set('ON');  
    }
    else{
      console.log('State : ' + chkBoxFan.checked);
      dbRefFansw.set('OFF');  
    }
}

function checkstatelight()
{
    var chkBoxlight = document.getElementById('lightsw');
    if (chkBoxlight.checked)
    {
      console.log('State : ' + chkBoxlight.checked);
      dbRefLightsw.set('ON');
    }
    else{
      console.log('State : ' + chkBoxlight.checked);
      dbRefLightsw.set('OFF');
    }
}

// Display data from Firebase to Web Page
// Attach an asynchronous callback to read the data
dbRefTemp.on('value', (snapshot) => {
  console.log(snapshot.val());
  document.getElementById("temp").innerHTML = snapshot.val();
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

// Attach an asynchronous callback to read the data
dbRefHum.on('value', (snapshot) => {
  console.log(snapshot.val());
  document.getElementById("hum").innerHTML = snapshot.val();
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

// Attach an asynchronous callback to read the data
dbRefFan.on('value', (snapshot) => {
  console.log(snapshot.val());
  document.getElementById("fan").innerHTML = snapshot.val();
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});


// Attach an asynchronous callback to read the data
dbRefLight.on('value', (snapshot) => {
  console.log(snapshot.val());
  document.getElementById("light").innerHTML = snapshot.val();
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});



