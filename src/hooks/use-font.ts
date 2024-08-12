import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export function useFont() {
    const [loaded, error] = useFonts({
        Inter_Extra_Bold: require("../../assets/fonts/static/Inter_28pt-ExtraBold.ttf"),
        Inter_Regular: require("../../assets/fonts/static/Inter_28pt-Regular.ttf"),
    });
    const isLoaded = loaded || !!error
    useEffect(() => {
        if (isLoaded) {
            SplashScreen.hideAsync();
        }
    }, [isLoaded])

    return [isLoaded, error];
}