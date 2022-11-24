export enum Services {
  AUTH = 'API Authentification',
  USER = 'User Authentification',
  LOG = 'Logger',
  DATABASE = 'Database',
  MAIL = 'Mail service',
  MIDDLEWARE = 'Errors middleware',
  API = 'API',
}

export enum LogType {
  INFO = 'INFO',
  ERROR = 'ERROR',
  WARN = 'WARN',
  DEBUG = 'DEBUG',
  SUCCESS = 'SUCCESS',
}

export enum LogColor {
  INFO = '\x1b[34m',
  ERROR = '\x1b[31m',
  WARN = '\x1b[33m',
  DEBUG = '\x1b[36m',
  SUCCESS = '\x1b[32m',
  END = '\x1b[0m',
}

export interface Log {
  type: LogType;
  message: string | undefined;
  color: LogColor;
  service?: Services;
}
