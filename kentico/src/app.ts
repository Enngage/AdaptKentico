#!/usr/bin/env node
import * as yargs from 'yargs';

import { generatorConfig } from './config';
import { Generator } from './generator';
import { utilities } from './utilities';

const argv = yargs['argv'];

// user config
const projectId = argv.projectId;

if (!projectId) {
  throw Error(`Please specify 'projectId' argument.`);
}

// init & start generator
const generator = new Generator({
  projectId: projectId
});

generator.generateModels();
