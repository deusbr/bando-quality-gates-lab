import assert from 'node:assert/strict';
import test from 'node:test';
import { add } from '../src/arithmetic.mjs';

test('adds two positive integers', () => {
  assert.equal(add(2, 3), 5);
});

test('includes negative values in the sum', () => {
  assert.equal(add(4, -7), -3);
});

test('keeps zero as an additive identity', () => {
  assert.equal(add(9, 0), 9);
});

test('sums opposite values to zero', () => {
  assert.equal(add(8, -8), 0);
});
