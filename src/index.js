import CLI from 'vorpal';
import algorithm from './algorithm.js';

const vorpal = CLI();

vorpal
  .command('setBase <baseNumber>', 'Set the Algorithm Task Base Number to N > 1 ... default: 1000')
  .action(function(args, callback) {
    algorithm.args.baseNumber = args.baseNumber;
    callback();
  });

vorpal
  .command('calc [baseNumber]', 'Calculate the multiples as of base baseNumber ... default: 1000')
  .action(function(args, callback) {
    if (args.baseNumber) {
      algorithm.args.baseNumber = args.baseNumber;
    }

    const sum = algorithm.exec.calc(this.log.bind(this));
    this.log(`calculated as in easypeasy: ${sum}`);
    callback();
  });

vorpal
  .delimiter('Algorithm$')
  .show();
