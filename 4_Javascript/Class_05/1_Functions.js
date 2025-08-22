function vowels_1(str) {
    let cnt = 0;
    for (ch of str) {
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            cnt++;
        }

    }
    return cnt;
}
const vowel_2 = (str) => {
    let a = []
    for (ch of str) {
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            a.push(ch)
        }

    }
    return a;
}
console.log(vowels_1("javascript"))
console.log(vowel_2("javascript"))