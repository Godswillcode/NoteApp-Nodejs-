import { default as express } from "express";
import { default as hbs } from "hbs";
import * as path  from "path";


import { default as logger } from "morgan";
import { default as cookieParser  } from "cookie-parser";
import * as http from "http";
// import { approotdir } from "./approotdir.mjs";

// const __dirname = approotdir;
// import { normalizePort, onError, onListening, handle404, basicErrorHandler } from "./appsupport.mjs";
// import { router as indexRouter } from "./routes/index.mjs";


export const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("views engine", "hbs");
hbs.registerPartials(path.join(__dirname, "partials"));

app.use(logger('dev'));
app.use(bodyParser.json())
app.use.apply(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', indexRouter);


app.use(handle404);
app.use(basicErrorHanler);

export const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

export const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);