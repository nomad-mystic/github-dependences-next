import { Router } from "express";

export default interface RouteInterface {
    router: Router;
    get?(): any;
    create?(): any;
    delete?(): any;
    update?(): any;
}
