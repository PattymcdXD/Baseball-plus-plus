import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
  ToastAndroid,
  Modal,
  Vibration
} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  let [ballCount, setBallCount] = useState(0);
  let [strikeCount, setStrikeCount] = useState(0);
  let [outCount, setOutCount] = useState(0);


  let [homeCount, setHomeCount] = useState(0);
  let [awayCount, setAwayCount] = useState(0);


  let [inningCount, setInningCount] = useState(1);
  let [topOrBottom, setTopOrBottom] = useState('Top');
  
  let [modalVisible, setModalVisible] = useState(false);

  const handleInningChange = () => {
    if (topOrBottom === 'Top') {
      setTopOrBottom('Bot');
    } else {
      setTopOrBottom('Top');
      setInningCount(inningCount + 1);
    }
  }

  const handleInningChange2 = () => {
    if (topOrBottom === 'Top') {
      setTopOrBottom('Bot');
    } else {
      setTopOrBottom('Top');
      setInningCount(inningCount - 1);
    }
  }
  
  const resetInning = () => {
    setInningCount(1),
    setTopOrBottom("Top"),
    ToastAndroid.show('Innings Reset', ToastAndroid.SHORT);
  }
  
    const handleInningChange3 = () => {
    Alert.alert('Reset Innings?', 'Are you sure you want to reset the inning number?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: resetInning},
    ]);
  }

  
  
  const ball = 100;
  
  const strike = 300;
  
  const out = 500;

 
 
  
  

  if (inningCount < 0) {
    setInningCount(0)
  }




  if (outCount == 4) {
    return setOutCount((outCount = 0));
  }

  if (strikeCount == 4) {
    return setStrikeCount((strikeCount = 0));
  }

  if (ballCount == 5) {
    return setBallCount((ballCount = 0));
  }

  if (homeCount == -1) {
    return setHomeCount((homeCount = 0));
  }
  if (awayCount == -1) {
    return setAwayCount((awayCount = 0));
  }

  return (
    
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="gray" />
      <ScrollView horizontal={true} pagingEnabled={true}>
        <View style={styles.mainPage}>
          <View style={styles.navBar}>
            <TouchableOpacity 
            style={styles.menuButton} 
            onPress={() => setModalVisible(true)}>
              <View style={styles.menu} />
              <View style={styles.empty} />
              <View style={styles.menu} />
              <View style={styles.empty} />
              <View style={styles.menu} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button}
          onPress={() => setBallCount(ballCount + 1)}>
            <Text style={styles.buttonText}>
              Ball
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
          onPress={() => setStrikeCount(strikeCount + 1)}>
            <Text style={styles.buttonText}>
              Strike
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
          onPress={() => setOutCount(outCount + 1)}>
            <Text style={styles.buttonText}>
              Out
            </Text>
          </TouchableOpacity>

          <View style={{height: 5 * (windowHeight / 100)}}>
          </View>


          <View style={{height: 40 * (windowHeight / 100), width: 85 * (windowWidth / 100), backgroundColor: "gray", borderRadius: 25,}}>
            <View style={{flexDirection: "row"}}>
              <View style={{height: 13.33 * (windowHeight / 100), width: 35 * (windowWidth / 100), justifyContent: "center"}}>
                <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 5 * (windowHeight / 100)}}>
                  Ball
                </Text>
              </View>
              <View style={{justifyContent: "center"}}>
                <View style={styles.circle}
                >
                </View>
              </View>
              <View style={styles.between}/>  
              <View style={{justifyContent: "center"}}>
                <View style={styles.circle}>
                </View>
              </View>
              <View style={styles.between}/>
              <View style={{justifyContent: "center"}}>
                <View style={styles.circle}>
                </View>
              </View>
              <View style={styles.between}/>
              <View style={{justifyContent: "center"}}>
                <View style={styles.circle}>
                </View>
              </View>  
              <View style={{height: 13.33 * (windowHeight / 100), width: 17 * (windowWidth / 100), alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontSize: 8 * (windowHeight / 100), fontWeight: "bold"}}>
                  {ballCount}
                </Text>
              </View>
            </View>

            <View style={{flexDirection: "row"}}>
              <View style={{height: 13.33 * (windowHeight / 100), width: 35 * (windowWidth / 100), justifyContent: "center"}}>
                <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 5 * (windowHeight / 100)}}>
                  Strike
                </Text>
              </View>
              <View style={{justifyContent: "center"}}>
                <View style={styles.circle}>
                </View>
              </View>
              <View style={styles.between}/>  
              <View style={{justifyContent: "center"}}>
                <View style={styles.circle}>
                </View>
              </View>
              <View style={styles.between}/>
              <View style={{justifyContent: "center"}}>
                <View style={styles.circle}>
                </View>
              </View>
              <View style={styles.between}/>
              <View style={{height: 13.33 * (windowHeight / 100), width: 6 * (windowWidth / 100)}}>
              </View>
              <View style={{height: 13.33 * (windowHeight / 100), width: 17 * (windowWidth / 100), alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontSize: 8 * (windowHeight / 100), fontWeight: "bold"}}>
                  {strikeCount}
                </Text>
              </View>
            </View>
              
            
            <View style={{flexDirection: "row"}}>
              <View style={{height: 13.33 * (windowHeight / 100), width: 35 * (windowWidth / 100), justifyContent: "center"}}>
                <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 5 * (windowHeight / 100)}}>
                  Out
                </Text>
              </View>

              <View style={{justifyContent: "center"}}>
                <View style={styles.circle}>
                </View>
              </View>
              <View style={styles.between}/>  
              <View style={{justifyContent: "center"}}>
                <View style={styles.circle}>
                </View>
              </View>
              <View style={styles.between}/>
              <View style={{justifyContent: "center"}}>
                <View style={styles.circle}>
                </View>
              </View>
              <View style={styles.between}>
              </View>
              <View style={{height: 13.33 * (windowHeight / 100), width: 6 * (windowWidth / 100)}}>
              </View>
              <View style={{height: 13.33 * (windowHeight / 100), width: 17 * (windowWidth / 100), alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontSize: 8 * (windowHeight / 100), fontWeight: "bold"}}>
                  {outCount}
                </Text>
              </View>  
              
            </View>  
            

          </View>


        </View>  

        
        
        
        
       
        
        <View style={styles.mainPage}>
          <View style={styles.navBar}>
            <TouchableOpacity 
            style={styles.menuButton} 
            onPress={() => setModalVisible(true)}>
              <View style={styles.menu} />
              <View style={styles.empty} />
              <View style={styles.menu} />
              <View style={styles.empty} />
              <View style={styles.menu} />
            </TouchableOpacity>
          </View>

        <View style={{alignItems: "center", height: 25 * (windowHeight / 100), width: windowWidth}}>
          <View style={{backgroundColor: "white", height: 1 * (windowHeight / 100)}}/>
            <View style={{backgroundColor: "gray", height: 20 * (windowHeight / 100), width: 40 * (windowWidth / 100), borderRadius: 50, alignItems: "center", justifyContent: "center"}}>
            <View style={{backgroundColor: "#ecf0f1", height: 19 * (windowHeight / 100), width: 38 * (windowWidth / 100), borderRadius: 45, alignItems: "center", justifyContent: "center"}}>
              <Text style={{fontSize: 8 * (windowHeight / 100)}}>
                {`${inningCount}`}
              </Text>
              <Text style={{fontSize: 5 * (windowHeight / 100)}}>
                {`${topOrBottom}`}
              </Text>  
            </View>
            </View>
          </View>


          <TouchableOpacity 
          style={styles.button} 
          onPress={handleInningChange}>
            <View style={{justifyContent: "center", alignItems: "center"}}>
              <Text style={styles.buttonText}>
                ↑
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.button} 
          onPress={handleInningChange2}>
            <View style={{justifyContent: "center", alignItems: "center"}}>
              <Text style={styles.buttonText}>
                ↓
              </Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
          style={styles.button} 
          onPress={handleInningChange3}>
            <View style={{justifyContent: "center", alignItems: "center"}}>
              <Text style={styles.buttonText}>
                ↻
              </Text>
            </View>
          </TouchableOpacity>
          

        </View>  








        <View style={styles.mainPage}>
          <View style={styles.navBar}>
           <TouchableOpacity 
            style={styles.menuButton} 
            onPress={() => setModalVisible(true)}>
              <View style={styles.menu} />
              <View style={styles.empty} />
              <View style={styles.menu} />
              <View style={styles.empty} />
              <View style={styles.menu} />
            </TouchableOpacity>


          </View> 

          <View style={{height: 3 * (windowHeight / 100), backgroundColor: "#ecf0f1"}}/>
          <View style={{alignItems: "center"}}>
            <View style={{height: 25 * (windowHeight / 100), width: 85 * (windowWidth / 100), backgroundColor: "gray", borderRadius: 25, flexDirection: "row"}}>
              <View style={{width: 42.5 * (windowWidth / 100), height: 25 * (windowHeight / 100)}}>
                <View style={{width: 42.5 * (windowWidth / 100), height: 12.5 * (windowHeight / 100), justifyContent: "center", alignItems: "center"}}>
                  <Text style={styles.buttonText}>
                    Home:
                  </Text>
                </View>
                <View style={{width: 42.5 * (windowWidth / 100), height: 12.5 * (windowHeight / 100), justifyContent: "center", alignItems: "center"}}>
                  <Text style={{fontSize: 10 * (windowHeight / 100), fontWeight: 'bold', color: '#000', textAlign: 'center',}}>
                    {homeCount}
                  </Text>
                </View>
              </View>

              <View style={{width: 42.5 * (windowWidth / 100), height: 15 * (windowHeight / 100)}}>
                <View style={{width: 42.5 * (windowWidth / 100), height: 25 * (windowHeight / 100)}}>
                <View style={{width: 42.5 * (windowWidth / 100), height: 12.5 * (windowHeight / 100), justifyContent: "center", alignItems: "center"}}>
                  <Text style={styles.buttonText}>
                    Away:
                  </Text>
                </View>
                <View style={{width: 42.5 * (windowWidth / 100), height: 12.5 * (windowHeight / 100), justifyContent: "center", alignItems: "center"}}>
                  <Text style={{fontSize: 10 * (windowHeight / 100), fontWeight: 'bold', color: '#000', textAlign: 'center',}}>
                    {awayCount}
                  </Text>
                </View>
              </View>

              <View style={{width: 42.5 * (windowWidth / 100), height: 15 * (windowHeight / 100)}}>
              </View>


          <View style={{alignItems: "center"}}>

            <TouchableOpacity 
            style={styles.button} 
            onPress={homeCount + 1}>
              <View style={{justifyContent: "center", alignItems: "center"}}>
                <Text style={styles.buttonText}>
                  Home
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.button} 
            onPress={handleInningChange2}>
              <View style={{justifyContent: "center", alignItems: "center"}}>
                <Text style={styles.buttonText}>
                  Away
                </Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity 
            style={styles.button} 
            onPress={handleInningChange3}>
              <View style={{justifyContent: "center", alignItems: "center"}}>
                <Text style={styles.buttonText}>
                  Reset
                </Text>
              </View>
            </TouchableOpacity>
          </View>  

              </View>




              
            </View>
          </View>
        </View> 
        
        
        <Modal
        animationIn="slideInRight"
        animationOut="slideOutLeft"
        animationInTiming={1000}
        animationOutTiming={1000}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={{height: (windowHeight), width : 50 * (windowWidth / 100), backgroundColor: "gray", borderColor: "black", borderRightWidth: 4}}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hit and Run</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> 

      </ScrollView>  
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    position: 'relative',
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  mainPage: {
    backgroundColor: '#ecf0f1',
    width: windowWidth,
    height: windowHeight,
    alignItems: "center",
  },
  navBar: {
    backgroundColor: 'gray',
    height: 7 * (windowHeight / 100),
    width: windowWidth,
    justifyContent: 'center',
    padding: 9,
  },
  menu: {
    backgroundColor: 'black',
    height: 0.6 * (windowHeight / 100),
    width: 7 * (windowWidth / 100),
    borderRadius: 99,
  },
  empty: {
    backgroundColor: 'gray',
    height: 0.3 * (windowHeight / 100),
  },
  menuButton: {
    height: 2 * (windowHeight / 100),
    width: 7 * (windowWidth / 100),
  },
  button: {
    backgroundColor: 'gray',
    padding: 15,
    borderRadius: 50,
    margin: 10,
    height: 10 * (windowHeight / 100),
    width: 50 * (windowWidth / 100),
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 5 * (windowHeight / 100),
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  circle: {
    height: 3 * (windowHeight / 100), 
    width: 6 * (windowWidth / 100), 
    borderRadius: 100,  
    padding: 2 * (windowWidth / 100),
  },
  between: {
    width: 3 * (windowWidth / 100),
    backgroundColor: "gray",
  }
});
