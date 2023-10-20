"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var professional_1 = require("./professional");
var professional1 = new professional_1.Professional("Fulanito", 45, 80, 175, false, "español", 0, "pocero");
var professional2 = new professional_1.Professional("Menganito", 85, 60, 150, true, "portugues", 0, "electricista");
var professional3 = new professional_1.Professional("Juanito", 18, 50, 160, false, "mexicano", 3, "actor");
professional1.toString();
professional2.toString();
professional3.toString();
