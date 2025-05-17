export interface Job {
  jobTitle:string,
  company:string,
  applicants?:Applicant[],
  experience:string,
  jobType:string,
  location:string,
  postedAgo:string,
  jobDescription:string,
  salary:number ,
  about?:string,
  id?:number,
  skills?:[{skillName:string}],
  saved:boolean,
  applicationStatus:string,
  applicantTimestamp:string,
  jobStatus:string
}

export interface PostJobIn {
  jobTitle:string,
  company:string,
  experience:string,
  jobType:string,
  location:string,
  postedAgo:string,
  jobDescription:string,
  salary:number | null ,
  about:string,
  skills:string[],
  jobStatus:string,
  id?:number
}

  export interface Applicant {
    applicantId: number;
    timestamp: string; // ISO date string
    applicationStatus: "APPLIED" | "REJECTED" |  "INTERVIEWING" | "OFFERED"; // Extend as needed
    name: string;
    email: string;
    phone: string;
    website: string;
    cover: string;
    resume: string;
}
