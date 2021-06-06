/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace WebdriverIO {
  interface Browser {
    browserCustomCommand: (arg: any) => Promise<void>
  }

  interface MultiRemoteBrowser {
    browserCustomCommand: (arg: any) => Promise<void>
  }

  interface Element {
    elementCustomCommand: (arg: any) => Promise<number>
  }

  interface Browser {
    customConfig: () => any;
  }

  interface BrowserMetrics {
    firstMeaningfulPaint?: () => number;
    firstInteractive?: () => number;
    speedIndex?: () => number;
  }
}

declare module '@wdio/logger'
