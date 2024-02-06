"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
function checkNull(id) {
    if (!id) {
        console.log(id, "Here id should be a falsy value");
        return;
    }
    return id.toLowerCase();
}
checkNull(null);
