import { SafeAreaView } from "react-native-safe-area-context";
import { GoogleButton } from "../../components/google-button";
import { makeStyle } from "./style";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";
import { useOAuth, useSignIn } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();
export function HomePage() {
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


  const style = makeStyle();
  return (
    <SafeAreaView style={style.wrapper}>
      <GoogleButton
        title="Entrar com o Google"
        onPress={OnGoogleAsync}
        isLoading={isLoading}
      />
    </SafeAreaView>
  );
}
