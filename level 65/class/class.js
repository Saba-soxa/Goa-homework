let chemiTavi = {
  saxeli: "საბა",
  asaki: 13,
  qalaqi: "თბილისი",
  sayvareliFeri: "ლურჯი",
  sayvareliSakvebi: "ხინკალი და მწვადი",
  sayvareliEna: "html და css",
  
  gamotanaInfo: function() {
    return "მე ვარ " + this.saxeli + ", ვარ " + this.asaki + " წლის, ვცხოვრობ " + this.qalaqi + "-ში. ჩემი საყვარელი ფერია " + this.sayvareliFasi + 
           ", საყვარელი საკვებია " + this.sayvareliSakvebi + ", ხოლო საყვარელი ენაა " + this.saxvaruliEna + ".";
  }
};

console.log(chemiTavi.gamotanaInfo());
