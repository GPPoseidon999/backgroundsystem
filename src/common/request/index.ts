import Jsonp from 'jsonp';

export default class Request {
    static jsonp(options: any) {
        return new Promise((resolve, reject) => {
            Jsonp(
                options.url,
                {
                    param: 'callback'
                },
                function(err: any, response: any) {
                    if(response.status === '1'){
                        resolve(response);
                    } else {
                        reject(response.info)
                    }
                }
            );
        });
    }
} 
