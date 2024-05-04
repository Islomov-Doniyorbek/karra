let questionLimit = 25;
let bal = 4;

const quiz = [
    {
        q: "2x1",
        option: [2,3,4],
        answer:0,
    },
    {
        q: "2x2",
        option: [2,3,4],
        answer:2,
    },
    {
        q: "2x3",
        option: [2,6,4],
        answer:1,
    },
    {
        q: "2x4",
        option: [8,6,4],
        answer:0,
    },
    {
        q: "2x5",
        option: [8,6,10],
        answer:2,
    },
    {
        q: "2x6",
        option: [12,6,10],
        answer:0,
    },
    {
        q: "2x7",
        option: [12,14,10],
        answer:1,
    },
    {
        q: "2x8",
        option: [14,16,10],
        answer:1,
    },
    {
        q: "2x9",
        option: [14,16,18],
        answer:2,
    },
    {
        q: "2x10",
        option: [14,20,18],
        answer:1,
    },
    {
        q: "2x11",
        option: [22,20,18],
        answer:0,
    },

    {
        q: "3x1",
        option: [2,3,4],
        answer:1,
    },
    {
        q: "3x2",
        option: [2,3,6],
        answer:2,
    },
    {
        q: "3x3",
        option: [3,6,9],
        answer:2,
    },
    {
        q: "3x4",
        option: [9,12,18],
        answer:1,
    },
    {
        q: "3x5",
        option: [21,15,10],
        answer:1,
    },
    {
        q: "3x6",
        option: [12,6,18],
        answer:1,
    },
    {
        q: "3x7",
        option: [12,21,18],
        answer:1,
    },
    {
        q: "3x8",
        option: [30,24,27],
        answer:1,
    },
    {
        q: "3x9",
        option: [24,27,21],
        answer:1,
    },
    {
        q: "3x10",
        option: [33,30,18],
        answer:1,
    },
    {
        q: "3x11",
        option: [33,27,14],
        answer:0,
    },

    {
        q: "4x1",
        option: [2,3,4],
        answer:2,
    },
    {
        q: "4x2",
        option: [12,8,4],
        answer:1,
    },
    {
        q: "4x3",
        option: [12,8,4],
        answer:0,
    },
    {
        q: "4x4",
        option: [8,16,24],
        answer:1,
    },
    {
        q: "4x5",
        option: [8,16,20],
        answer:2,
    },
    {
        q: "4x6",
        option: [12,36,24],
        answer:2,
    },
    {
        q: "4x7",
        option: [12,24,28],
        answer:2,
    },
    {
        q: "4x8",
        option: [24,16,32],
        answer:2,
    },
    {
        q: "4x9",
        option: [28,36,16],
        answer:1,
    },
    {
        q: "4x10",
        option: [40,32,36],
        answer:0,
    },
    {
        q: "4x11",
        option: [44,40,15],
        answer:0,
    },

    {
        q: "5x1",
        option: [5,15,10],
        answer:0,
    },
    {
        q: "5x2",
        option: [15,10,5],
        answer:1,
    },
    {
        q: "5x3",
        option: [10,15,20],
        answer:1,
    },
    {
        q: "5x4",
        option: [25,20,15],
        answer:1,
    },
    {
        q: "5x5",
        option: [25,15,20],
        answer:0,
    },
    {
        q: "5x6",
        option: [25,35,30],
        answer:2,
    },
    {
        q: "5x7",
        option: [45,35,30],
        answer:1,
    },
    {
        q: "5x8",
        option: [40,50,30],
        answer:0,
    },
    {
        q: "5x9",
        option: [55,45,35],
        answer:1,
    },
    {
        q: "5x10",
        option: [50,45,55],
        answer:0,
    },
    {
        q: "5x11",
        option: [55,50,16],
        answer:0,
    },

    
    {
        q: "6x1",
        option: [6,12,18],
        answer:0,
    },
    {
        q: "6x2",
        option: [6,18,12],
        answer:2,
    },
    {
        q: "6x3",
        option: [9,18,12],
        answer:1,
    },
    {
        q: "6x4",
        option: [24,18,30],
        answer:0,
    },
    {
        q: "6x5",
        option: [30,12,18],
        answer:0,
    },
    {
        q: "6x6",
        option: [36,46,12],
        answer:0,
    },
    {
        q: "6x7",
        option: [48,42,54],
        answer:1,
    },
    {
        q: "6x8",
        option: [54,48,14],
        answer:1,
    },
    {
        q: "6x9",
        option: [18,42,54],
        answer:2,
    },
    {
        q: "6x10",
        option: [66,60,58],
        answer:1,
    },
    {
        q: "6x11",
        option: [66,60,17],
        answer:0,
    },


    {
        q: "7x1",
        option: [7,14,8],
        answer:0,
    },
    {
        q: "7x2",
        option: [9,7,14],
        answer:2,
    },
    {
        q: "7x3",
        option: [14,21,28],
        answer:1,
    },
    {
        q: "7x4",
        option: [28,35,21],
        answer:0,
    },
    {
        q: "7x5",
        option: [42,28,35],
        answer:2,
    },
    {
        q: "7x6",
        option: [42,35,49],
        answer:0,
    },
    {
        q: "7x7",
        option: [42,49,14],
        answer:1,
    },
    {
        q: "7x8",
        option: [57,56,48],
        answer:1,
    },
    {
        q: "7x9",
        option: [56,48,63],
        answer:2,
    },
    {
        q: "7x10",
        option: [35,63,17],
        answer:1,
    },
    {
        q: "7x11",
        option: [77,14,18],
        answer:0,
    },

    {
        q: "8x1",
        option: [8,16,9],
        answer:0,
    },
    {
        q: "8x2",
        option: [15,13,16],
        answer:2,
    },
    {
        q: "8x3",
        option: [16,24,8],
        answer:1,
    },
    {
        q: "8x4",
        option: [32,40,48],
        answer:0,
    },
    {
        q: "8x5",
        option: [48,36,48],
        answer:2,
    },
    {
        q: "8x6",
        option: [48,32,56],
        answer:0,
    },
    {
        q: "8x7",
        option: [48,56,15],
        answer:1,
    },
    {
        q: "8x8",
        option: [66,64,16],
        answer:1,
    },
    {
        q: "8x9",
        option: [78,64,72],
        answer:2,
    },
    {
        q: "8x10",
        option: [72,80,88],
        answer:1,
    },
    {
        q: "8x11",
        option: [88,80,72],
        answer:0,
    },



    {
        q: "9x1",
        option: [9,10,18],
        answer:0,
    },
    {
        q: "9x2",
        option: [9,27,18],
        answer:2,
    },
    {
        q: "9x3",
        option: [36,27,18],
        answer:1,
    },
    {
        q: "9x4",
        option: [36,48,45],
        answer:0,
    },
    {
        q: "9x5",
        option: [36,54,45],
        answer:2,
    },
    {
        q: "9x6",
        option: [54,45,63],
        answer:0,
    },
    {
        q: "9x7",
        option: [16,63,54],
        answer:1,
    },
    {
        q: "9x8",
        option: [81,72,36],
        answer:1,
    },
    {
        q: "9x9",
        option: [90,72,81],
        answer:2,
    },
    {
        q: "9x10",
        option: [80,90,98],
        answer:1,
    },
    {
        q: "9x11",
        option: [99,88,81],
        answer:0,
    },
]
