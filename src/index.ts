import { LogType, Log, LogColor, Services } from "./types/logger";
import fs from 'fs';
import util from 'util';

export class Logger {
  logFile: any;
  errorFile: any;
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
      this.logFile = fs.createWriteStream(output + '.log', { flags: 'w' });
      this.errorFile = fs.createWriteStream(output + '.error.log', { flags: 'w' });
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

  writeErrorLog(log: string, fileLog: string) {
    if (this.output) {
      this.errorFile.write(util.format(fileLog) + '\n');
    }
    console.error(log);
  };

  writeLog(log: string, fileLog: string) {
    if (this.output) {
      this.logFile.write(util.format(fileLog) + '\n');
    }
    console.log(log);
  };

  createLog() {
    const color: string = this.log.color;
    const end: string = LogColor.END;
    let logString: string;
    let fileString: string;
    if (this.log.service !== undefined) {
      logString = `${this.getDate()} - ${color}${this.log.type} - ${this.log.service} - ${this.log.message}${end}`;
      fileString = `${this.getDate()} - ${this.log.type} - ${this.log.service} - ${this.log.message}`;
    } else {
      logString = `${this.getDate()} - ${color}${this.log.type} - ${this.log.message}${end}`;
      fileString = `${this.getDate()} - ${this.log.type} - ${this.log.message}`;
    }
    this.log.type === LogType.ERROR ? this.writeErrorLog(logString, fileString) : this.writeLog(logString, fileString);
  };
};
