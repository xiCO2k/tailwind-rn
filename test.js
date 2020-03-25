/* global test, expect */
import tailwind, {getColor} from '.';

test('get styles for one class', () => {
	expect(tailwind('text-blue-500')).toEqual({color: '#4299e1'});
});

test('get styles for multiple classes', () => {
	expect(tailwind('text-blue-500 bg-blue-100')).toEqual({
		color: '#4299e1',
		backgroundColor: '#ebf8ff'
	});
});

test('ignore unknown classes', () => {
	expect(tailwind('text-blue-500 unknown')).toEqual({color: '#4299e1'});
});

test('get color value', () => {
	expect(getColor('blue-500')).toBe('#4299e1');
});

test('ignore no value param', () => {
	expect(tailwind(null)).toEqual({});
	expect(tailwind(false)).toEqual({});
	expect(tailwind(undefined)).toEqual({});
	expect(tailwind(0)).toEqual({});
});
