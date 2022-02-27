import { Gender } from "../shared/enums/gender";

export interface StudentCreateEdit {
    id: number,
    name: string,
    grade: string,
    gender: Gender,
    busId: number,
    classesId: number[]
}   