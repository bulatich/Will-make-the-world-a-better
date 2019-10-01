import { Observable } from "tns-core-modules/data/observable";
import { topmost } from "tns-core-modules/ui/frame";
import { tnsOauthLogin } from '../auth-service'

export class LoginViewModel extends Observable {
    constructor() {
        super();
    }

    login() {
        tnsOauthLogin('google')
        // topmost().navigate({
        //     moduleName: "home/home-page",
        //     animated: true,
        //     transition: {
        //         name: "slideLeft",
        //         duration: 350,
        //         curve: "ease"
        //     }
        // });

    }
}
