import { sleep } from "../../utils/sleep";
import { GetChannels } from "./types";

export const getChannels: GetChannels = async () => {
    await sleep();

    return [
        {
            id: "73ee42c625f53887fb404f99",
            code: "CODE",
            name: "Band",
            created_at: "2024-08-24T03:23:28.412Z"
        },
        {
            id: "dedf91f2a9785e895c8cb8e4",
            code: "CODE",
            name: "Canal 21",
            created_at: "2024-08-24T03:23:28.412Z"
        },
        {
            id: "4e82a321fed1db5d8156d66c",
            code: "CODE",
            name: "Globo",
            created_at: "2024-08-24T03:23:28.412Z"
        },
        {
            id: "329295d62760d5490a0f8a4c",
            code: "CODE",
            name: "MTV",
            created_at: "2024-08-24T03:23:28.412Z"
        },
        {
            id: "68d4f670512e31e184d44e13",
            code: "CODE",
            name: "Record News",
            created_at: "2024-08-24T03:23:28.412Z"
        },
        {
            id: "642de8dadc38cad6a4c2ddc1",
            code: "CODE",
            name: "Record TV",
            created_at: "2024-08-24T03:23:28.412Z"
        },
        {
            id: "8df067d694e02e62c3b3af3a",
            code: "CODE",
            name: "Rede TV",
            created_at: "2024-08-24T03:23:28.412Z"
        },
        {
            id: "b44d6e21b334829bb27f0252",
            code: "CODE",
            name: "Rede Vida",
            created_at: "2024-08-24T03:23:28.412Z"
        },
        {
            id: "4f95a7b6a5c1b59c00300e41",
            code: "CODE",
            name: "SBT",
            created_at: "2024-08-24T03:23:28.412Z"
        },
        {
            id: "0a0fc00d140429404bef6b71",
            code: "CODE",
            name: "TV Aparecida (aberta)",
            created_at: "2024-08-24T03:23:28.412Z"
        },
        {
            id: "4bcfed5f6e119a3081447976",
            code: "CODE",
            name: "TV Brasil",
            created_at: "2024-08-24T03:23:28.412Z"
        },
        {
            id: "43429cf174b8bf6323589e6e",
            code: "CODE",
            name: "TV Cultura",
            created_at: "2024-08-24T03:23:28.412Z"
        },
        {
            id: "3c582e553aaab9af339a9235",
            code: "CODE",
            name: "TV Gazeta",
            created_at: "2024-08-24T03:23:28.412Z"
        }
    ]
}