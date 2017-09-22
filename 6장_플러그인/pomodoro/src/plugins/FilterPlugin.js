export default {
    install: function (Vue) {
        Vue.filter('uppercase', (key) => {
            return key.toUpperCase()
        })

        Vue.filter('leftpad', (value) => {
            if (value >= 10) {
                return value
            }
            return '0' + value
        })

        Vue.filter('addspace', (value) => {
            return value + ' '
        })
    }
}
  