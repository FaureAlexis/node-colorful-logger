import { verify } from 'crypto';
import { Logger } from '../src/index';
import { LogType, Services, LogColor } from '../src/types/logger';
import DoneCallback = jest.DoneCallback;

describe('Testing Logger', () => {
  let logger: Logger;
  beforeAll(() => {
    logger = new Logger();
  });
  afterAll((done: DoneCallback) => {
    done();
  });
  it('Activate debug mode', () => {
    logger.enableDebugMode();
    expect(logger.debugMode).toBe(true);
  });
  it('Deactivate debug mode', () => {
    logger.disableDebugMode();
    expect(logger.debugMode).toBe(false);
  });
  it('Create a Success log', () => {
    logger.success('Success message', Services.API);
    expect(logger.log.type).toBe(LogType.SUCCESS);
    expect(logger.log.message).toBe('Success message');
    expect(logger.log.color).toBe(LogColor.SUCCESS);
    expect(logger.log.service).toBe(Services.API);
  });
  it('Create a Info log', () => {
    logger.info('Info log', Services.API);
    expect(logger.log.type).toEqual(LogType.INFO);
    expect(logger.log.message).toEqual('Info log');
    expect(logger.log.color).toBe(LogColor.INFO);
    expect(logger.log.service).toEqual(Services.API);
  });
  it('Create a Warn log', () => {
    logger.warn('Warn log', Services.API);
    expect(logger.log.type).toEqual(LogType.WARN);
    expect(logger.log.message).toEqual('Warn log');
    expect(logger.log.color).toBe(LogColor.WARN);
    expect(logger.log.service).toEqual(Services.API);
  });
  it('Create a Error log', () => {
    logger.error('Error log', Services.API);
    expect(logger.log.type).toEqual(LogType.ERROR);
    expect(logger.log.message).toEqual('Error log');
    expect(logger.log.color).toBe(LogColor.ERROR);
    expect(logger.log.service).toEqual(Services.API);
  });
  it('Create a Debug log without debug mode enabled', () => {
    logger.debug('Debug log', Services.API);
    expect(logger.log.type).toEqual(LogType.DEBUG);
    expect(logger.log.message).toEqual(undefined);
    expect(logger.log.color).toBe(LogColor.DEBUG);
    expect(logger.log.service).toEqual(Services.API);
  });
  it('Create a Debug log with debug mode enabled', () => {
    logger.enableDebugMode();
    logger.debug('Debug log', Services.API);
    expect(logger.log.type).toEqual(LogType.DEBUG);
    expect(logger.log.message).toEqual('Debug log');
    expect(logger.log.color).toBe(LogColor.DEBUG);
    expect(logger.log.service).toEqual(Services.API);
    logger.disableDebugMode();
  });
  it('Create a Success log without service', () => {
    logger.success('Success log');
    expect(logger.log.type).toEqual(LogType.SUCCESS);
    expect(logger.log.message).toEqual('Success log');
    expect(logger.log.color).toBe(LogColor.SUCCESS);
    expect(logger.log.service).toEqual(undefined);
  });
  it('Create a Info log without service', () => {
    logger.info('Info log');
    expect(logger.log.type).toEqual(LogType.INFO);
    expect(logger.log.message).toEqual('Info log');
    expect(logger.log.color).toBe(LogColor.INFO);
    expect(logger.log.service).toEqual(undefined);
  });
  it('Create a Warn log without service', () => {
    logger.warn('Warn log');
    expect(logger.log.type).toEqual(LogType.WARN);
    expect(logger.log.message).toEqual('Warn log');
    expect(logger.log.color).toBe(LogColor.WARN);
    expect(logger.log.service).toEqual(undefined);
  });
  it('Create a Error log without service', () => {
    logger.error('Error log');
    expect(logger.log.type).toEqual(LogType.ERROR);
    expect(logger.log.message).toEqual('Error log');
    expect(logger.log.color).toBe(LogColor.ERROR);
    expect(logger.log.service).toEqual(undefined);
  });
  it('Create a debug log without service and debug mode', () => {
    logger.debug('Debug log');
    expect(logger.log.type).toEqual(LogType.DEBUG);
    expect(logger.log.message).toEqual(undefined);
    expect(logger.log.color).toBe(LogColor.DEBUG);
    expect(logger.log.service).toEqual(undefined);
  });
  it('Create a debug log without service and debug mode enabled', () => {
    logger.enableDebugMode();
    logger.debug('Debug log');
    expect(logger.log.type).toEqual(LogType.DEBUG);
    expect(logger.log.message).toEqual('Debug log');
    expect(logger.log.color).toBe(LogColor.DEBUG);
    expect(logger.log.service).toEqual(undefined);
    logger.disableDebugMode();
  });
  it('Create a log and write it to a log file', () => {
    const FileLogger = new Logger('test');
    logger.success('Success log', Services.API);
    expect(FileLogger.output).toBe('test');
  });
  it('Create an error log and write to a log file', () => {
    const FileLogger = new Logger('test');
    logger.error('Error log', Services.API);
    expect(FileLogger.output).toBe('test');
  });
});
