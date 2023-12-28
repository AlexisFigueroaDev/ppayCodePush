export interface DownloadProgress {
  receivedBytes: number;
  totalBytes: number;
}

export class CodePushDownloadProgressHandler {
  private setProgress: (progress: string) => void;

  constructor(setProgress: (progress: string) => void) {
    this.setProgress = setProgress;
  }

  downloadProgressCallback({
    receivedBytes,
    totalBytes,
  }: DownloadProgress): void {
    const currentProgress = Math.round((receivedBytes / totalBytes) * 100);
    this.setProgress(`${currentProgress} %`);
  }
}
