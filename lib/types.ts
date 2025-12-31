import { LucideIcon } from "lucide-react";

export type Tutor = {
  id: string;
  name: string;
  role: string;
  availability: string;
  focusAreas: string[];
};

export type ClassGroup = {
  id: string;
  name: string;
  schedule: string;
  subject: string;
  students: number;
  status: "active" | "paused" | "upcoming";
};

export type Session = {
  id: string;
  time: string;
  topic: string;
  group: string;
  status: "live" | "upcoming" | "completed";
  joinLink: string;
};

export type Student = {
  id: string;
  name: string;
  cohort: string;
  mastery: number;
  risk: "low" | "medium" | "high";
  notes: string;
};

export type HomeworkItem = {
  id: string;
  title: string;
  student: string;
  due: string;
  status: "pending" | "scheduled" | "completed";
  difficulty: "easy" | "medium" | "hard";
};

export type EvaluationItem = {
  id: string;
  student: string;
  metric: string;
  score: string;
  status: "pending" | "completed";
};

export type QuestionItem = {
  id: string;
  type: "MCQ" | "Case Study";
  prompt: string;
  subject: string;
  difficulty: string;
};

export type RevisionPlan = {
  id: string;
  focus: string;
  cadence: string;
  owner: string;
  status: "scheduled" | "draft" | "active";
};

export type Project = {
  id: string;
  title: string;
  cohort: string;
  milestone: string;
  status: "on-track" | "at-risk" | "behind";
};

export type Report = {
  id: string;
  type: string;
  audience: string;
  status: "draft" | "ready" | "sent";
  period: string;
};

export type AutomationRule = {
  id: string;
  name: string;
  trigger: string;
  action: string;
  channel: string;
  status: "active" | "paused";
};

export type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  badge?: string;
};
