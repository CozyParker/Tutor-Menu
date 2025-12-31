import { LucideIcon } from "lucide-react";

export type NavItem = {
  id: string;
  label: string;
  route: string;
  icon: LucideIcon;
};

export type Tutor = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subjectFocus: string[];
  timezone: string;
};

export type ClassGroup = {
  id: string;
  name: string;
  level: string;
  schedule: string;
  tutorId: string;
  students: number;
};

export type Session = {
  id: string;
  title: string;
  time: string;
  status: "live" | "upcoming" | "completed";
  classId: string;
  studentOrClass: string;
  actionLabel: string;
};

export type Student = {
  id: string;
  name: string;
  cohort: string;
  riskLevel: "low" | "medium" | "high";
  mastery: number;
  recentErrors: string[];
  notes: string;
};

export type HomeworkItem = {
  id: string;
  title: string;
  status: "pending" | "scheduled" | "completed";
  dueDate: string;
  classId: string;
  submissions: number;
};

export type EvaluationItem = {
  id: string;
  studentId: string;
  type: string;
  status: "pending" | "in-review" | "completed";
  updated: string;
};

export type QuestionItem = {
  id: string;
  prompt: string;
  type: "MCQ" | "Case Study" | "Short";
  subject: string;
  difficulty: "easy" | "medium" | "hard";
  lastUsed: string;
};

export type RevisionPlan = {
  id: string;
  focus: string;
  durationWeeks: number;
  owner: string;
  milestones: string[];
};

export type Project = {
  id: string;
  title: string;
  cohort: string;
  milestones: { label: string; status: "pending" | "in-progress" | "done"; due: string }[];
  rubric: { label: string; checked: boolean; weight: number }[];
};

export type Report = {
  id: string;
  student: string;
  type: string;
  status: "draft" | "ready" | "sent";
  updated: string;
};

export type AutomationRule = {
  id: string;
  name: string;
  trigger: string;
  action: string;
  channel: string;
  active: boolean;
};

export type Insight = {
  id: string;
  title: string;
  description: string;
  intent: "warn" | "info" | "action";
};
