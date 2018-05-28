export type Curriculum = {
  profile: Profile;
  experience: Employer[];
  academic: Academic[];
  skill: Skill[];
  proficiency: Proficiency[];
};
export type Profile = {
  picture: string;
  name: string;
  nickname: string;
  bio: string;
  sumary: string;
  email: string;
  city: string;
  state: string;
  portfolio: string;
};
export type Course = {
  id: number;
  title: string;
  author: string;
  description: string;
  topic: string;
  url: string;
};
export type Employer = {
  jobTitle: string;
  company: string;
  description: string;
};
export type Academic = {
  degree: string;
  name: string;
  description: string;
  period: Period;
};
export type Period = {
  start: string;
  end: string;
};
export type Skill = {
  name: string;
  percent: number;
  description: string;
};

export type Proficiency = {
  name: string;
  percent: number;
  description: string;
};

export type Query = {
  allSkill: Skill[];
  allEmployers: Employer[];
  getCurriculum: Curriculum;
  allCourses: Course[];
};
