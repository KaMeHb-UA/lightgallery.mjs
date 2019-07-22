#!/usr/bin/env node
const fs = require('fs').promises;

const PREFIX_FILE = './src/prefix.mjs',
    SUFFIX_FILE = './src/suffix.mjs',
    MAIN_FILE = './dist/tmp.js',
    DIST_FILE = './dist/lightgallery.mjs';

function read(filename){
    return fs.readFile(filename, 'utf8')
}

function write(filename, data){
    return fs.writeFile(filename, data, 'utf8')
}

(async () => {
    const [ prefix, main, suffix ] = await Promise.all([read(PREFIX_FILE), read(MAIN_FILE), read(SUFFIX_FILE)]);
    await write(DIST_FILE, prefix + main.replace(/window\.lightGallery/g, 'lightGallery').replace(/window\.lgData/g, 'lgData').replace(/window\.lgModules/g, 'lgModules') + suffix)
})()
