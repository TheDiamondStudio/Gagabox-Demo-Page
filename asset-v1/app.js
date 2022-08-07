/* 1.2.1 2021-04-23 18:14:05 */
var app = new function() {
    this.name = "Alpha", this.version = "1", this.date = "2009", this.folder = "asset-v1/", this.looptime = 9130, this.bpm = 105, this.totalframe = 550, this.nbpolo = 7, this.nbloopbonus = 2, this.bonusloopA = !1, this.bonusendloopA = !1, this.recmaxloop = 34, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#121212", this.col0 = "#919191", this.col1 = "#5f5f5f", this.col2 = "#4b4b4b", this.col3 = "#373737", this.col4 = "#232323", this.animearray = [{
        name: "beat1",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "beat2",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "beat3",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "beat4",
        color: "828282",
        uniqsnd: !0
    },{
        name: "beat5",
        color: "828282",
        uniqsnd: !0
    },{
        name: "melody5",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "melody1",
        color: "828282",
        uniqsnd: !0
	},{
        name: "melody2",
        color: "828282",
        uniqsnd: !0
	},{
        name: "melody3",
        color: "828282",
        uniqsnd: !0
	},
{
        name: "melody4",
        color: "828282",
        uniqsnd: !0
	},{
        name: "effect1",
        color: "828282",
        uniqsnd: !0
	},{
        name: "effect2",
        color: "828282",
        uniqsnd: !0
	},{
        name: "effect3",
        color: "828282",
        uniqsnd: !0
	},{
        name: "effect4",
        color: "828282",
        uniqsnd: !0
	},{
        name: "voice1",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "voice2",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "voice3",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "voice4",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "voice5",
        color: "828282",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "Choir",
        src: "v1-b3-santa-hb.mp4",
        code: "5,6,11",
        sound: "bonus-choir",
        aspire: "aspire-choir"
    }];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};