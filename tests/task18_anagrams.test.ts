import { groupAnagrams } from '../src/3_hard/task18_anagrams';

describe('groupAnagrams', () => {
  test('["eat","tea","tan","ate","nat","bat"] -> grouped anagrams', () => {
    expect(groupAnagrams(["eat","tea","tan","ate","nat","bat"]).map(a => a.sort()).sort()).toEqual(
      [["eat","tea","ate"].sort(), ["tan","nat"].sort(), ["bat"]].sort()
    );
  });
});
