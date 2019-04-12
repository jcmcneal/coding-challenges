import oneEditAway from './oneEditAway';

test('oneEditAway', () => {
    expect(oneEditAway('cat', 'at')).toEqual(true);
    expect(oneEditAway('at', 'cat')).toEqual(true);
    expect(oneEditAway('bird', 'fish')).toEqual(false);
    expect(oneEditAway('baa', 'ba')).toEqual(true);
    expect(oneEditAway('baa', 'ca')).toEqual(false);
    expect(oneEditAway('1', 'notatall')).toEqual(false);
    expect(oneEditAway('', '')).toEqual(false);
    expect(oneEditAway('one', 'one')).toEqual(false);
    expect(oneEditAway('one', 'oe')).toEqual(true);
    expect(oneEditAway('supercool', 'supecool')).toEqual(true);
    expect(oneEditAway('abc', 'afcc')).toEqual(false);
    expect(oneEditAway('string', '1string')).toEqual(true);
});
