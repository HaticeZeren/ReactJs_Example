import {UPDATE_USER} from '../Actions/user-action';

export default function reducerUser(state=[],action){
    console.log("reducerUser fonksiyonundayım");
    console.log(state);
    switch(action.type){
		case UPDATE_USER:
		return action.payload.user;
	   
		default:
		return state;
	}
}
