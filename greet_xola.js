const chalk = require('chalk');
const figlet = require("figlet");
const greet = require('./greet');

const styledMessage = chalk.bgGreen.black(
    figlet.textSync(greet('Xola')), {font: 'Ghost',
    horizontalLayout: 'full',
    verticalLayout: 'default',
    width: 40,
    whitespaceBreak: true});

console.log(styledMessage)


