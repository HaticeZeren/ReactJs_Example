export const UPDATE_USER='UPDATE_USER';//action için type tanımlıyorum


export function updateUser(newUser){

    return{
            type:'UPDATE_USER',
            payload:{
                NewState:newUser
            }
        }
    

}