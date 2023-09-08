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

const args = ARGS.slice(2)
const files = args.filter(arg => /.txt/.test(arg))
const pattern = args.filter(arg => !VALID_OPTIONS.includes(arg) || /.txt/.test(arg))[0]
const flagsInput = args.filter(arg => VALID_OPTIONS.includes(arg))

const transformFiles = (files) => {
  return files.reduce((acc, curr) => {
    return ({ ...acc, [curr]: readLines(curr)})
  }, {})
}

const processMatchLogic = (line, pattern, flags) => {
  const processedLine = flags.includes('-i') ? line.toLowerCase() : line
  const processedPattern = flags.includes('-i') ? pattern.toLowerCase() : pattern
  const matchCondition = flags.includes('-x') ? processedLine === processedPattern : processedLine.includes(processedPattern)
  const finalMatch = flags.includes('-v') ? !matchCondition : matchCondition

  return finalMatch
}

const logMessage = (hasNFlag, files, index, file, line) => {
  const logWithIndex = hasNFlag ? `${index + 1}:` : ''
  const logWithFileName = files.length > 1 ? `${file}:` : ''
  
  console.log(`${logWithFileName}${logWithIndex}${line}`)
}

const grepOutput = (flags, files, pattern) => {
  const fileObj = transformFiles(files)

  for (const file in fileObj){
    for (let i = 0; i < fileObj[file].length; i++) {
      const currentLine = fileObj[file][i]
      const foundMatch = processMatchLogic(currentLine, pattern, flags)

      if (flags.includes('-l') && foundMatch){
        console.log(file)
        break
      }

      if (foundMatch) logMessage(flags.includes('-n'), files, i, file, currentLine)
    }
  }
}

grepOutput(flagsInput, files, pattern)
