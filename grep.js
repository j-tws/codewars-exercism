#!/usr/bin/env node

// The above line is a shebang. On Unix-like operating systems, or environments,
// this will allow the script to be run by node, and thus turn this JavaScript
// file into an executable. In other words, to execute this file, you may run
// the following from your terminal:
//
// ./grep.js args
//
// If you don't have a Unix-like operating system or environment, for example
// Windows without WSL, you can use the following inside a window terminal,
// such as cmd.exe:
//
// node grep.js args
//
// Read more about shebangs here: https://en.wikipedia.org/wiki/Shebang_(Unix)

const fs = require('fs');
const path = require('path');

/**
 * Reads the given file and returns lines.
 *
 * This function works regardless of POSIX (LF) or windows (CRLF) encoding.
 *
 * @param {string} file path to file
 * @returns {string[]} the lines
 */
function readLines(file) {
  const data = fs.readFileSync(path.resolve(file), { encoding: 'utf-8' });
  return data.split(/\r?\n/);
}

const VALID_OPTIONS = [
  '-n', // add line numbers
  '-l', // print file names where pattern is found
  '-i', // ignore case
  '-v', // reverse files results
  '-x', // match entire line
];

const ARGS = process.argv;

//
// This is only a SKELETON file for the 'Grep' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// This file should *not* export a function. Use ARGS to determine what to grep
// and use console.log(output) to write to the standard output.


const args = ARGS.slice(2)
const files = args.filter(arg => /.txt/.test(arg))
const pattern = args.filter(arg => !VALID_OPTIONS.includes(arg) || /.txt/.test(arg))[0]
const flagsInput = args.filter(arg => VALID_OPTIONS.includes(arg))

const output = (flags, files, pattern) => {
  const fileObj = {}

  files.forEach(file => {
    fileObj[file] = readLines(file)
  })

  for (const file in fileObj){
    for (let i = 0; i < fileObj[file].length; i++) {
      let currentLine = fileObj[file][i]
      let searchString = pattern
      
      if (flags.includes('-i')){
        currentLine = currentLine.toLowerCase()
        searchString = pattern.toLowerCase()
      }

      let ifLineIncludesPattern = currentLine.includes(searchString)

      if (flags.includes('-x')){
        ifLineIncludesPattern = currentLine === searchString
      }
      
      if (flags.includes('-v')){
        ifLineIncludesPattern = !ifLineIncludesPattern
      }

      if (flags.includes('-l')){
        if (ifLineIncludesPattern){
          console.log(file)
          break
        }
      }

      if (ifLineIncludesPattern){
        if (Object.keys(fileObj).length > 1 && flags.includes('-n')){
          console.log(`${file}:${i+1}:${fileObj[file][i]}`)
        } else if (Object.keys(fileObj).length > 1) {
          console.log(`${file}:${fileObj[file][i]}`)
        } else if (flags.includes('-n')){
          console.log(`${i+1}:${fileObj[file][i]}`)
        } else {
          console.log(fileObj[file][i])
        }
      }
    }
  }
}

output(flagsInput, files, pattern)
