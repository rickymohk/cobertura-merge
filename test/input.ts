import { expect } from 'chai';
import { validateArgs } from '../src/input';

describe('validateArgs', () => {
  it('should accept output only', () => {
    const args = {
      _: ['node', 'script', 'package1=input1.xml'],
      o: 'output.xml',
    };

    expect(() => validateArgs(args)).to.not.throw();
  });

  it('should accept print only', () => {
    const args = {
      _: ['node', 'script', 'package1=input1.xml'],
      p: true,
    };

    expect(() => validateArgs(args)).to.not.throw();
  });

  it('should accept print only with --print flag', () => {
    const args = {
      _: ['node', 'script', 'package1=input1.xml'],
      print: true,
    };

    expect(() => validateArgs(args)).to.not.throw();
  });

  it('should accept both output and print', () => {
    const args = {
      _: ['node', 'script', 'package1=input1.xml'],
      o: 'output.xml',
      p: true,
    };

    expect(() => validateArgs(args)).to.not.throw();
  });
});
