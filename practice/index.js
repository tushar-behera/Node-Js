//Task using " Chalk Module "
//using chalk less then V 5.0 so that it will work

const chalk = require('chalk');
console.log(chalk.blue('Hello world!'));

//or

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// Easily define your own themes :==>

const error = chalk.bold.red;
const warning = chalk.keyword('orange');

log(error('Error!'));
log(warning('Warning!'));