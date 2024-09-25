
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";
import { useOAuth, useSignIn } from "@clerk/clerk-expo";  // useSignIn adicionado

WebBrowser.maybeCompleteAuthSession();

export function GoogleLogin() {

    const [isLoadingLogin, setIsLoadingLogin] = useState(false);
    const googleOAuth = useOAuth({ strategy: "oauth_google" });
    const { signIn } = useSignIn();

    useEffect(() => {
        WebBrowser.warmUpAsync();
        return () => {
            WebBrowser.coolDownAsync();
        };
    }, []);

    const OnGoogleSignInAsync = async () => {
        try {
            setIsLoadingLogin(true);
            const oAuthFlow = await googleOAuth.startOAuthFlow();

            if (oAuthFlow.authSessionResult?.type === "success") {

                if (oAuthFlow.setActive && signIn) {
                    const { createdSessionId } = await signIn.create({
                        strategy: "oauth_google",
                        redirectUrl: "spoks://channel"
                    });


                    await oAuthFlow.setActive({ session: createdSessionId });
                }
            }
        } catch (error) {
            console.error(error);
            setIsLoadingLogin(false);
        }
    }

    return { OnGoogleSignInAsync, isLoadingLogin };
}