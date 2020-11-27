const jxtyfsl = [
    {jxtyf: '202007', sl: '32523'},
    {jxtyf: '202008', sl: '33912'}
]
const jxtyfjjlxsl = [
    {jxtyf: '202007', jjlx: '换卡面卡', sl: '11'},
    {jxtyf: '202007', jjlx: '加办卡', sl: '4603'},
    {jxtyf: '202007', jjlx: '新办卡', sl: '27909'},
    {jxtyf: '202008', jjlx: '换卡面卡', sl: '4'},
    {jxtyf: '202008', jjlx: '加办卡', sl: '2326'},
    {jxtyf: '202008', jjlx: '新办卡', sl: '31582'},
]
const jxtyfjjlxzzspjgsl = [
    {jxtyf: '202007', jjlx: '换卡面卡', zzspjg: '批核', sl: '11'},
    {jxtyf: '202007', jjlx: '加办卡', zzspjg: '拒绝', sl: '883'},
    {jxtyf: '202007', jjlx: '加办卡', zzspjg: '批核', sl: '3418'},
    {jxtyf: '202007', jjlx: '加办卡', zzspjg: '取消', sl: '302'},
    {jxtyf: '202007', jjlx: '新办卡', zzspjg: '', sl: '8'},
    {jxtyf: '202007', jjlx: '新办卡', zzspjg: '拒绝', sl: '16382'},
    {jxtyf: '202007', jjlx: '新办卡', zzspjg: '批核', sl: '8797'},
    {jxtyf: '202007', jjlx: '新办卡', zzspjg: '取消', sl: '2722'},
    {jxtyf: '202008', jjlx: '换卡面卡', zzspjg: '批核', sl: '4'},
    {jxtyf: '202008', jjlx: '加办卡', zzspjg: '拒绝', sl: '366'},
    {jxtyf: '202008', jjlx: '加办卡', zzspjg: '批核', sl: '1799'},
    {jxtyf: '202008', jjlx: '加办卡', zzspjg: '取消', sl: '161'},
    {jxtyf: '202008', jjlx: '新办卡', zzspjg: '拒绝', sl: '21041'},
    {jxtyf: '202008', jjlx: '新办卡', zzspjg: '批核', sl: '8100'},
    {jxtyf: '202008', jjlx: '新办卡', zzspjg: '取消', sl: '2440'},
    {jxtyf: '202008', jjlx: '新办卡', zzspjg: '停留', sl: '1'},
]
const xlkhs = [
    {
        xl: 'x', khs: '53671'
    },
    {
        xl: '专科', khs: '535671'
    },
    {
        xl: '中专', khs: '531'
    },
    {
        xl: '初中及以下', khs: '3671'
    },
    {
        xl: '本科', khs: '5371'
    },
    {
        xl: '硕士', khs: '671'
    },
    {
        xl: '高中', khs: '5661'
    }
]
const xlkdjkhs = [
    {
        xl: 'x', kdj: '普卡', khs: '53671'
    },
    {
        xl: 'x', kdj: '白金卡', khs: '111'
    },
    {
        xl: 'x', kdj: '黑卡', khs: '2222'
    },
    {
        xl: 'x', kdj: '金卡', khs: '33333'
    },
    {
        xl: '专科', kdj: '普卡', khs: '2863'
    },
    {
        xl: '专科', kdj: '白金卡', khs: '555'
    },
    {
        xl: '专科', kdj: '黑卡', khs: '86583'
    },
    {
        xl: '专科', kdj: '金卡', khs: '5671'
    },
    {
        xl: '中专', kdj: '白金卡', khs: '531'
    },
    {
        xl: '中专', kdj: '黑卡', khs: '531'
    },
    {
        xl: '中专', kdj: '金卡', khs: '531'
    },
    {
        xl: '中专', kdj: '普卡', khs: '531'
    },
    {
        xl: '初中及以下', kdj: '普卡', khs: '3671'
    },
    {
        xl: '初中及以下', kdj: '白金卡', khs: '3671'
    },
    {
        xl: '初中及以下', kdj: '黑卡', khs: '3671'
    },
    {
        xl: '初中及以下', kdj: '金卡', khs: '3671'
    },
    {
        xl: '本科', kdj: '普卡', khs: '5371'
    },
    {
        xl: '本科', kdj: '白金卡', khs: '5371'
    },
    {
        xl: '本科', kdj: '金卡', khs: '5371'
    },
    {
        xl: '本科', kdj: '黑卡', khs: '5371'
    },
    {
        xl: '硕士', kdj: '普卡', khs: '671'
    },
    {
        xl: '硕士', kdj: '白金卡', khs: '671'
    },
    {
        xl: '硕士', kdj: '黑卡', khs: '671'
    },
    {
        xl: '硕士', kdj: '金卡', khs: '671'
    },
    {
        xl: '高中', kdj: '普卡', khs: '5661'
    },
    {
        xl: '高中', kdj: '白金卡', khs: '5661'
    },
    {
        xl: '高中', kdj: '黑卡', khs: '5661'
    },
    {
        xl: '高中', kdj: '金卡', khs: '5661'
    }
]

export default {
    xlkhs,
    kdjxlkhs: xlkdjkhs,
    xlkdjkhs: xlkdjkhs,
    jxtyfsl,
    jxtyfjjlxsl: jxtyfjjlxsl,
    jjlxjxtyfsl: jxtyfjjlxsl,
    jxtyfjjlxzzspjgsl: jxtyfjjlxzzspjgsl,
    jxtyfzzspjgjjlxsl: jxtyfjjlxzzspjgsl,
    jjlxjxtyfzzspjgsl: jxtyfjjlxzzspjgsl,
    jjlxzzspjgjxtyssl: jxtyfjjlxzzspjgsl,
    zzspjgjxtyfjjlxsl: jxtyfjjlxzzspjgsl,
    zzspjgjjlxjxtyfsl: jxtyfjjlxzzspjgsl
}