import React  from 'react';
import ReactDOM from 'react-dom';
import { createStore ,combineReducers} from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import reducerUser from './Reducers/reducerUser';
import reducerProduct from './Reducers/reducerProduct';
const user={name:'Hatice', age:'23'};
const product={name:'Urun'};




const rootReducer=combineReducers({
	
	user:reducerUser,
	product:reducerProduct
});

const action={
	type:'UserDegistir',
	payload: {
		newState:{name:'Elif',age:'23'}
	}
	};

const store=createStore(
	//reducerUser,//store'uma reducer'ımı yerleştirdim.Artık ulaşım sağlanabilir.
	rootReducer,{user:user,product:product},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);//parametre olarak reducer fonksiyonunu alır.
//Uygulamada tek bir store birden fazla reducer vardır.


console.log(store.getState());

store.subscribe(()=>{
	console.log('store updated',store.getState());
   });



store.dispatch(action);




console.log('Yeni User :',store.getState().user.newState);
console.log('Product:', store.getState().product);

ReactDOM.render(<Provider  store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
