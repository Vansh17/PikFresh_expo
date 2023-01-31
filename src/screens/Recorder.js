import React from 'react';
// import * as React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import { Camera } from 'expo-camera';
import { Video } from 'expo-av';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import Preprocess from 'react-native-web/dist/cjs/exports/StyleSheet/preprocess';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

export default function Recorder({navigation,route}) {

  const onPressHandlerBanana1=()=>{
    navigation.navigate('BananaQuestion1')
  }


  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [isRecording, setIsRecording] = useState(false);
  const [video, setVideo] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();

      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMicrophonePermission(microphonePermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined || hasMicrophonePermission === undefined) {
    return <Text>Requestion permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted.</Text>
  }

  let recordVideo = () => {
    setIsRecording(true);
    let options = {
      quality: "1080p",
      maxDuration: 60,
      mute: false
    };

    cameraRef.current.recordAsync(options).then((recordedVideo) => {
      setVideo(recordedVideo);
      setIsRecording(false);
    });
  };

  let stopRecording = () => {
    setIsRecording(false);
    cameraRef.current.stopRecording();
  };


  if(route.params.paramkeyapple=="apple")
  {

    const onPressHandler=()=>{
      navigation.navigate('Question')
    }

    if (video) {
      let shareVideo = () => {
        shareAsync(video.uri).then(() => {
          setVideo(undefined);
        });
      };
  
      let saveVideo = () => {
        MediaLibrary.saveToLibraryAsync(video.uri).then(() => {
          setVideo(undefined);
        });
      };
  
      return (
        <SafeAreaView style={styles.container}>
          <Video
            style={styles.video}
            source={{uri: video.uri}}
            useNativeControls
            resizeMode='contain'
            isLooping
          />
          <Pressable  onPress={shareVideo} 
            style={styles.sharebutton}
          >
            <Text style={styles.btntxt}>Share</Text>
          </Pressable>
  
          {hasMediaLibraryPermission ? 
          <Pressable  
          style={styles.savebutton}
          onPress={saveVideo} > 
            <Text style={styles.btntxt}>Save</Text>
          </Pressable>
          : undefined}
  
          <Pressable  
          style={styles.discardbutton}
          onPress={() => setVideo(undefined)} >
            <Text style={styles.btntxt}>Discard</Text>
          </Pressable>
          
          <Pressable style={styles.nextbutton}
          onPress={onPressHandler}
          >
            <Text style={styles.btntxt}>
              Next
            </Text>
          </Pressable>
        </SafeAreaView>
      );
    }
  
  }

  if(route.params.paramkeyapple=="banana")
  {

    const onPressHandler=()=>{
      navigation.navigate('BananaQuestion1')
    }

    if (video) {
      let shareVideo = () => {
        shareAsync(video.uri).then(() => {
          setVideo(undefined);
        });
      };
  
      let saveVideo = () => {
        MediaLibrary.saveToLibraryAsync(video.uri).then(() => {
          setVideo(undefined);
        });
      };
  
      return (
        <SafeAreaView style={styles.container}>
          <Video
            style={styles.video}
            source={{uri: video.uri}}
            useNativeControls
            resizeMode='contain'
            isLooping
          />
          <Pressable  onPress={shareVideo} 
            style={styles.sharebutton}
          >
            <Text style={styles.btntxt}>Share</Text>
          </Pressable>
  
          {hasMediaLibraryPermission ? 
          <Pressable  
          style={styles.savebutton}
          onPress={saveVideo} > 
            <Text style={styles.btntxt}>Save</Text>
          </Pressable>
          : undefined}
  
          <Pressable  
          style={styles.discardbutton}
          onPress={() => setVideo(undefined)} >
            <Text style={styles.btntxt}>Discard</Text>
          </Pressable>
          
          <Pressable style={styles.nextbutton}
          onPress={onPressHandler}
          >
            <Text style={styles.btntxt}>
              Next
            </Text>
          </Pressable>
        </SafeAreaView>
      );
    }
  
  }


  
  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <Button title={isRecording ? "Stop Recording" : "Record Video"} onPress={isRecording ? stopRecording : recordVideo} />
      </View>
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: "#fff",
    alignSelf: "flex-end"
  },
  video: {
    flex: 1,
    alignSelf: "stretch"
  },
  nextbutton:{
    backgroundColor:'green',
    width:120,
    height:40,
    left:125,
    bottom:40,
  },
  discardbutton:{
    backgroundColor:'red',
    width:120,
    height:40,
    right:125,
  },
  savebutton:{
    backgroundColor:'blue',
    width:120,
    height:40,
    right:125,
    bottom:25,
  },
  sharebutton:{
    backgroundColor:'blue',
    width:120,
    height:40,
    left:125,
    bottom:-15,
  },
  btntxt:{
    fontSize:20,
    color:'#ffffff',
    padding:5,
    textAlign:'center',
  }
});