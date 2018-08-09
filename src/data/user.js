import Mock from 'mockjs';

var Random = Mock.Random
Random.extend({
    Occupation: function(date) {
        var Occupation = ['自由职业', '房产经纪人', '专业向导', '兼职向导', '全职向导', '历史博士在读', '本科在读']
        return this.pick(Occupation)
    },
    option: function(date) {
        var option = ['徒步向导', '带车向导', '徒步接送机', '带车接送机']
        return this.pick(option)
    },
    img: function(date) {
        var img = ['https://img.wanzi.cc/images/59c8cb1ba6544.jpg@650w_379h_1e_1c_1sh', 'https://img.wanzi.cc/images/57eb27bff07c3.jpg@650w_379h_1e_1c_1sh', 'https://img.wanzi.cc/images/5a4db9a1cd64f.jpg@650w_379h_1e_1c_1sh', 'https://img.wanzi.cc/images/583d12b7f1f35.jpg@650w_379h_1e_1c_1sh',
        'https://img.wanzi.cc/images/5a28a3ab1359d.jpg@650w_379h_1e_1c_1sh',
        'https://img.wanzi.cc/images/5a6180a4b688a.jpg@650w_379h_1e_1c_1sh',
        'https://img.wanzi.cc/images/5ac19533b80f1.png@650w_379h_1e_1c_1sh',
        'https://img.wanzi.cc/images/59b621d98922d.jpg@650w_379h_1e_1c_1sh',
        'https://img.wanzi.cc/images/5a01772fb71dd.jpg@650w_379h_1e_1c_1sh'
        ]
        return this.pick(img)
    },

})
var users = Mock.mock({
    'users|9':[{
        'id|+1':0,
        'name':'@cname',
        'img':'@img',
        'county':'@county(true)',
        'option':'@option',
        'Occupation':'@Occupation'
    }]
})

export default users;