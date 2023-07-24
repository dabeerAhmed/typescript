function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
detectType(3);
function provideId(id) {
    if (!id) {
        console.log("please provide id");
        return;
    }
    id.toLowerCase();
}
provideId("abc");
function printAll(val) {
    if (val) {
        if (typeof val === "object") {
            for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
                var s = val_1[_i];
                console.log(s);
            }
        }
        else if (typeof val === "string") {
            console.log(val);
        }
    }
}
