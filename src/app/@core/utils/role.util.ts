
export const delay = async(time : number) => {
    return await new Promise(resolve => setTimeout(resolve, time));
}



export const TYPE_FILES = {
    image : 1,
    file : 0
}

