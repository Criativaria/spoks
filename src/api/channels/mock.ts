import { sleep } from "../../utils/sleep";
import { GetChannels } from "./types";

export const getChannels: GetChannels = async () => {
    await sleep();

    return [
        {
            id: "66cbc54bbb18ebc95048400d",
            code: "BAN",
            name: "Band",
            created_at: "2024-08-25T23:59:07.378Z",
            current_program: {
                id: "66d376dfabf1fc1e182bf58e",
                code: "6a31fc12437ccf99b4579a16e07b851e",
                name: "Brasil Urgente",
                category: "Reportagem",
                channel_id: "66cbc54bbb18ebc95048400d",
                start_at: "2024-08-31T19:00:00.000Z",
                end_at: "2024-08-31T21:50:00.000Z",
                created_at: "2024-08-31T20:02:39.026Z"
            }
        },
        {
            id: "66cbc54cbb18ebc95048406b",
            code: "C21",
            name: "Canal 21",
            created_at: "2024-08-25T23:59:08.431Z",
            current_program: {
                id: "66d376e0abf1fc1e182bf5ec",
                code: "3d5edeadaf66d58b65fe431832e448b3",
                name: "Igreja Universal do Reino de Deus",
                category: "Religioso",
                channel_id: "66cbc54cbb18ebc95048406b",
                start_at: "2024-08-31T15:00:00.000Z",
                end_at: "2024-08-31T23:00:00.000Z",
                created_at: "2024-08-31T20:02:40.058Z"
            }
        },
        {
            id: "66cbc54dbb18ebc950484082",
            code: "GRD",
            name: "Globo",
            created_at: "2024-08-25T23:59:09.425Z",
            current_program: {
                id: "66d376e1abf1fc1e182bf604",
                code: "03eb0cc81924dc4f9c3f05255bb2f1aa",
                name: "Caldeirão Com Mion",
                category: "Variedade",
                channel_id: "66cbc54dbb18ebc950484082",
                start_at: "2024-08-31T19:20:00.000Z",
                end_at: "2024-08-31T21:40:00.000Z",
                created_at: "2024-08-31T20:02:41.078Z"
            }
        },
        {
            id: "66cbc54ebb18ebc950484100",
            code: "MTV",
            name: "MTV",
            created_at: "2024-08-25T23:59:10.402Z",
            current_program: {
                id: "66d376e2abf1fc1e182bf69a",
                code: "82f6291b05d458121f0fcabc0440247d",
                name: "Catfish : T2 EP6 - Jen e Skylar",
                category: "Reality Show",
                channel_id: "66cbc54ebb18ebc950484100",
                start_at: "2024-08-31T19:40:00.000Z",
                end_at: "2024-08-31T20:20:00.000Z",
                created_at: "2024-08-31T20:02:42.285Z"
            }
        },
        {
            id: "66cbc54fbb18ebc95048417a",
            code: "RCN",
            name: "Record News",
            created_at: "2024-08-25T23:59:11.505Z",
            current_program: {
                id: "66d376e3abf1fc1e182bf715",
                code: "c420c7005a6481fb889e2f87d6871bd6",
                name: "Hora News - Edição de Sábado",
                category: "Reportagem",
                channel_id: "66cbc54fbb18ebc95048417a",
                start_at: "2024-08-31T20:00:00.000Z",
                end_at: "2024-08-31T21:00:00.000Z",
                created_at: "2024-08-31T20:02:43.481Z"
            }
        },
        {
            id: "66cbc550bb18ebc95048425a",
            code: "REC",
            name: "Record TV",
            created_at: "2024-08-25T23:59:12.520Z",
            current_program: {
                id: "66d376e4abf1fc1e182bf7f1",
                code: "17f36da116728c29bd999aa5932d57c0",
                name: "Cidade Alerta - Edição de Sábado",
                category: "Reportagem",
                channel_id: "66cbc550bb18ebc95048425a",
                start_at: "2024-08-31T20:00:00.000Z",
                end_at: "2024-08-31T22:45:00.000Z",
                created_at: "2024-08-31T20:02:44.590Z"
            }
        },
        {
            id: "66cbc551bb18ebc9504842c3",
            code: "RTV",
            name: "Rede TV",
            created_at: "2024-08-25T23:59:13.338Z",
            current_program: {
                id: "66d376e5abf1fc1e182bf861",
                code: "02df72de9eb0175ea316d82d7c7d7bcf",
                name: "Ultrafarma",
                category: "",
                channel_id: "66cbc551bb18ebc9504842c3",
                start_at: "2024-08-31T19:00:00.000Z",
                end_at: "2024-08-31T20:05:00.000Z",
                created_at: "2024-08-31T20:02:45.533Z"
            }
        },
        {
            id: "66cbc552bb18ebc95048430e",
            code: "VDA",
            name: "Rede Vida",
            created_at: "2024-08-25T23:59:14.569Z",
            current_program: {
                id: "66d376e6abf1fc1e182bf8b5",
                code: "c0d1e036a13a54de67a13655f87d963d",
                name: "Programa Pago",
                category: "",
                channel_id: "66cbc552bb18ebc95048430e",
                start_at: "2024-08-31T20:00:00.000Z",
                end_at: "2024-08-31T20:30:00.000Z",
                created_at: "2024-08-31T20:02:46.676Z"
            }
        },
        {
            id: "66cbc553bb18ebc9504843cb",
            code: "SBT",
            name: "SBT",
            created_at: "2024-08-25T23:59:15.462Z",
            current_program: {
                id: "66d376e7abf1fc1e182bf961",
                code: "b9c2bfedac09e0aacf4177c630b1810f",
                name: "Deu a Louca nos Bichos",
                category: "Comédia",
                channel_id: "66cbc553bb18ebc9504843cb",
                start_at: "2024-08-31T19:15:00.000Z",
                end_at: "2024-08-31T21:00:00.000Z",
                created_at: "2024-08-31T20:02:47.646Z"
            }
        },
        {
            id: "66cbc554bb18ebc950484410",
            code: "TAP",
            name: "TV Aparecida (aberta)",
            created_at: "2024-08-25T23:59:16.542Z",
            current_program: {
                id: "66d376e8abf1fc1e182bf9a6",
                code: "caf0feccf6fcf27ba95dd319ad038adb",
                name: "Arquivo A",
                category: "Atualidades",
                channel_id: "66cbc554bb18ebc950484410",
                start_at: "2024-08-31T19:45:00.000Z",
                end_at: "2024-08-31T20:50:00.000Z",
                created_at: "2024-08-31T20:02:48.720Z"
            }
        },
        {
            id: "66cbc555bb18ebc950484494",
            code: "TED",
            name: "TV Brasil",
            created_at: "2024-08-25T23:59:17.559Z",
            current_program: {
                id: "66d376eaabf1fc1e182bfa20",
                code: "b7bf119267aff08e828683abfa2c70fa",
                name: "Novorizontino x Vila Nova",
                category: "Futebol",
                channel_id: "66cbc555bb18ebc950484494",
                start_at: "2024-08-31T19:45:00.000Z",
                end_at: "2024-08-31T22:00:00.000Z",
                created_at: "2024-08-31T20:02:49.838Z"
            }
        },
        {
            id: "66cbc556bb18ebc95048454b",
            code: "CUL",
            name: "TV Cultura",
            created_at: "2024-08-25T23:59:18.684Z",
            current_program: {
                id: "66d376ebabf1fc1e182bfac8",
                code: "1681211bfaf7dcae10cb1298ab17a150",
                name: "O Mundo de Mia",
                category: "Infantil",
                channel_id: "66cbc556bb18ebc95048454b",
                start_at: "2024-08-31T20:00:00.000Z",
                end_at: "2024-08-31T20:30:00.000Z",
                created_at: "2024-08-31T20:02:51.000Z"
            }
        },
        {
            id: "66cbc557bb18ebc95048460a",
            code: "GAZ",
            name: "TV Gazeta",
            created_at: "2024-08-25T23:59:19.537Z",
            current_program: {
                id: "66d376ecabf1fc1e182bfb61",
                code: "22ad3c3eed69e3acaf5a19a9bf08d861",
                name: "Gazeta Motors",
                category: "Séries",
                channel_id: "66cbc557bb18ebc95048460a",
                start_at: "2024-08-31T20:00:00.000Z",
                end_at: "2024-08-31T21:00:00.000Z",
                created_at: "2024-08-31T20:02:51.980Z"
            }
        }
    ]
}