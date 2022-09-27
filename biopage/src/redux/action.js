const setData = (data)=> {      //action creater to add data on redux store
    return {
        type: 'setData',
        payload: data
    }
}

export default setData