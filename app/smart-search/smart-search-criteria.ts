export class SmartSearchCriteria {
    muscles: string[];
    equipment: string[];
    exerciseType: string[];
    maxExercisesPerMuscle: number;
}

export class BBComWrapper {
    err_msg: string;
    ret_code: number;
    data: SmartSearchCriteria
}
