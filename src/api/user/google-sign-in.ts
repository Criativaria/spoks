import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";
import { useOAuth, useSignIn } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

export function GoogleSignIn() {

    const [isLoading, setIsLoading] = useState(false);
    const googleOAuth = useOAuth({ strategy: "oauth_google" });

    useEffect(() => {
        WebBrowser.warmUpAsync();
        return () => {
            WebBrowser.coolDownAsync();
        };
    }, []);

    const OnGoogleAsync = async () => {
        try {
            setIsLoading(true);

            const oAuthFlow = await googleOAuth.startOAuthFlow();

            if (oAuthFlow.authSessionResult?.type === "success") {
                if (oAuthFlow.setActive) {
                    await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId });
                }
            } else {
                setIsLoading(false);
            }
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    return { OnGoogleAsync, isLoading }
}