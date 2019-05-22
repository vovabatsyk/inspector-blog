export class Validators {
    static reqired(value = '') {
        return value &&  value.trim()
    }

    static minLength(length) {
        return value => {
            return value.length >= length
        }
    }
}