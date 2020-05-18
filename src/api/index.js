import Axios from "axios"
import qs from 'qs'

export const UserData = () => {
    return Axios.get('https://api.baxiaobu.com/index.php/home/v5/findUser')
}

export const PageData = (val) => {
    return Axios.post('https://blogs.zdldove.top/Home/Apis/listWithPage',qs.stringify(val))
}

export const AddData = (data) => {
    return Axios.post('https://api.baxiaobu.com/index.php/home/v5/add',data)
}