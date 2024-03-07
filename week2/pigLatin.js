function translateToPigLatin(word) {
    // Convert the word to lowercase for consistency
    word = word.toLowerCase();

    // Check if the word starts with a vowel
    if (['a', 'e', 'i', 'o', 'u'].includes(word[0])) {
        return word + 'way';
    } else {
        // Find the index of the first vowel
        let firstVowelIndex = -1;
        for (let i = 0; i < word.length; i++) {
            if (['a', 'e', 'i', 'o', 'u'].includes(word[i])) {
                firstVowelIndex = i;
                break;
            }
        }

        // If a vowel is found, rearrange the word accordingly
        if (firstVowelIndex !== -1) {
            return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + 'ay';
        } else {
            // If no vowel is found, just add 'ay' to the end
            return word + 'ay';
        }
    }
}

// Example usage:
const inputWord = "hello";
const pigLatinTranslation = translateToPigLatin(inputWord);
console.log(pigLatinTranslation);