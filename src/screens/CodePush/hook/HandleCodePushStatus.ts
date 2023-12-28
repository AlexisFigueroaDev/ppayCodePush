import codePush from 'react-native-code-push';

export class CodePushSyncStatusHandler {
  private setSyncMessage: (message: string | undefined) => void;

  constructor(setSyncMessage: (message: string | undefined) => void) {
    this.setSyncMessage = setSyncMessage;
  }

  syncStatusChanged(syncStatus: codePush.SyncStatus): void {
    switch (syncStatus) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
        this.setSyncMessage('Checking for update...');
        break;
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        this.setSyncMessage('Downloading update...');
        break;
      case codePush.SyncStatus.AWAITING_USER_ACTION:
        this.setSyncMessage('User waiting...');
        break;
      case codePush.SyncStatus.INSTALLING_UPDATE:
        this.setSyncMessage('Loading update...');
        break;
      case codePush.SyncStatus.UP_TO_DATE:
        this.setSyncMessage('The app is up to date...');
        break;
      case codePush.SyncStatus.UPDATE_IGNORED:
        this.setSyncMessage('Update canceled by user...');
        break;
      case codePush.SyncStatus.UPDATE_INSTALLED:
        this.setSyncMessage('Update installed, Application restarting...');
        break;
      case codePush.SyncStatus.SYNC_IN_PROGRESS:
        this.setSyncMessage('Sync in progress...');
        break;
      case codePush.SyncStatus.UNKNOWN_ERROR:
        this.setSyncMessage('An error occurred during the update...');
        break;
      default:
        this.setSyncMessage(undefined);
        break;
    }
  }
}
