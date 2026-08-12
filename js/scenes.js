export const SCENES = {

    // ==========================
    // EXTERIORES
    // ==========================

    exterior_1: {

        id: "exterior_1",
        name: "Exterior Frente",
        floor: "PB",
        image: "../../assets/panoramas/exterior_1.png",

        hotspots: [

            {
                id: "ext2",
                target: "exterior_2",
                yaw: -1.174,
                pitch: 0.034
            },

            {
                id: "estar",
                target: "estar",
                yaw: 0.319,
                pitch: 0.052
            }

        ]

    },

    exterior_2: {

        id: "exterior_2",
        name: "Exterior Frente Lateral",
        floor: "PB",
        image: "../../assets/panoramas/exterior_2.png",

        hotspots: [

            {
                target: "exterior_1",
                yaw: 0.774,
                pitch: 0.071
            },

            {
                target: "exterior_3",
                yaw: -0.850,
                pitch: 0.026
            },

            {
                target: "estar",
                yaw: 0.374,
                pitch: 0.060
            }

        ]

    },

    exterior_3: {

        id: "exterior_3",
        name: "Exterior Lateral",
        floor: "PB",
        image: "../../assets/panoramas/exterior_3.png",

        hotspots: [

            {
                target: "exterior_2",
                yaw: 2.543,
                pitch: 0.072
            },

            {
                target: "exterior_4",
                yaw: -0.629,
                pitch: 0.037
            },

            {
                target: "exterior_5",
                yaw: -0.289,
                pitch: 0.067
            },

            {
                target: "comedor",
                yaw: 0.901,
                pitch: 0.110
            }

        ]

    },

    exterior_4: {

        id: "exterior_4",
        name: "Patio Posterior",
        floor: "PB",
        image: "../../assets/panoramas/exterior_4.png",

        hotspots: [

            {
                target: "exterior_3",
                yaw: 0.558,
                pitch: 0.069
            },

            {
                target: "exterior_5",
                yaw: -1.634,
                pitch: 0.130
            }

        ]

    },

    exterior_5: {

        id: "exterior_5",
        name: "Patio Fondo",
        floor: "PB",
        image: "../../assets/panoramas/exterior_5.png",

        hotspots: [

            {
                target: "exterior_4",
                yaw: 1.080,
                pitch: 0.074
            },

            {
                target: "exterior_3",
                yaw: 0.753,
                pitch: 0.033
            }

        ]

    },

    // ==========================
    // INTERIOR PB
    // ==========================

    estar: {

        id: "estar",
        name: "Estar",
        floor: "PB",
        image: "../../assets/panoramas/estar.png",

        hotspots: [

            {
                target: "exterior_1",
                yaw: 2.205,
                pitch: 0.085
            },

            {
                target: "exterior_2",
                yaw: -2.438,
                pitch: 0.068
            },

            {
                target: "comedor",
                yaw: 0.024,
                pitch: 0.205
            }

        ]

    },

    comedor: {

        id: "comedor",
        name: "Comedor",
        floor: "PB",
        image: "../../assets/panoramas/comedor.png",

        hotspots: [

            {
                target: "estar",
                yaw: 0.065,
                pitch: 0.267
            },

            {
                target: "cocina",
                yaw: -2.954,
                pitch: 0.171
            },

            {
                target: "exterior_3",
                yaw: 1.647,
                pitch: 0.086
            },

            {
                target: "dormitorio_1",
                yaw: -2.054,
                pitch: -0.528
            }

        ]

    },

    cocina: {

        id: "cocina",
        name: "Cocina",
        floor: "PB",
        image: "../../assets/panoramas/cocina.png",

        hotspots: [

            {
                target: "comedor",
                yaw: 0.974,
                pitch: 0.225
            },

            {
                target: "baño",
                yaw: -1.132,
                pitch: 0.163
            }

        ]

    },

    baño: {

        id: "baño",
        name: "Baño",
        floor: "PB",
        image: "../../assets/panoramas/baño.png",

        hotspots: [

            {
                target: "cocina",
                yaw: -1.450,
                pitch: 0.137
            }

        ]

    },

    // ==========================
    // PLANTA ALTA
    // ==========================

    dormitorio_1: {

        id: "dormitorio_1",
        name: "Dormitorio",
        floor: "PA",
        image: "../../assets/panoramas/dormitorio_1.png",

        hotspots: [

            {
                target: "comedor",
                yaw: -1.803,
                pitch: 0.736
            },

            {
                target: "dormitorio_2",
                yaw: -0.177,
                pitch: 0.237
            },

            {
                target: "dormitorio_3",
                yaw: -0.638,
                pitch: 0.324
            }

        ]

    },

    dormitorio_2: {

        id: "dormitorio_2",
        name: "Vestidor",
        floor: "PA",
        image: "../../assets/panoramas/dormitorio_2.png",

        hotspots: [

            {
                target: "dormitorio_1",
                yaw: -2.186,
                pitch: 0.309
            },

            {
                target: "dormitorio_3",
                yaw: -1.310,
                pitch: 0.489
            }

        ]

    },

    dormitorio_3: {

        id: "dormitorio_3",
        name: "Escritorio",
        floor: "PA",
        image: "../../assets/panoramas/dormitorio_3.png",

        hotspots: [

            {
                target: "dormitorio_1",
                yaw: 0.279,
                pitch: 0.321
            },

            {
                target: "dormitorio_2",
                yaw: -1.123,
                pitch: 0.248
            }

        ]

    }

};