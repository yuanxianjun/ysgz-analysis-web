// 地州市火灾整体情况
let generalData = [{
        "area": "贵阳市",
        "num": "797",
        "last": "1031",
        "oldData": "-0.226964113",
        "cmopare": "-22.7%"
    },
    {
        "area": "遵义市",
        "num": "1994",
        "last": "602",
        "oldData": "2.312292359",
        "cmopare": "231.23%"
    },
    {
        "area": "安顺市",
        "num": "210",
        "last": "406",
        "oldData": "-0.482758621",
        "cmopare": "-48.28%"
    },
    {
        "area": "黔南州",
        "num": "400",
        "last": "185",
        "oldData": "1.162162162",
        "cmopare": "116.22%"
    },
    {
        "area": "黔东南州",
        "num": "263",
        "last": "206",
        "oldData": "0.276699029",
        "cmopare": "27.67%"
    },
    {
        "area": "铜仁地区",
        "num": "376",
        "last": "360",
        "oldData": "0.044444444",
        "cmopare": "4.45%"
    },
    {
        "area": "毕节地区",
        "num": "420",
        "last": "553",
        "oldData": "-0.240506329",
        "cmopare": "-24.06%"
    },
    {
        "area": "六盘水市",
        "num": "324",
        "last": "346",
        "oldData": "-0.063583815",
        "cmopare": "-6.36%"
    },
    {
        "area": "黔西南州",
        "num": "337",
        "last": "331",
        "oldData": "0.018126888",
        "cmopare": "1.82%"
    },
    {
        "area": "贵安新区",
        "num": "18",
        "last": "19",
        "oldData": "-0.052631579",
        "cmopare": "-5.27%"
    },
    {
        "area": "贵安新区",
        "num": "18",
        "last": "19",
        "oldData": "-0.052631579",
        "cmopare": "-5.27%"
    },

]

