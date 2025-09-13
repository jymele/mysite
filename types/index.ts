export interface SkillsData {
  [category: string]: string[];
}

export interface ExperienceItem {
  type: "Work" | "Education";
  title: string;
  context: string;
  date: string;
  details: string[];
}

export interface ProjectItem {
  title: string;
  context: string;
  details: string;
}

export interface ModalData {
  title: string;
  content: string;
}
