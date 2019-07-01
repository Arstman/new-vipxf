import axios from 'axios'

export function fetchMenuList ({ commit, state }) {
    return axios.get('https://p8890.12cent.cn/mock/5d18a0b1366a822bc7439a9f/vipxf/get_acc_routes')
        .then(response => {
            console.log(response)
            commit('updateMenuList', response)
        })
        .catch( err => {
            console.log(err)
        })
}
