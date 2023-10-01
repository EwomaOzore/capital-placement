// src/api/types.ts

export interface ApplicationQuestion {
    type: string;
    question: string;
    choices: string[];
    enableOther: boolean;
    maxChoiceAllowed: string;
    disqualifyOnNo: boolean;
}

export interface ApplicationForm {
    questions: ApplicationQuestion[];
    // Add more fields as needed
}
