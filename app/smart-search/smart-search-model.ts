export class SmartSearchCriteria {
    muscles: string[];
    equipment: string[];
    exerciseType: string[];
    maxExercisesPerMuscle: number;
}

export class BBComCriteriaWrapper {
    err_msg: string;
    ret_code: number;
    data: SmartSearchCriteria
}


export class BBComResultWrapper {
    err_msg: string;
    ret_code: number;
    data: SmartSearchResult
}

