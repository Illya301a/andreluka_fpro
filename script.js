//Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length.
function generateKey(length, characters) {
    let key = ""
    for (let i = 0; i < length; i++){
        let index = Math.floor(Math.random()*characters.length)
        key += characters[index]
    }
        return key
}
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i