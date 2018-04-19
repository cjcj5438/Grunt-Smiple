/*!Grunt-Smiple - 1.0.0-2018-04-19 */var index = index || {};
index = {
    init: function () {
        console.log("index init");
    }
};
index.init();
function test() {
    this.a = 1;
};
test.prototype.method_name = function () {
    console.log(this.a)
};