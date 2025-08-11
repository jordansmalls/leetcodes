// Merge Alternately
/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
*/

func mergeAlternately(s1, s2 string) string {
	var res string
	i, j := 0, 0

	for i < len(s1) && j < len(s2) {
		res += string(s1[i])
		res += string(s2[j])
		i++
		j++
	}

	res += s1[i:]
	res += s2[j:]

	return res
}
