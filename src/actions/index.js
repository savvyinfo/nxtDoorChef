import axios from 'axios';

export const CHEFS = 'CHEFS';
export const CHEF = 'CHEF';
export const MENU = 'MENU';
export const FOOD_LIST = 'FOOD_LIST';
export const HOURS = 'HOURS';
export const REVIEWS = 'REVIEWS';
export const SEARCH = 'SEARCH';
export const SEARCH_RESULT = 'SEARCH_RESULT';
export const EMAIL = 'EMAIL';
export const NAME = 'NAME';
export const SUBMIT = 'SUBMIT';

export const getChefs = () => {
    const chefs = axios.get('https://nxtdoorchef.com/api/chef')
        .then(resp => resp.data.data);

    return {
        type: CHEFS,
        payload: chefs
    };
};

export const displaySelectedChef = (id) => {
    const chef = axios.get(`https://nxtdoorchef.com/api/chef/id/${id}`)
        .then(resp => resp.data.data[0]);

    return {
        type: CHEF,
        payload: chef
    }
};

export const getMenu = (id) => {
    const menu = axios.get(`https://nxtdoorchef.com/api/menu/id/${id}`)
        .then(resp => resp.data.data);

    return {
        type: MENU,
        payload: menu
    };
};

export const getFoodItems = () => {
    const foods = axios.get(`https://nxtdoorchef.com/api/menu`)
        .then(resp => resp.data.data[0]);

    return {
        type: FOOD_LIST,
        payload: foods
    };
};

export const getHours = (id) => {
    const hours = axios.get(`https://nxtdoorchef.com/api/hours/chef/${id}`)
        .then(resp => resp.data.data);

    return {
        type: HOURS,
        payload: hours
    };
};

export const getReviews = (id) => {
    const reviews = axios.get(`https://nxtdoorchef.com/api/reviews/retrieve/${id}`)
        .then(resp => resp.data.data);

    return {
        type: REVIEWS,
        payload: reviews
    };
};

export const searchInput = (text) => {
    return {
        type: SEARCH,
        payload: text
    }
};

export const foodSearch = (food) => {
    const search = axios.get(`https://nxtdoorchef.com/api/menu/search/${food}`)
        .then(resp => resp.data.data);

    return {
        type: SEARCH_RESULT,
        payload: search
    };
};

export const nameInput = (name) => {
    return {type: NAME, payload: name};
};

export const emailInput = (email) => {
    return {type: EMAIL, payload: email};
};

export const submit = (email, name, photo, price, meal, address, chef) => {
    console.log('clicked');
    const submit = axios.post('https://nxtdoorchef.com/api/email/confirmation', {
        email: email,
        user: name,
        purchase_photo: photo,
        purchase_price: price,
        purchase_name: meal,
        chef_address: address,
        chef_name: chef
    })
        .then(() => 'success')
        .catch(() => 'error');

    return {type: SUBMIT, payload: submit};
};
