export interface Section {
  name: string;
  content: string;
  order: number;
}

export interface WebsiteIdea {
  idea: string;
  sections: Section[];
}