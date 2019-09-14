function wave(word) {
    let arr = []
    let reg = /[a-z]/

    for (let i = 0; i < word.split("").length; i++) {
        if (reg.test(word[i])) {
            let worder = word.slice(0, i)
            let worder2 = word.slice(i, word.split("").length)
            let newWord = worder + worder2.replace(word[i], word[i].toUpperCase())
            arr.push(newWord)
        }
    }
    return arr
}