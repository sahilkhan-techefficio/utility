import J from 'jail-monkey';
import { Alert } from 'react-native';
import R from 'react-native-exit-app';

const A = async (sList) => {
  let list = '';
  try {
    const B = [
      { name: 'Rooted', method: J.isJailBroken },
      { name: 'Adb Enabled', method: J.AdbEnabled },
      { name: 'MockLocation Enabled', method: J.canMockLocation },
      { name: 'Hook Detected', method: J.hookDetected },
      { name: 'External Storage Enabled', method: J.isOnExternalStorage },
      { name: 'JailBroken Message', method: J.jailBrokenMessage },
      { name: 'Trust Fall', method: J.trustFall },
      { name: 'Dangerous Props', method: () => J.androidRootedDetectionMethods.rootBeer.checkForDangerousProps },
      { name: 'Magisk Binary', method: () => J.androidRootedDetectionMethods.rootBeer.checkForMagiskBinary },
      { name: 'RW Paths', method: () => J.androidRootedDetectionMethods.rootBeer.checkForRWPaths },
      { name: 'Root Native', method: () => J.androidRootedDetectionMethods.rootBeer.checkForRootNative },
      { name: 'Su Binary Exists', method: () => J.androidRootedDetectionMethods.rootBeer.checkForSuBinary },
      { name: 'Su Exists', method: () => J.androidRootedDetectionMethods.rootBeer.checkSuExists },
      { name: 'Potentially Dangerous Apps', method: () => J.androidRootedDetectionMethods.rootBeer.detectPotentiallyDangerousApps },
      { name: 'Root Management Apps', method: () => J.androidRootedDetectionMethods.rootBeer.detectRootManagementApps },
      { name: 'Test Keys Detected', method: () => J.androidRootedDetectionMethods.rootBeer.detectTestKeys }
    ];

    for (const C of B) {

      const D = typeof C.method === 'function' ? C.method() : C.method;
      if (await (typeof D === 'boolean' ? Promise.resolve(D) : D)) {
        list +=`${C.name} \n`
      }
    }
    // console.log(list)
    if(list){
      sList(list)
      Alert.alert('Security Alert',`${list}`, [
        { text: 'OK', onPress: () =>{} }
      ]);
    }
  } catch (E) {
    console.error(E);
  }
};

export default A;


