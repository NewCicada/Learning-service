const table = 'fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF'
const tr = {}
for (let i = 0; i < 58; ++i) {
    tr[table[i]] = i
}

const s = [11, 10, 3, 8, 4, 6]
const xor = 177451812
const add = 8728348608

function dec(bv) {
    let r = 0
    for (let i = 0; i < 6; ++i) {
        r += tr[bv[s[i]]] * 58 ** i
    }
    return 'av' + String((r - add) ^ xor)
}

function doConvert(id) {
    const bvList = id.match(/[bB][vV][fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF]{10}/g)
    if (bvList) {
        for (const bv of bvList) {
            id = id.replace(bv, dec(bv))
        }
    }
    return id
}
function convert() {
    document.getElementById('Oldnumber').value = doConvert(document.getElementById('Newnumber').value)
}
