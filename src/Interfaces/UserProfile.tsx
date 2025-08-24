export interface Skill {
  id: number;
  skillName: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  joinDate: string; // Consider using `Date` if parsed into a date object
  endDate: string | null;  // Same as above
  des: string;
}

export interface Certification {
  id: number;
  certificate: string;
  company: string;
  issueDate: string; // Consider `Date` for non-null values if parsed
  certificateId: string;
}

export interface UserProfile {
  id: number;
  email: string;
  name: string;
  role: string;
  location: string;
  about: string;
  company: string;
  skills: Skill[];
  expriences: Experience[];
  certifications: Certification[];
  picture: string,
  totalExprience: number
}

export interface info {
  role: string;
  location: string;
  company: string;
}
