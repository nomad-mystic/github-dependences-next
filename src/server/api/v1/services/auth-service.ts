import { Request } from 'express';

import passport from 'passport';
import { IStrategyOptions, IStrategyOptionsWithRequest, Strategy } from 'passport-local';

// Models
import UserModel from '../models/user-model';

/**
 * @classdesc
 * @class AuthService
 * @extends
 * @implements
 * @author Keith Murphy | nomadmystics@gmail.com
 * @link https://www.digitalocean.com/community/tutorials/api-authentication-with-json-web-tokensjwt-and-passport
 */
class AuthService {
    private static instance: AuthService;

    constructor() {}

    public getAuthService = async (): Promise<AuthService | void> => {
        try {

            if (!AuthService.instance) {
                AuthService.instance = new AuthService();
            }

            return AuthService.instance;

        } catch (err: any) {
            console.log('AuthService.getAuthService');
            console.error(err);
        }
    }

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     * @see {IStrategyOptionsWithRequest}
     *
     * @return {Promise<void>}
     */
    public createAccount = async (): Promise<void> => {
        try {
            passport.use(
                'create-user-auth',
                new Strategy(
                    {
                        usernameField: 'email',
                        passwordField: 'password',
                        passReqToCallback: true
                    },
                    async (req: Request, email: string, password: string, done: Function) => {
                        try {
                            const user = await UserModel.create({ email, password });

                            return done(null, user);

                        } catch (error) {

                            done(error);

                        }
                    }
                )
            );
        } catch (err: any) {
            console.log('AuthService.createAccount');
            console.error(err);
        }
    }

    public checkUserAuth = async (): Promise<void> => {
        try {
            passport.use(
                'login',
                new Strategy(
                    {
                        usernameField: 'email',
                        passwordField: 'password',
                        passReqToCallback: true,
                    },
                    async (req: Request, email: string, password: string, done: Function) => {
                        try {
                            const user = await UserModel.findOne({ email });

                            if (!user) {
                                return done(null, false, { message: 'User not found' });
                            }

                            const validate = await user.isValidPassword(password);

                            if (!validate) {
                                return done(null, false, { message: 'Wrong Password' });
                            }

                            return done(null, user, { message: 'Logged in Successfully' });
                        } catch (error) {
                            return done(error);
                        }
                    }
                )
            );
        } catch (err: any) {
            console.log('AuthService.checkUserAuth()');
            console.log(err);
        }
    };
}

export default AuthService;
