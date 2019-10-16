
var trafficData, savePeploeData, dangerData, data;

// 交通数据
trafficData = [
    {
        "area": "2019年全省合计 ",
        "all": "1132",
        "speed": "246",
        "nation": "68",
        "province": "117",
        "country": "364",
        "city": "337"
    },
    {
        "area": "贵阳",
        "all": " 271",
        "speed": "57",
        "nation": "12",
        "province": "13",
        "country": "62",
        "city": "127"
    },
    {
        "area": "遵义",
        "all": "237",
        "speed": "42",
        "nation": "16",
        "province": "28",
        "country": "88",
        "city": "63"
    },
    {
        "area": "安顺",
        "all": "237",
        "all": "75",
        "speed": "23",
        "nation": "2",
        "province": "9",
        "country": "23",
        "city": "18"
    },
    {
        "area": "黔南",
        "all": "121",
        "speed": "33",
        "nation": "8",
        "province": "12",
        "country": "46",
        "city": "22"
    },
    {
        "area": "黔东南",
        "all": "49",
        "speed": "10",
        "nation": "7",
        "province": "6",
        "country": "14",
        "city": "12"
    },
    {
        "area": "铜仁",
        "all": "91",
        "speed": "27",
        "nation": "6",
        "province": "11",
        "country": "29",
        "city": "18"
    },
    {
        "area": "毕节",
        "all": "109",
        "speed": "19",
        "nation": "7",
        "province": "1",
        "country": "50",
        "city": "32"
    },
    {
        "area": "六盘水",
        "all": "96",
        "speed": "22",
        "nation": "4",
        "province": "29",
        "country": "18",
        "city": "23"
    },
    {
        "area": "黔西南",
        "all": "68",
        "speed": "12",
        "nation": "6",
        "province": "8",
        "country": "32",
        "city": "10"
    },
    {
        "area": "贵安",
        "all": "15",
        "speed": "1",
        "nation": "0",
        "province": "0",
        "country": "2",
        "city": "12"
    }
]
// 救人数据
savePeploeData = [
    { "area": "2019年全省合计 ", "all": "3086", "speed": "970", "nation": "25", "province": "901", "country": "582", "city": "608" },
    { "area": "贵阳", "all": "1459", "speed": "720", "nation": "5", "province": "534", "country": "170", "city": "248" },
    { "area": "遵义", "all": "475", "speed": "136", "nation": "7", "province": "134", "country": "89", "city": "109" },
    { "area": "安顺", "all": "93", "speed": "13", "nation": "0", "province": "32", "country": "29", "city": "19" },
    { "area": "黔南", "all": "144", "speed": "10", "nation": "0", "province": "33", "country": "68", "city": "33" },
    { "area": "黔东南", "all": "95", "speed": "21", "nation": "3", "province": "13", "country": "27", "city": "31" },
    { "area": "铜仁", "all": "108", "speed": "9", "nation": "1", "province": "21", "country": "43", "city": "34" },
    { "area": "毕节", "all": "118", "speed": "12", "nation": "1", "province": "32", "country": "39", "city": "34" },
    { "area": "六盘水", "all": "182", "speed": "25", "nation": "8", "province": "63", "country": "45", "city": "41" },
    { "area": "黔西南", "all": "181", "speed": "23", "nation": "0", "province": "32", "country": "67", "city": "59" },
    { "area": "贵安", "all": "13", "speed": "1", "nation": "0", "province": "7", "country": "5", "city": "0" },
]
// 救人数据
dangerData = [
    { "area": "2019年全省合计 ", "all": "200", "speed": "4", "nation": "1", "province": "138", "country": "44", "city": "3", "fire": "1", "corrosives": "1", "oxygen": "8" },
    { "area": "贵阳", "all": "0", "speed": "1", "nation": "0", "province": "83", "country": "35", "city": "3", "fire": "0", "corrosives": "0", "oxygen": "6" },
    { "area": "遵义", "all": "19", "speed": "1", "nation": "1", "province": "16", "country": "2", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
    { "area": "安顺", "all": "4", "speed": "0", "nation": "0", "province": "3", "country": "1", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
    { "area": "黔南", "all": "11", "speed": "0", "nation": "0", "province": "7", "country": "3", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "1" },
    { "area": "黔东南", "all": "3", "speed": "0", "nation": "0", "province": "3", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
    { "area": "铜仁", "all": "2", "speed": "1", "nation": "0", "province": "1", "country": "0", "city": "0", "fire": "1", "corrosives": "1", "oxygen": "0" },
    { "area": "毕节", "all": "6", "speed": "1", "nation": "0", "province": "3", "country": "2", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
    { "area": "六盘水", "all": "20", "speed": "0", "nation": "0", "province": "19", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "1" },
    { "area": "黔西南", "all": "4", "speed": "0", "nation": "0", "province": "3", "country": "1", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
    { "area": "贵安", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
]
data = {
    trafficData, savePeploeData, dangerData
};
export default data;