import {GET_FEED, REFRESH_FEED, UPDATE_FEED, LOAD_MORE_FEED, GET_STRIPS } from "./Action"

export const getFeed = (isRefresh) => {
    return { type: GET_FEED,isRefresh }
} 

export const updateFeed = (response) => {
    return { type: UPDATE_FEED,response}
}

export const refreshFeed = (refresh) => {
    return { type: REFRESH_FEED,refresh}
}

export const loadMoreFeed = (isLoadMore) => {
    return { type: LOAD_MORE_FEED,isLoadMore}
}

export const getStrips = () => {
    return { type: GET_STRIPS }
} 