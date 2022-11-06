import { emptyFieldGenerator, CellState, fieldGenerator } from './Field';

const { empty, bomb, hidden } = CellState;

describe('Field generator', () => {
    describe('emptyFieldGenerator tests', () => {
        it('2x2', () => {
            expect(emptyFieldGenerator(2)).toEqual([
                [empty, empty],
                [empty, empty],
            ]);
        });
        it('3x3', () => {
            expect(emptyFieldGenerator(3)).toEqual([
                [empty, empty, empty],
                [empty, empty, empty],
                [empty, empty, empty],
            ]);
        });
        it('3x3 with hidden', () => {
            expect(emptyFieldGenerator(3, hidden)).toEqual([
                [hidden, hidden, hidden],
                [hidden, hidden, hidden],
                [hidden, hidden, hidden],
            ]);
        });
    });
    describe('Field generator cases', () => {
        it('Wrong density', () => {
            const errorTxt = 'Density must be between 0 and 1';
            expect(() => fieldGenerator(1, -1)).toThrow(errorTxt);
            expect(() => fieldGenerator(1, 2)).toThrow(errorTxt);
        });
        it('Smallest possible field without mine', () => {
            expect(fieldGenerator(1, 0)).toEqual([[0]]);
        });
        it('Big possible field without mine', () => {
            expect(fieldGenerator(5, 0)).toEqual([
                [empty, empty, empty, empty, empty],
                [empty, empty, empty, empty, empty],
                [empty, empty, empty, empty, empty],
                [empty, empty, empty, empty, empty],
                [empty, empty, empty, empty, empty],
            ]);
        });
        it('Smallest possible field with mine', () => {
            expect(fieldGenerator(1, 1)).toEqual([[bomb]]);
        });
    });
});
