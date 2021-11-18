"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailRef = exports.questionnaireRef = exports.orgRef = void 0;
const admin = require('firebase-admin');
var serviceAccount = require('../../admin.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://revo-backend-eb9a3-default-rtdb.firebaseio.com",
    authDomain: "revo-backend-eb9a3.firebaseapp.com",
});
const db = admin.database();
exports.orgRef = db.ref("organizations");
exports.questionnaireRef = db.ref("questionnaires");
exports.emailRef = db.ref("emails");
//# sourceMappingURL=firebase.js.map