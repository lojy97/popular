export class UpdateQuizDto {
    moduleId?: string;
    questions?:   { question:string;
    answer?:string;
}[];
created_at?: Date;
  }