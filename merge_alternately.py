def mergeAlternately(s1: str, s2: str) -> str:
    """
    Merges two strings by adding letters in alternating order.

    Args:
        s1: The first string.
        s2: The second string.

    Returns:
        The merged string.
    """
    res = []  # Using a list to build the result is more efficient in Python
    i, j = 0, 0

    while i < len(s1) and j < len(s2):
        res.append(s1[i])
        res.append(s2[j])
        i += 1
        j += 1

    # Append any remaining characters from the longer string
    res.append(s1[i:])
    res.append(s2[j:])

    return "".join(res)

# Example usage:
print(mergeAlternately("abc", "pqr"))      # Output: apbqcr
print(mergeAlternately("abcd", "pq"))     # Output: apbqcd
print(mergeAlternately("ab", "pqrs"))     # Output: apbqrs