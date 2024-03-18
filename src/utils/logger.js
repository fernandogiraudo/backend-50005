import winston from "winston";

const customLevelOptions = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        debug: 4
    },
    colors: {
        fatal: 'red',
        error: 'magenta',
        warning: 'yellow',
        info: 'blue',
        debug: 'white'
    }
}

const logger = winston.createLogger({
    levels: customLevelOptions.levels,
    transports: [
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.colorize({colors: customLevelOptions.colors}),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            level: 'warning',
            filename: './customLog.log',
            format: winston.format.simple()
        })
    ]
})

// const logger = winston.createLogger({
//     transports: [
//         new winston.transports.Console({level: 'http'}),
//         new winston.transports.File({filename: './errors.log', level: 'warn'})
//     ]
// });

// const devLogger = winston.createLogger({
//   transports: [new winston.transports.Console({ level: "verbose" })],
// });

// const prodLogger = winston.createLogger({
//   transports: [
//     new winston.transports.Console({ level: "http" }),
//     new winston.transports.File({ filename: "./prod-logs.log", level: "warn" }),
//   ],
// });

export const addLogger = (req, res, next) => {
//   switch (process.env.NODE_ENV) {
//     case "development":
//       req.logger = devLogger;
//       break;
//     case "production":
//       req.logger = prodLogger;
//       break;
//     default:
//       throw new Error("enviroment doesnt exists");
//   }
req.logger = logger;
  next();
};
