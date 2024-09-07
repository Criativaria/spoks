import * as integration from "./integration"
import * as mock from "./mock"
import { GetPrograms } from "./types";

const selected = process.env.EXPO_PUBLIC_ENV === "production" ? integration : mock;

export const getPrograms: GetPrograms = selected.getPrograms;