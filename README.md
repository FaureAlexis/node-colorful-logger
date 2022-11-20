# node-colorful-logger
![Coverage](https://img.shields.io/codecov/c/github/FaureAlexis/node-colorful-logger) ![Stars](https://img.shields.io/github/stars/FaureAlexis/node-colorful-logger?style=social)

A simple logger with colors &amp; timestamp, without useless dependencies. 

### Usage

Logger which write logs to stdout

```ts
const logger = new Logger();
```

Below example create a logger which write logs in stdout/err and in log files ('./app.log')

```ts
import { Logger } from "node-colorful-logger";
const logger = new Logger(process.cwd() + '/app');

logger.info('Info log');
logger.success('Success log');
logger.error('Error log');
logger.warn('Warn log');
logger.debug('Debug log (without debug mode');
logger.enableDebugMode();
logger.debug('Debug log (with debug mode');
logger.disableDebugMode();
```

output :
```
20/11/2022, 12:02:00 - INFO - Info log         //stdout
20/11/2022, 12:02:00 - SUCCESS - Success log   //stdout
20/11/2022, 12:02:00 - ERROR - Error log      //stderr
20/11/2022, 12:02:00 - WARN - Warn log        //stdout
20/11/2022, 12:02:00 - DEBUG - Debug log (with debug mode) //stdout
```

 With colors : 
 
 ![Colorful output](https://github.com/FaureAlexis/node-colorful-logger/blob/main/image.png?raw=true)
 
 
