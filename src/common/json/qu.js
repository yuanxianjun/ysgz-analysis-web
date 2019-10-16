var trafficeData, savePeploeData, dangerData, data;
trafficeData = {
    "area": "2019年全省合计",
    "all": "1132",
    "speed": "246",
    "nation": "68",
    "province": "117",
    "country": "364",
    "city": "337",
    "cityList": [
        {
            area: "贵阳",
            districtList: [
                {
                    "area": "小计",
                    "all": " 271",
                    "speed": "57",
                    "nation": "12",
                    "province": "13",
                    "country": "62",
                    "city": "127"
                },
                { "area": "南明区", "all": "34", "speed": "1", "nation": "0", "province": "0", "country": "1", "city": "32" },
                { "area": "云岩区", "all": "21", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "21" },
                { "area": "清镇市", "all": "32", "speed": "17", "nation": "0", "province": "0", "country": "6", "city": "9" },
                { "area": "花溪区", "all": "28", "speed": "3", "nation": "2", "province": "3", "country": "20", "city": "0" },
                { "area": "乌当区", "all": "29", "speed": "9", "nation": "6", "province": "1", "country": "4", "city": "9" },
                { "area": "白云区", "all": "30", "speed": "6", "nation": "1", "province": "1", "country": "8", "city": "14" },
                { "area": "经开区", "all": "9", "speed": "1", "nation": "0", "province": "4", "country": "0", "city": "4" },
                { "area": "开阳县", "all": "9", "speed": "7", "nation": "0", "province": "0", "country": "2", "city": "0" },
                { "area": "息烽县", "all": "10", "speed": "2", "nation": "3", "province": "0", "country": "4", "city": "1" },
                { "area": "修文县", "all": "20", "speed": "3", "nation": "0", "province": "4", "country": "8", "city": "5" },
                { "area": "观山湖区", "all": "49", "speed": "8", "nation": "0", "province": "0", "country": "9", "city": "32" },

            ]
        },
        {
            "area": "遵义",
            districtList: [
                {
                    "area": "小计",
                    "all": "237",
                    "speed": "42",
                    "nation": "16",
                    "province": "28",
                    "country": "88",
                    "city": "63"
                },
                { "area": "红花岗区", "all": "23", "speed": "1", "nation": "0", "province": "0", "country": "4", "city": "18" },
                { "area": "汇川区", "all": "21", "speed": "5", "nation": "4", "province": "0", "country": "8", "city": "4" },
                { "area": "赤水县", "all": "8", "speed": "0", "nation": "0", "province": "0", "country": "4", "city": "4" },
                { "area": "新浦区", "all": "11", "speed": "1", "nation": "1", "province": "0", "country": "3", "city": "6" },
                { "area": "仁怀市", "all": "26", "speed": "4", "nation": "0", "province": "0", "country": "15", "city": "7" },
                { "area": "播州区", "all": "33", "speed": "6", "nation": "2", "province": "8", "country": "12", "city": "5" },
                { "area": "桐梓县", "all": "17", "speed": "5", "nation": "1", "province": "4", "country": "4", "city": "3" },
                { "area": "绥阳县", "all": "21", "speed": "2", "nation": "0", "province": "1", "country": "12", "city": "6" },
                { "area": "正安县", "all": "15", "speed": "1", "nation": "0", "province": "7", "country": "6", "city": "1" },
                { "area": "道真县", "all": "4", "speed": "1", "nation": "0", "province": "0", "country": "3", "city": "0" },
                { "area": "务川县", "all": "4", "speed": "1", "nation": "0", "province": "0", "country": "3", "city": "0" },
                { "area": "凤冈县", "all": "4", "speed": "0", "nation": "0", "province": "0", "country": "2", "city": "2" },
                { "area": "湄潭县", "all": "26", "speed": "12", "nation": "2", "province": "1", "country": "8", "city": "3" },
                { "area": "余庆县", "all": "10", "speed": "1", "nation": "0", "province": "5", "country": "2", "city": "2" },
                { "area": "习水县", "all": "14", "speed": "2", "nation": "6", "province": "2", "country": "2", "city": "2" },

            ]
        },
        {
            "area": "安顺",
            districtList: [
                {
                    "area": "小计",
                    "all": "237",
                    "all": "75",
                    "speed": "23",
                    "nation": "2",
                    "province": "9",
                    "country": "23",
                    "city": "18"
                },
                { "area": "西秀区", "all": "35", "speed": "12", "nation": "0", "province": "2", "country": "10", "city": "11" },
                { "area": "黄果树开发区", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0" },
                { "area": "平坝县", "all": "1", "speed": "0", "nation": "0", "province": "0", "country": "1", "city": "0" },
                { "area": "普定县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0" },
                { "area": "关岭县", "all": "14", "speed": "7", "nation": "2", "province": "1", "country": "4", "city": "0" },
                { "area": "镇宁县", "all": "7", "speed": "2", "nation": "0", "province": "1", "country": "4", "city": "0" },
                { "area": "紫云县", "all": "11", "speed": "2", "nation": "0", "province": "5", "country": "2", "city": "2" },
                { "area": "安顺市开发区", "all": "7", "speed": "0", "nation": "0", "province": "0", "country": "2", "city": "5" },
            ]
        },
        {
            "area": "黔南",
            districtList: [
                {
                    "area": "小计",
                    "all": "121",
                    "speed": "33",
                    "nation": "8",
                    "province": "12",
                    "country": "46",
                    "city": "22"
                },
                { "area": "都匀市", "all": "19", "speed": "7", "nation": "3", "province": "0", "country": "3", "city": "6" },
                { "area": "福泉市", "all": "14", "speed": "4", "nation": "1", "province": "0", "country": "5", "city": "4" },
                { "area": "荔波县", "all": "10", "speed": "0", "nation": "0", "province": "0", "country": "6", "city": "4" },
                { "area": "贵定县", "all": "10", "speed": "2", "nation": "0", "province": "0", "country": "7", "city": "1" },
                { "area": "瓮安县", "all": "13", "speed": "3", "nation": "0", "province": "4", "country": "4", "city": "2" },
                { "area": "独山县", "all": "10", "speed": "5", "nation": "1", "province": "0", "country": "4", "city": "0" },
                { "area": "平塘县", "all": "13", "speed": "0", "nation": "0", "province": "4", "country": "7", "city": "2" },
                { "area": "罗甸县", "all": "2", "speed": "0", "nation": "0", "province": "1", "country": "1", "city": "0" },
                { "area": "长顺县", "all": "4", "speed": "2", "nation": "0", "province": "0", "country": "1", "city": "1" },
                { "area": "龙里县", "all": "10", "speed": "7", "nation": "1", "province": "1", "country": "0", "city": "1" },
                { "area": "惠水县", "all": "4", "speed": "0", "nation": "0", "province": "0", "country": "3", "city": "1" },
                { "area": "三都县", "all": "10", "speed": "1", "nation": "2", "province": "2", "country": "5", "city": "0" },
            ]
        },
        {
            "area": "黔东南",
            districtList: [
                {
                    "area": "小计",
                    "all": "49",
                    "speed": "10",
                    "nation": "7",
                    "province": "6",
                    "country": "14",
                    "city": "12"
                },
                { "area": "凯里市", "all": "6", "speed": "1", "nation": "1", "province": "2", "country": "2", "city": "0" },
                { "area": "黄平县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0" },
                { "area": "施秉县", "all": "2", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "2" },
                { "area": "三穗县", "all": "3", "speed": "1", "nation": "1", "province": "0", "country": "1", "city": "0" },
                { "area": "镇远县", "all": "3", "speed": "0", "nation": "0", "province": "2", "country": "1", "city": "0" },
                { "area": "岑巩县", "all": "1", "speed": "1", "nation": "0", "province": "0", "country": "0", "city": "0" },
                { "area": "天柱县", "all": "1", "speed": "0", "nation": "0", "province": "1", "country": "0", "city": "0" },
                { "area": "锦屏县", "all": "1", "speed": "0", "nation": "0", "province": "0", "country": "1", "city": "0" },
                { "area": "剑河县", "all": "1", "speed": "1", "nation": "0", "province": "0", "country": "0", "city": "0" },
                { "area": "台江县", "all": "4", "speed": "1", "nation": "1", "province": "0", "country": "1", "city": "1" },
                { "area": "黎平县", "all": "6", "speed": "1", "nation": "0", "province": "0", "country": "4", "city": "1" },
                { "area": "榕江县", "all": "1", "speed": "0", "nation": "1", "province": "0", "country": "0", "city": "0" },
                { "area": "从江县", "all": "7", "speed": "1", "nation": "2", "province": "0", "country": "3", "city": "1" },
                { "area": "雷山县", "all": "1", "speed": "0", "nation": "0", "province": "0", "country": "1", "city": "0" },
                { "area": "麻江县", "all": "1", "speed": "1", "nation": "0", "province": "0", "country": "0", "city": "0" },
                { "area": "丹寨县", "all": "6", "speed": "2", "nation": "1", "province": "0", "country": "0", "city": "3" },
                { "area": "经济开发区", "all": "5", "speed": "0", "nation": "0", "province": "1", "country": "0", "city": "4" },
            ]
        },
        {
            "area": "铜仁",
            districtList: [
                {
                    "area": "小计",
                    "all": "91",
                    "speed": "27",
                    "nation": "6",
                    "province": "11",
                    "country": "29",
                    "city": "18"
                },
                { "area": "铜仁市", "all": "16", "speed": "5", "nation": "0", "province": "2", "country": "3", "city": "6" },
                { "area": "万山特区", "all": "7", "speed": "0", "nation": "2", "province": "0", "country": "3", "city": "2" },
                { "area": "江口县", "all": "7", "speed": "6", "nation": "0", "province": "1", "country": "0", "city": "0" },
                { "area": "玉屏县", "all": "4", "speed": "1", "nation": "2", "province": "0", "country": "0", "city": "1" },
                { "area": "石阡县", "all": "9", "speed": "6", "nation": "0", "province": "2", "country": "0", "city": "1" },
                { "area": "思南县", "all": "10", "speed": "3", "nation": "0", "province": "1", "country": "6", "city": "0" },
                { "area": "印江县", "all": "8", "speed": "1", "nation": "0", "province": "4", "country": "2", "city": "1" },
                { "area": "德江县", "all": "8", "speed": "4", "nation": "1", "province": "0", "country": "3", "city": "0" },
                { "area": "沿河县", "all": "4", "speed": "1", "nation": "0", "province": "0", "country": "3", "city": "0" },
                { "area": "松桃县", "all": "17", "speed": "0", "nation": "1", "province": "1", "country": "8", "city": "7" },
                { "area": "大龙经济开发区", "all": "1", "speed": "0", "nation": "0", "province": "0", "country": "1", "city": "0" },
            ]
        },
        {
            "area": "毕节",
            districtList: [
                {
                    "area": "小计",
                    "all": "109",
                    "speed": "19",
                    "nation": "7",
                    "province": "1",
                    "country": "50",
                    "city": "32"
                },
                { "area": "七星关区", "all": "29", "speed": "5", "nation": "0", "province": "0", "country": "10", "city": "14" },
                { "area": "大方县", "all": "16", "speed": "3", "nation": "2", "province": "0", "country": "9", "city": "2" },
                { "area": "黔西县", "all": "20", "speed": "4", "nation": "4", "province": "0", "country": "8", "city": "4" },
                { "area": "金沙县", "all": "2", "speed": "0", "nation": "0", "province": "0", "country": "1", "city": "1" },
                { "area": "织金县", "all": "12", "speed": "2", "nation": "0", "province": "0", "country": "4", "city": "6" },
                { "area": "纳雍县", "all": "9", "speed": "2", "nation": "0", "province": "1", "country": "4", "city": "2" },
                { "area": "威宁县", "all": "11", "speed": "1", "nation": "1", "province": "0", "country": "6", "city": "3" },
                { "area": "赫章县", "all": "10", "speed": "2", "nation": "0", "province": "0", "country": "8", "city": "0" },
            ]
        },
        {
            "area": "六盘水",
            districtList: [
                {
                    "area": "小计",
                    "all": "96",
                    "speed": "22",
                    "nation": "4",
                    "province": "29",
                    "country": "18",
                    "city": "23"
                },
                { "area": "钟山区", "all": "13", "speed": "0", "nation": "0", "province": "5", "country": "1", "city": "7" },
                { "area": "六枝特区", "all": "8", "speed": "0", "nation": "0", "province": "4", "country": "2", "city": "2" },
                { "area": "水城县", "all": "41", "speed": "10", "nation": "1", "province": "15", "country": "10", "city": "5" },
                { "area": "盘县", "all": "29", "speed": "12", "nation": "3", "province": "5", "country": "3", "city": "6" },
                { "area": "红桥新区", "all": "5", "speed": "0", "nation": "0", "province": "0", "country": "2", "city": "3" },
            ]
        },
        {
            "area": "黔西南",
            districtList: [
                {
                    "area": "小计",
                    "all": "68",
                    "speed": "12",
                    "nation": "6",
                    "province": "8",
                    "country": "32",
                    "city": "10"
                },
                { "area": "兴义市", "all": "20", "speed": "1", "nation": "2", "province": "1", "country": "9", "city": "7" },
                { "area": "顶效开发区", "all": "8", "speed": "2", "nation": "0", "province": "0", "country": "6", "city": "0" },
                { "area": "兴仁县", "all": "12", "speed": "3", "nation": "1", "province": "1", "country": "5", "city": "2" },
                { "area": "普安县", "all": "6", "speed": "1", "nation": "0", "province": "0", "country": "5", "city": "0" },
                { "area": "晴隆县", "all": "10", "speed": "5", "nation": "2", "province": "0", "country": "3", "city": "0" },
                { "area": "贞丰县", "all": "6", "speed": "0", "nation": "0", "province": "5", "country": "0", "city": "1" },
                { "area": "望漠县", "all": "3", "speed": "0", "nation": "0", "province": "0", "country": "3", "city": "0" },
                { "area": "册亨县", "all": "1", "speed": "0", "nation": "0", "province": "0", "country": "1", "city": "0" },
                { "area": "安龙县", "all": "2", "speed": "0", "nation": "1", "province": "1", "country": "0", "city": "0" },
            ]
        },
        {
            "area": "贵安",
            districtList: [
                {
                    "area": "小计",
                    "all": "15",
                    "speed": "1",
                    "nation": "0",
                    "province": "0",
                    "country": "2",
                    "city": "12"
                },
            ]
        },
    ]
}
dangerData = {
    "area": "2019年全省合计 ", "all": "200", "speed": "4", "nation": "1", "province": "138", "country": "44", "city": "3", "fire": "1", "corrosives": "1", "oxygen": "8",
    "cityList": [
        {
            area: "贵阳",
            districtList: [
                {
                    "area": "小计",
                    "all": "0", "speed": "1", "nation": "0", "province": "83", "country": "35", "city": "3", "fire": "0", "corrosives": "0", "oxygen": "6"
                },
                { "area": "南明区", "all": "29", "speed": "1", "nation": "0", "province": "22", "country": "4", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "2" },
                { "area": "云岩区", "all": "26", "speed": "0", "nation": "0", "province": "17", "country": "9", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "清镇市", "all": "7", "speed": "0", "nation": "0", "province": "6", "country": "0", "city": "1", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "花溪区", "all": "13", "speed": "0", "nation": "0", "province": "5", "country": "8", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "乌当区", "all": "4", "speed": "0", "nation": "0", "province": "2", "country": "2", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "白云区", "all": "15", "speed": "0", "nation": "0", "province": "8", "country": "5", "city": "2", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "小河区", "all": "8", "speed": "0", "nation": "0", "province": "5", "country": "2", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "1" },
                { "area": "开阳县", "all": "4", "speed": "0", "nation": "0", "province": "2", "country": "2", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "息烽县", "all": "1", "speed": "0", "nation": "0", "province": "0", "country": "1", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "修文县", "all": "7", "speed": "0", "nation": "0", "province": "5", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "2" },
                { "area": "金阳", "all": "0", "speed": "0", "nation": "0", "province": "11", "country": "2", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "1" },

            ]
        },
        {
            "area": "遵义",
            districtList: [
                {
                    "area": "小计", "all": "19", "speed": "1", "nation": "1", "province": "16", "country": "2", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0"
                },
                { "area": "红花岗区", "all": "10", "speed": "0", "nation": "0", "province": "9", "country": "1", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "汇川区", "all": "2", "speed": "0", "nation": "0", "province": "1", "country": "1", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "赤水县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "仁怀市", "all": "1", "speed": "0", "nation": "0", "province": "1", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "遵义县", "all": "3", "speed": "0", "nation": "0", "province": "3", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "桐梓县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "绥阳县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "正安县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "道真县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "务川县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "凤冈县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "湄潭县", "all": "1", "speed": "0", "nation": "0", "province": "1", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "余庆县", "all": "1", "speed": "0", "nation": "0", "province": "1", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "习水县", "all": "1", "speed": "1", "nation": "1", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },

            ]
        },
        {
            "area": "安顺",
            districtList: [
                {
                    "area": "小计",
                    "all": "4", "speed": "0", "nation": "0", "province": "3", "country": "1", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0"
                },
                { "area": "西秀区", "all": "1", "speed": "0", "nation": "0", "province": "1", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "黄果树开发区", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "平坝县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "普定县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "关岭县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "镇宁县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "紫云县", "all": "2", "speed": "0", "nation": "0", "province": "1", "country": "1", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "安顺市开发区", "all": "1", "speed": "0", "nation": "0", "province": "1", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
            ]
        },
        {
            "area": "黔南",
            districtList: [
                {
                    "area": "小计",
                    "all": "11", "speed": "0", "nation": "0", "province": "7", "country": "3", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "1"
                },
                { "area": "都匀市", "all": "5", "speed": "0", "nation": "0", "province": "2", "country": "3", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "福泉市", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "荔波县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "贵定县", "all": "1", "speed": "0", "nation": "0", "province": "1", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "瓮安县", "all": "3", "speed": "0", "nation": "0", "province": "2", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "1" },
                { "area": "独山县", "all": "2", "speed": "0", "nation": "0", "province": "2", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "平塘县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "罗甸县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "长顺县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "龙里县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "惠水县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "三都县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
            ]
        },
        {
            "area": "黔东南",
            districtList: [
                {
                    "area": "小计",
                    "all": "3", "speed": "0", "nation": "0", "province": "3", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0"
                },
                { "area": "凯里市", "all": "2", "speed": "0", "nation": "0", "province": "2", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "黄平县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "施秉县", "all": "1", "speed": "0", "nation": "0", "province": "1", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "三穗县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "镇远县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "岑巩县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "天柱县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "锦屏县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "剑河县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "台江县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "黎平县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "榕江县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "从江县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "雷山县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "麻江县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "丹寨县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "经济开发区", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
            ]
        },
        {
            "area": "铜仁",
            districtList: [
                {
                    "area": "小计",
                    "all": "2", "speed": "1", "nation": "0", "province": "1", "country": "0", "city": "0", "fire": "1", "corrosives": "1", "oxygen": "0"
                },
                { "area": "铜仁市", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "万山特区", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "1", "corrosives": "0", "oxygen": "0" },
                { "area": "江口县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "玉屏县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "石阡县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "1", "oxygen": "0" },
                { "area": "思南县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "印江县", "all": "1", "speed": "0", "nation": "0", "province": "1", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "德江县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "沿河县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "松桃县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "大龙经济开发区", "all": "1", "speed": "1", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
            ]
        },
        {
            "area": "毕节",
            districtList: [
                {
                    "area": "小计",
                    "all": "6", "speed": "1", "nation": "0", "province": "3", "country": "2", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0"
                },
                { "area": "七星关区", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "毕节市", "all": "5", "speed": "1", "nation": "0", "province": "3", "country": "1", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "大方县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "黔西县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "金沙县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "织金县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "纳雍县", "all": "1", "speed": "0", "nation": "0", "province": "0", "country": "1", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "威宁县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "赫章县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
            ]
        },
        {
            "area": "六盘水",
            districtList: [
                {
                    "area": "小计",
                    "all": "20", "speed": "0", "nation": "0", "province": "19", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "1"
                },
                { "area": "钟山区", "all": "10", "speed": "0", "nation": "0", "province": "10", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "六枝特区", "all": "3", "speed": "0", "nation": "0", "province": "3", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "水城县", "all": "6", "speed": "0", "nation": "0", "province": "5", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "1" },
                { "area": "盘县", "all": "1", "speed": "0", "nation": "0", "province": "1", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "红桥新区", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
            ]
        },
        {
            "area": "黔西南",
            districtList: [
                {
                    "area": "小计",
                    "all": "4", "speed": "0", "nation": "0", "province": "3", "country": "1", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0"
                },
                { "area": "兴义市", "all": "1", "speed": "0", "nation": "0", "province": "1", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "顶效开发区", "all": "1", "speed": "0", "nation": "0", "province": "0", "country": "1", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "兴仁县", "all": "1", "speed": "0", "nation": "0", "province": "1", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "普安县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "晴隆县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "贞丰县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "望漠县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "册亨县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "安龙县", "all": "1", "speed": "0", "nation": "0", "province": "1", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
            ]
        },
        {
            "area": "贵安",
            districtList: [
                {
                    "area": "小计",
                    "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0"
                },
                { "area": "湖潮乡", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "党武镇", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "高峰镇", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
                { "area": "马场镇", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0", "fire": "0", "corrosives": "0", "oxygen": "0" },
            ]
        },
    ]
}
savePeploeData = {
    "area": "2019年全省合计",
    "all": "1132",
    "speed": "246",
    "nation": "68",
    "province": "117",
    "country": "364",
    "city": "337",
    "cityList": [
        {
            area: "贵阳",
            districtList: [
                {
                    "area": "小计",
                    "all": " 271",
                    "speed": "57",
                    "nation": "12",
                    "province": "13",
                    "country": "62",
                    "city": "127"
                },
                { "area": "南明区", "all": "34", "speed": "1", "nation": "0", "province": "0", "country": "1", "city": "32" },
                { "area": "云岩区", "all": "21", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "21" },
                { "area": "清镇市", "all": "32", "speed": "17", "nation": "0", "province": "0", "country": "6", "city": "9" },
                { "area": "花溪区", "all": "28", "speed": "3", "nation": "2", "province": "3", "country": "20", "city": "0" },
                { "area": "乌当区", "all": "29", "speed": "9", "nation": "6", "province": "1", "country": "4", "city": "9" },
                { "area": "白云区", "all": "30", "speed": "6", "nation": "1", "province": "1", "country": "8", "city": "14" },
                { "area": "经开区", "all": "9", "speed": "1", "nation": "0", "province": "4", "country": "0", "city": "4" },
                { "area": "开阳县", "all": "9", "speed": "7", "nation": "0", "province": "0", "country": "2", "city": "0" },
                { "area": "息烽县", "all": "10", "speed": "2", "nation": "3", "province": "0", "country": "4", "city": "1" },
                { "area": "修文县", "all": "20", "speed": "3", "nation": "0", "province": "4", "country": "8", "city": "5" },
                { "area": "观山湖区", "all": "49", "speed": "8", "nation": "0", "province": "0", "country": "9", "city": "32" },

            ]
        },
        {
            "area": "遵义",
            districtList: [
                {
                    "area": "小计",
                    "all": "237",
                    "speed": "42",
                    "nation": "16",
                    "province": "28",
                    "country": "88",
                    "city": "63"
                },
                { "area": "红花岗区", "all": "23", "speed": "1", "nation": "0", "province": "0", "country": "4", "city": "18" },
                { "area": "汇川区", "all": "21", "speed": "5", "nation": "4", "province": "0", "country": "8", "city": "4" },
                { "area": "赤水县", "all": "8", "speed": "0", "nation": "0", "province": "0", "country": "4", "city": "4" },
                { "area": "新浦区", "all": "11", "speed": "1", "nation": "1", "province": "0", "country": "3", "city": "6" },
                { "area": "仁怀市", "all": "26", "speed": "4", "nation": "0", "province": "0", "country": "15", "city": "7" },
                { "area": "播州区", "all": "33", "speed": "6", "nation": "2", "province": "8", "country": "12", "city": "5" },
                { "area": "桐梓县", "all": "17", "speed": "5", "nation": "1", "province": "4", "country": "4", "city": "3" },
                { "area": "绥阳县", "all": "21", "speed": "2", "nation": "0", "province": "1", "country": "12", "city": "6" },
                { "area": "正安县", "all": "15", "speed": "1", "nation": "0", "province": "7", "country": "6", "city": "1" },
                { "area": "道真县", "all": "4", "speed": "1", "nation": "0", "province": "0", "country": "3", "city": "0" },
                { "area": "务川县", "all": "4", "speed": "1", "nation": "0", "province": "0", "country": "3", "city": "0" },
                { "area": "凤冈县", "all": "4", "speed": "0", "nation": "0", "province": "0", "country": "2", "city": "2" },
                { "area": "湄潭县", "all": "26", "speed": "12", "nation": "2", "province": "1", "country": "8", "city": "3" },
                { "area": "余庆县", "all": "10", "speed": "1", "nation": "0", "province": "5", "country": "2", "city": "2" },
                { "area": "习水县", "all": "14", "speed": "2", "nation": "6", "province": "2", "country": "2", "city": "2" },

            ]
        },
        {
            "area": "安顺",
            districtList: [
                {
                    "area": "小计",
                    "all": "237",
                    "all": "75",
                    "speed": "23",
                    "nation": "2",
                    "province": "9",
                    "country": "23",
                    "city": "18"
                },
                { "area": "西秀区", "all": "35", "speed": "12", "nation": "0", "province": "2", "country": "10", "city": "11" },
                { "area": "黄果树开发区", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0" },
                { "area": "平坝县", "all": "1", "speed": "0", "nation": "0", "province": "0", "country": "1", "city": "0" },
                { "area": "普定县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0" },
                { "area": "关岭县", "all": "14", "speed": "7", "nation": "2", "province": "1", "country": "4", "city": "0" },
                { "area": "镇宁县", "all": "7", "speed": "2", "nation": "0", "province": "1", "country": "4", "city": "0" },
                { "area": "紫云县", "all": "11", "speed": "2", "nation": "0", "province": "5", "country": "2", "city": "2" },
                { "area": "安顺市开发区", "all": "7", "speed": "0", "nation": "0", "province": "0", "country": "2", "city": "5" },
            ]
        },
        {
            "area": "黔南",
            districtList: [
                {
                    "area": "小计",
                    "all": "121",
                    "speed": "33",
                    "nation": "8",
                    "province": "12",
                    "country": "46",
                    "city": "22"
                },
                { "area": "都匀市", "all": "19", "speed": "7", "nation": "3", "province": "0", "country": "3", "city": "6" },
                { "area": "福泉市", "all": "14", "speed": "4", "nation": "1", "province": "0", "country": "5", "city": "4" },
                { "area": "荔波县", "all": "10", "speed": "0", "nation": "0", "province": "0", "country": "6", "city": "4" },
                { "area": "贵定县", "all": "10", "speed": "2", "nation": "0", "province": "0", "country": "7", "city": "1" },
                { "area": "瓮安县", "all": "13", "speed": "3", "nation": "0", "province": "4", "country": "4", "city": "2" },
                { "area": "独山县", "all": "10", "speed": "5", "nation": "1", "province": "0", "country": "4", "city": "0" },
                { "area": "平塘县", "all": "13", "speed": "0", "nation": "0", "province": "4", "country": "7", "city": "2" },
                { "area": "罗甸县", "all": "2", "speed": "0", "nation": "0", "province": "1", "country": "1", "city": "0" },
                { "area": "长顺县", "all": "4", "speed": "2", "nation": "0", "province": "0", "country": "1", "city": "1" },
                { "area": "龙里县", "all": "10", "speed": "7", "nation": "1", "province": "1", "country": "0", "city": "1" },
                { "area": "惠水县", "all": "4", "speed": "0", "nation": "0", "province": "0", "country": "3", "city": "1" },
                { "area": "三都县", "all": "10", "speed": "1", "nation": "2", "province": "2", "country": "5", "city": "0" },
            ]
        },
        {
            "area": "黔东南",
            districtList: [
                {
                    "area": "小计",
                    "all": "49",
                    "speed": "10",
                    "nation": "7",
                    "province": "6",
                    "country": "14",
                    "city": "12"
                },
                { "area": "凯里市", "all": "6", "speed": "1", "nation": "1", "province": "2", "country": "2", "city": "0" },
                { "area": "黄平县", "all": "0", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "0" },
                { "area": "施秉县", "all": "2", "speed": "0", "nation": "0", "province": "0", "country": "0", "city": "2" },
                { "area": "三穗县", "all": "3", "speed": "1", "nation": "1", "province": "0", "country": "1", "city": "0" },
                { "area": "镇远县", "all": "3", "speed": "0", "nation": "0", "province": "2", "country": "1", "city": "0" },
                { "area": "岑巩县", "all": "1", "speed": "1", "nation": "0", "province": "0", "country": "0", "city": "0" },
                { "area": "天柱县", "all": "1", "speed": "0", "nation": "0", "province": "1", "country": "0", "city": "0" },
                { "area": "锦屏县", "all": "1", "speed": "0", "nation": "0", "province": "0", "country": "1", "city": "0" },
                { "area": "剑河县", "all": "1", "speed": "1", "nation": "0", "province": "0", "country": "0", "city": "0" },
                { "area": "台江县", "all": "4", "speed": "1", "nation": "1", "province": "0", "country": "1", "city": "1" },
                { "area": "黎平县", "all": "6", "speed": "1", "nation": "0", "province": "0", "country": "4", "city": "1" },
                { "area": "榕江县", "all": "1", "speed": "0", "nation": "1", "province": "0", "country": "0", "city": "0" },
                { "area": "从江县", "all": "7", "speed": "1", "nation": "2", "province": "0", "country": "3", "city": "1" },
                { "area": "雷山县", "all": "1", "speed": "0", "nation": "0", "province": "0", "country": "1", "city": "0" },
                { "area": "麻江县", "all": "1", "speed": "1", "nation": "0", "province": "0", "country": "0", "city": "0" },
                { "area": "丹寨县", "all": "6", "speed": "2", "nation": "1", "province": "0", "country": "0", "city": "3" },
                { "area": "经济开发区", "all": "5", "speed": "0", "nation": "0", "province": "1", "country": "0", "city": "4" },
            ]
        },
        {
            "area": "铜仁",
            districtList: [
                {
                    "area": "小计",
                    "all": "91",
                    "speed": "27",
                    "nation": "6",
                    "province": "11",
                    "country": "29",
                    "city": "18"
                },
                { "area": "铜仁市", "all": "16", "speed": "5", "nation": "0", "province": "2", "country": "3", "city": "6" },
                { "area": "万山特区", "all": "7", "speed": "0", "nation": "2", "province": "0", "country": "3", "city": "2" },
                { "area": "江口县", "all": "7", "speed": "6", "nation": "0", "province": "1", "country": "0", "city": "0" },
                { "area": "玉屏县", "all": "4", "speed": "1", "nation": "2", "province": "0", "country": "0", "city": "1" },
                { "area": "石阡县", "all": "9", "speed": "6", "nation": "0", "province": "2", "country": "0", "city": "1" },
                { "area": "思南县", "all": "10", "speed": "3", "nation": "0", "province": "1", "country": "6", "city": "0" },
                { "area": "印江县", "all": "8", "speed": "1", "nation": "0", "province": "4", "country": "2", "city": "1" },
                { "area": "德江县", "all": "8", "speed": "4", "nation": "1", "province": "0", "country": "3", "city": "0" },
                { "area": "沿河县", "all": "4", "speed": "1", "nation": "0", "province": "0", "country": "3", "city": "0" },
                { "area": "松桃县", "all": "17", "speed": "0", "nation": "1", "province": "1", "country": "8", "city": "7" },
                { "area": "大龙经济开发区", "all": "1", "speed": "0", "nation": "0", "province": "0", "country": "1", "city": "0" },
            ]
        },
        {
            "area": "毕节",
            districtList: [
                {
                    "area": "小计",
                    "all": "109",
                    "speed": "19",
                    "nation": "7",
                    "province": "1",
                    "country": "50",
                    "city": "32"
                },
                { "area": "七星关区", "all": "29", "speed": "5", "nation": "0", "province": "0", "country": "10", "city": "14" },
                { "area": "大方县", "all": "16", "speed": "3", "nation": "2", "province": "0", "country": "9", "city": "2" },
                { "area": "黔西县", "all": "20", "speed": "4", "nation": "4", "province": "0", "country": "8", "city": "4" },
                { "area": "金沙县", "all": "2", "speed": "0", "nation": "0", "province": "0", "country": "1", "city": "1" },
                { "area": "织金县", "all": "12", "speed": "2", "nation": "0", "province": "0", "country": "4", "city": "6" },
                { "area": "纳雍县", "all": "9", "speed": "2", "nation": "0", "province": "1", "country": "4", "city": "2" },
                { "area": "威宁县", "all": "11", "speed": "1", "nation": "1", "province": "0", "country": "6", "city": "3" },
                { "area": "赫章县", "all": "10", "speed": "2", "nation": "0", "province": "0", "country": "8", "city": "0" },
            ]
        },
        {
            "area": "六盘水",
            districtList: [
                {
                    "area": "小计",
                    "all": "96",
                    "speed": "22",
                    "nation": "4",
                    "province": "29",
                    "country": "18",
                    "city": "23"
                },
                { "area": "钟山区", "all": "13", "speed": "0", "nation": "0", "province": "5", "country": "1", "city": "7" },
                { "area": "六枝特区", "all": "8", "speed": "0", "nation": "0", "province": "4", "country": "2", "city": "2" },
                { "area": "水城县", "all": "41", "speed": "10", "nation": "1", "province": "15", "country": "10", "city": "5" },
                { "area": "盘县", "all": "29", "speed": "12", "nation": "3", "province": "5", "country": "3", "city": "6" },
                { "area": "红桥新区", "all": "5", "speed": "0", "nation": "0", "province": "0", "country": "2", "city": "3" },
            ]
        },
        {
            "area": "黔西南",
            districtList: [
                {
                    "area": "小计",
                    "all": "68",
                    "speed": "12",
                    "nation": "6",
                    "province": "8",
                    "country": "32",
                    "city": "10"
                },
                { "area": "兴义市", "all": "20", "speed": "1", "nation": "2", "province": "1", "country": "9", "city": "7" },
                { "area": "顶效开发区", "all": "8", "speed": "2", "nation": "0", "province": "0", "country": "6", "city": "0" },
                { "area": "兴仁县", "all": "12", "speed": "3", "nation": "1", "province": "1", "country": "5", "city": "2" },
                { "area": "普安县", "all": "6", "speed": "1", "nation": "0", "province": "0", "country": "5", "city": "0" },
                { "area": "晴隆县", "all": "10", "speed": "5", "nation": "2", "province": "0", "country": "3", "city": "0" },
                { "area": "贞丰县", "all": "6", "speed": "0", "nation": "0", "province": "5", "country": "0", "city": "1" },
                { "area": "望漠县", "all": "3", "speed": "0", "nation": "0", "province": "0", "country": "3", "city": "0" },
                { "area": "册亨县", "all": "1", "speed": "0", "nation": "0", "province": "0", "country": "1", "city": "0" },
                { "area": "安龙县", "all": "2", "speed": "0", "nation": "1", "province": "1", "country": "0", "city": "0" },
            ]
        },
        {
            "area": "贵安",
            districtList: [
                {
                    "area": "小计",
                    "all": "15",
                    "speed": "1",
                    "nation": "0",
                    "province": "0",
                    "country": "2",
                    "city": "12"
                },
            ]
        },
    ]
}
var data = {
    dangerData,
    trafficeData,
    savePeploeData
}
export default data;