import {useEffect, useState} from 'react';

import SplashScreen from 'react-native-bootsplash';
import codePush, {DownloadProgress} from 'react-native-code-push';
// import {CodePushDownloadProgressHandler} from './handleCodePushProgress';
// import {CodePushSyncStatusHandler} from './HandleCodePushStatus';

interface UseCodePushReturn {
  syncMessage?: string;
  progress?: string;
  updateCheck?: unknown;
  catchError?: unknown;
  syncStatusPush?: unknown;
  statusSelected?: unknown;
}

const useCodePush = (): UseCodePushReturn => {
  const [syncMessage, setSyncMessage] = useState<string>();
  const [progress, setProgress] = useState<string>();
  const [updateCheck, setUpdateCheck] = useState<unknown>();
  const [catchError, setCatchError] = useState<unknown>();
  const [syncStatusPush, setSyncStatusPush] = useState<unknown>();
  const [statusSelected, setStatusSelected] = useState<unknown>();

  // const codePushSyncHandler = new CodePushSyncStatusHandler(
  //   (message: string | undefined) => {
  //     // Implementa tu lógica para setSyncMessage
  //     setSyncMessage(message);
  //   },
  // );

  // const codePushDownloadProgressHandler = new CodePushDownloadProgressHandler(
  //   progress => {
  //     // Lógica para setProgress
  //     setProgress(progress);
  //   },
  // );

  const syncStatusChangedCallback = (syncStatus: codePush.SyncStatus) => {
    switch (syncStatus) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
        setSyncMessage('Checking for update...');
        break;
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        setSyncMessage('Downloading update...');
        break;
      case codePush.SyncStatus.AWAITING_USER_ACTION:
        setSyncMessage('User waiting...');
        break;
      case codePush.SyncStatus.INSTALLING_UPDATE:
        setSyncMessage('Loading update...');
        break;
      case codePush.SyncStatus.UP_TO_DATE:
        setSyncMessage('The app is up to date...');
        break;
      case codePush.SyncStatus.UPDATE_IGNORED:
        setSyncMessage('Update canceled by user...');
        break;
      case codePush.SyncStatus.UPDATE_INSTALLED:
        setSyncMessage('Update installed, Application restarting...');
        break;
      case codePush.SyncStatus.SYNC_IN_PROGRESS:
        setSyncMessage('Sync in progress...');
        break;
      case codePush.SyncStatus.UNKNOWN_ERROR:
        setSyncMessage('An error occurred during the update...');
        break;
      default:
        setSyncMessage(undefined);
        break;
    }
  };

  const downloadProgressCallback = ({
    receivedBytes,
    totalBytes,
  }: DownloadProgress) => {
    const currentProgress = Math.round((receivedBytes / totalBytes) * 100);
    setProgress(`${currentProgress} %`);
  };

  useEffect(() => {
    SplashScreen.hide({fade: true});
    const checkForUpdates = async () => {
      codePush.notifyAppReady();
      codePush.CheckFrequency.ON_APP_RESUME;
      try {
        const update = await codePush.checkForUpdate();
        // const update = true;
        setUpdateCheck(JSON.stringify(update));
        setSyncStatusPush(JSON.stringify(codePush.SyncStatus));
        if (update) {
          codePush.sync(
            {
              installMode: codePush.InstallMode.IMMEDIATE,
              minimumBackgroundDuration: 600,
            },
            syncStatusChangedCallback,
            // codePushSyncHandler.syncStatusChanged.bind(codePushSyncHandler),
            downloadProgressCallback,
            // codePushDownloadProgressHandler.downloadProgressCallback.bind(
            //   codePushDownloadProgressHandler,
            // ),
          );
        }
      } catch (error) {
        console.error('ERROOOOOOR:', error);
        setCatchError(error);
      }
    };
    checkForUpdates();
  }, [updateCheck]);

  return {
    syncMessage,
    progress,
    updateCheck,
    catchError,
    syncStatusPush,
    statusSelected,
  };
};

export default useCodePush;
