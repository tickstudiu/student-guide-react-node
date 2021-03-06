import { CHANG_LANGUAGE } from './type';
export * from './helloServer';
export * from './overviewStudent';

export const changeLanguage = (lang) => dispatch => {
    dispatch({
        type: CHANG_LANGUAGE,
        payload: lang
    })
};