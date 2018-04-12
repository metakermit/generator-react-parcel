"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      "Welcome to the slick " +
        chalk.red("generator-react-parcel") +
        " generator!"
    );

    const prompts = [
      // {
      //   type: 'confirm',
      //   name: 'someAnswer',
      //   message: 'Would you like to enable this option?',
      //   default: true
      // }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath("{/**/*,*}"),
      // Without this "destionation" part writes to parent folder
      this.destinationPath("./destination/"),
      this.props
    );
  }

  install() {
    this.installDependencies({
      bower: false
    });
  }
};
