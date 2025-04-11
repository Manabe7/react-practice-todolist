import React from 'react'

const apiRequest = async (url = '', optioinObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optioinObj);
        if(!response.ok) throw Error('Please reload the app');
    }catch (err){
        errMsg = err.message;
    }finally{
        return errMsg;
    }
}

export default apiRequest
