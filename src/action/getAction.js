import { PageData } from "@/api/index"

export const getData = (payload) => ({
    type: "GET_DATA",
    payload
})

export const listData = (payload) => ({
    type: "LIST_DATA",
    payload
})
export const pagetData = (payload) => ({
    type: "PAGE_DATA",
    payload: PageData(payload)
})
