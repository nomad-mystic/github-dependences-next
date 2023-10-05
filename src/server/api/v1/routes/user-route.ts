import RouteInterface from '..//interfaces/route-interface';


import express from 'express';


export default class UserRoute implements RouteInterface {
    /**
     * @type Router
     */
   public router: express.Router;

    constructor() {
        this.router = express.Router();
    }

    create(): any {
    }

    delete(): any {
    }

    get(): any {
    }

    update(): any {
    }
}
