import apiUrl from '../apiConfig'
import axios from 'axios'

// test

// display store
export const getStore = (user) => {
	return axios({
        url: `${apiUrl}/store/view`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

// create store
export const createStore = (user) => {
    return axios({
        url: `${apiUrl}/store`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

// POST -> Add to Cart
export const addItem = (itemId, user, addItem) => {
    console.log({ itemId })
    return axios({
        url: `${apiUrl}/character/${itemId}`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { item: addItem }
    })
}

// PATCH -> Update character
export const updateItem = (user, updatedItem) => {
    console.log('this is the updated Product', updatedItem)
    return axios({
        url: `${apiUrl}/character/${updatedItem.id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { item: updatedItem }
    })
}

//Patch
export const buyItem = (user, oldItem) => {
    console.log('user in editing task' ,user)
    const newItem = {store: {
        description: oldItem.description,
        cost: oldItem.cost,
        bought: true
    }}
    return axios({
        url: `${apiUrl}/store/${oldItem._id}/edit`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: newItem 
    })
}

//this is to fix shanes code