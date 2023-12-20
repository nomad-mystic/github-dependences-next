/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {Promise<Record<T, K>}
 */
export const getJson = async (route: string, errorMessage: string = 'There was an issue fetching from the this endpoint: '): Promise<Response | undefined> => {
    try {
        const response = await fetch(route);
        const responseJson = await response.json();

        if (!response.ok) {
            throw new Error(`${errorMessage} ${route}`);
        }

        return responseJson;

    } catch (err) {

        console.log(err);

    }
};
