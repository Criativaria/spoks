import { SafeAreaView } from "react-native-safe-area-context";
import { GoogleButton } from "../../components/google-button";
import { makeStyle } from "./style";
import { GoogleSignIn } from "../../api/user/google-sign-in";

export function HomePage() {

  const { OnGoogleAsync, isLoading } = GoogleSignIn();

  const style = makeStyle();

  return (
    <SafeAreaView style={style.wrapper}>
      <GoogleButton
        title="Criar conta com o Google"
        onPress={OnGoogleAsync}
        isLoading={isLoading}
      />
    </SafeAreaView>
  );
}
