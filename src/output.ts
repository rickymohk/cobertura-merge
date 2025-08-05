import { CoberturaJson } from './types/cobertura';
import * as fs from 'fs';
import * as path from 'path';
import { addSelfClosingTags } from './util';
import { toXml } from 'xml2json';

const XML_HEADER = '<?xml version="1.0" ?>\n';

export function writeOutput(outputFile: string, output: CoberturaJson): void {
  const outputXml = XML_HEADER + addSelfClosingTags(toXml(JSON.stringify(output), { sanitize: true }));
  const outputFilename: string = outputFile;
  const outputDir = path.dirname(outputFilename);

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(outputFilename, outputXml);
}
