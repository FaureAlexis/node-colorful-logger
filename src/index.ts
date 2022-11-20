import { LogType, Log, LogColor, Services } from "./types/logger";

export class Logger {
  output?: string;
  debugMode: boolean;
  log: Log = {
    type: LogType.INFO,
    message: '',
    color: LogColor.INFO,
  };

  constructor(output?: string) {
    this.debugMode = false;
    if (output) {
      this.output = output;
    }
  };

  getDate() {
    return new Date().toLocaleString('fr-FR');
  };

  info(message: string, service?: Services) {
    this.log.type = LogType.INFO;
    this.log.message = message;
    this.log.color = LogColor.INFO;
    if (service) {
      this.log.service = service;
    } else {
        this.log.service = undefined;
    }
    this.createLog();
  };

  success(message: string, service?: Services) {
    this.log.type = LogType.SUCCESS;
    this.log.message = message;
    this.log.color = LogColor.SUCCESS;
    if (service) {
      this.log.service = service;
    } else {
        this.log.service = undefined;
    }
    this.createLog();
  };

  warn(message: string, service?: Services) {
    this.log.type = LogType.WARN;
    this.log.message = message;
    this.log.color = LogColor.WARN;
    if (service) {
      this.log.service = service;
    } else {
        this.log.service = undefined;
    }
    this.createLog();
  };

  error(message: string, service?: Services) {
    this.log.type = LogType.ERROR;
    this.log.message = message;
    this.log.color = LogColor.ERROR;
    if (service) {
      this.log.service = service;
    } else {
        this.log.service = undefined;
    }
    this.createLog();
  };

  debug(message: string, service?: Services) {
    if (this.debugMode) {
      this.log.type = LogType.DEBUG;
      this.log.message = message;
      this.log.color = LogColor.DEBUG;
      if (service) {
        this.log.service = service;
      } else {
        this.log.service = undefined;
      }
      this.createLog();
    } else {
      this.log.type = LogType.DEBUG;
      this.log.message = undefined;
      this.log.color = LogColor.DEBUG;
      if (service) {
        this.log.service = service;
      } else {
        this.log.service = undefined;
      }
    }
  };

  enableDebugMode() {
    this.debugMode = true;
  };

  disableDebugMode() {
    this.debugMode = false;
  };

  createLog() {
    const color: string = this.log.color;
    const end = LogColor.END;
    const finalString: string = `${this.getDate()} - ${color}${this.log.type} - ${this.log.service} - ${this.log.message}${end}`;
    if (this.log.type === LogType.ERROR) {
      console.error(finalString);
    } else {
      console.log(finalString);
    }
  };
};
