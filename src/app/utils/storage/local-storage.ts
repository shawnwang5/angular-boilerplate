export class LocalStorage {
    static read (key) {
        try {
            return window.localStorage.getItem(key)
        } catch (e) {
            return ''
        }
    }

    static write (key, data) {
        try {
            return window.localStorage.setItem(key, data)
        } catch (e) {
        }
    }

    static each (fn) {
        try {
            for (let i = window.localStorage.length - 1; i >= 0; i--) {
                const key = window.localStorage.key(i)
                fn(LocalStorage.read(key), key)
            }
        } catch (e) {
        }
    }

    static remove (key) {
        try {
            return window.localStorage.removeItem(key)
        } catch (e) {
        }
    }

    static clearAll () {
        try {
            return window.localStorage.clear()
        } catch (e) {
        }
    }
}
