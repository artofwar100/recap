import { Bus } from "../bus/bus";
import { Class } from "../class/class";
import { Gender } from "../shared/enums/gender";

export interface Student {
    id: number,
    name: string,
    grade: string,
    gender: Gender,
    bus: Bus,
    busId?: number,
    classes: Class[],
    classesId?: number[]
}