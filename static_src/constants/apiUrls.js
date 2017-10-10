export default {
    task: () => {
        if (typeof SERVER_URL != 'undefined' && SERVER_URL){
            return SERVER_URL + 'api/tasks/'
        } else {
            return '/api/tasks/';
        }
    }

};