// 火灾起数同比上升幅度前10位区县				
let fireTop10 = [{
        "area": "红花岗区",
        "num": "451",
        "last": "129",
        "cmopare": "249.61%"
    },
    {
        "area": "云岩区",
        "num": "348",
        "last": "464",
        "cmopare": "-25.00%"
    },
    {
        "area": "汇川区",
        "num": "292",
        "last": "69",
        "cmopare": "323.19%"
    },
    {
        "area": "仁怀市",
        "num": "255",
        "last": "77",
        "cmopare": "231.17%"
    },
    {
        "area": "毕节市",
        "num": "230",
        "last": "298",
        "cmopare": "-22.82%"
    },
    {
        "area": "钟山区",
        "num": "167",
        "last": "182",
        "cmopare": "-8.24%"
    },
    {
        "area": "南明区",
        "num": "136",
        "last": "119",
        "cmopare": "14.29%"
    },
    {
        "area": "西秀区",
        "num": "120",
        "last": "176",
        "cmopare": "-31.82%"
    },
    {
        "area": "凯里市",
        "num": "110",
        "last": "79",
        "cmopare": "39.24%"
    },
    {
        "area": "都匀市",
        "num": "103",
        "last": "65",
        "cmopare": "58.46%"
    },
]
// 城区火灾前10名
let up10 = [{
        "area": "正安县",
        "num": "44",
        "last": "5",
        "cmopare": "780.00%"
    },
    {
        "area": "罗甸县",
        "num": "23",
        "last": "3",
        "cmopare": "666.67%"
    },
    {
        "area": "长顺县",
        "num": "7",
        "last": "1",
        "cmopare": "600.00%"
    },
    {
        "area": "独山县",
        "num": "46",
        "last": "7",
        "cmopare": "557.14%"
    },
    {
        "area": "道真县",
        "num": "70",
        "last": "12",
        "cmopare": "483.33%"
    },
    {
        "area": "平塘县",
        "num": "11",
        "last": "2",
        "cmopare": "450.00%"
    },
    {
        "area": "松桃县",
        "num": "51",
        "last": "10",
        "cmopare": "410.00%"
    },
    {
        "area": "汇川区",
        "num": "292",
        "last": "69",
        "cmopare": "323.19%"
    },
    {
        "area": "思南县",
        "num": "21",
        "last": "5",
        "cmopare": "320.00%"
    },
    {
        "area": "锦屏县",
        "num": "8",
        "last": "2",
        "cmopare": "300.00%"
    },

]
// 城区前10
let cityTop10 = [{
        "area": "镇宁县",
        "num": "7",
        "last": "100%"
    },
    {
        "area": "云岩区",
        "num": "347",
        "last": "99.72%"
    },
    {
        "area": "南明区",
        "num": "124",
        "last": "91.18%"
    },
    {
        "area": "红桥新区",
        "num": "7",
        "last": "87.5%"
    },
    {
        "area": "钟山区",
        "num": "135",
        "last": "80.84%"
    },
    {
        "area": "罗甸县",
        "num": "18",
        "last": "78.27%"
    },
    {
        "area": "玉屏县",
        "num": "20",
        "last": "76.93%"
    },
    {
        "area": "红花岗区",
        "num": "345",
        "last": "76.5%"
    },
    {
        "area": "白云区",
        "num": "45",
        "last": "75%"
    },
    {
        "area": "观山湖",
        "num": "38",
        "last": "74.51%"
    },
]
// 农村火灾情况
let countryfire = [{
        "area": "黔西南州",
        "num": "337",
        "last": "180",
        "cmopare": "53.41%"
    },
    {
        "area": "贵安新区",
        "num": "18",
        "last": "9",
        "cmopare": "50.00%"
    },
    {
        "area": "铜仁地区",
        "num": "376",
        "last": "176",
        "cmopare": "46.81%"
    },
    {
        "area": "黔东南州",
        "num": "263",
        "last": "113",
        "cmopare": "42.97%"
    },
    {
        "area": "六盘水市",
        "num": "324",
        "last": "131",
        "cmopare": "40.43%"
    },
    {
        "area": "毕节地区",
        "num": "420",
        "last": "164",
        "cmopare": "39.05%"
    },
    {
        "area": "遵义市",
        "num": "1994",
        "last": "746",
        "cmopare": "37.41%"
    },
    {
        "area": "安顺市",
        "num": "210",
        "last": "72",
        "cmopare": "34.29%"
    },
    {
        "area": "黔南州",
        "num": "400",
        "last": "130",
        "cmopare": "32.50%"
    },
    {
        "area": "贵阳市",
        "num": "797",
        "last": "114",
        "cmopare": "14.30%"
    },
]
// 全省火灾发生
let provinceData = [{
        "area": "红花岗区",
        "num": "451",
        "last": "366",
        "cmopare": "81.15%"
    },
    {
        "area": "云岩区",
        "num": "348",
        "last": "321",
        "cmopare": "92.24%"
    },
    {
        "area": "汇川区",
        "num": "292",
        "last": "248",
        "cmopare": "84.93%"
    },
    {
        "area": "仁怀市",
        "num": "255",
        "last": "193",
        "cmopare": "75.69%"
    },
    {
        "area": "遵义县",
        "num": "175",
        "last": "156",
        "cmopare": "89.14%"
    },
]
let dieall = [{
        "area": "贵阳",
        "num": "11",
        "last": "29.73%"
    },
    {
        "area": "遵义",
        "num": "9",
        "last": "24.32%"
    },
    {
        "area": "毕节",
        "num": "8",
        "last": "21.62%"
    },
    {
        "area": "黔东南",
        "num": "7",
        "last": "18.92%"
    },
    {
        "area": "黔南",
        "num": "1",
        "last": "2.7%"
    },
    {
        "area": "铜仁",
        "num": "1",
        "last": "2.7%"
    },

]
export default {
    generalData,
    fireTop10,
    up10,
    cityTop10,
    countryfire,
    provinceData,
    dieall
}