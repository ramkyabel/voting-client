import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const { JSDOM } = jsdom;

const doc = new JSDOM ('<!doctype html><html><body></body></html>');
const win = new JSDOM ('<!doctype html><html><body></body></html>').window;

global.document = doc;
global.window = win;

Object.keys(global.window).forEach((key) => {
   if (!(key in global)) {
			global[key] = window[key];
   }
 });		

chai.use(chaiImmutable);