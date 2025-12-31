import {
  AutomationRule,
  ClassGroup,
  EvaluationItem,
  HomeworkItem,
  Project,
  QuestionItem,
  Report,
  RevisionPlan,
  Session,
  Student,
  Tutor
} from "./types";

export const tutor: Tutor = {
  id: "tutor-1",
  name: "Avery Quinn",
  role: "Lead Tutor",
  availability: "Today: 3 sessions, 2 review blocks",
  focusAreas: ["STEM Cohorts", "Exam Prep", "Parent Updates"]
};

export const classGroups: ClassGroup[] = [
  { id: "cg-1", name: "Algebra Sprint A", schedule: "09:00 • M/W/F", subject: "Algebra II", students: 16, status: "active" },
  { id: "cg-2", name: "Bio Foundations", schedule: "11:00 • T/Th", subject: "Biology", students: 12, status: "active" },
  { id: "cg-3", name: "Chem Readiness", schedule: "14:00 • W/Sat", subject: "Chemistry", students: 10, status: "paused" },
  { id: "cg-4", name: "SAT Mastery", schedule: "16:00 • Daily", subject: "Test Prep", students: 20, status: "active" },
  { id: "cg-5", name: "History Deep Dive", schedule: "17:00 • M/W", subject: "World History", students: 14, status: "upcoming" }
];

export const sessions: Session[] = [
  { id: "s-1", time: "08:30", topic: "Rapid review: factoring", group: "Algebra Sprint A", status: "upcoming", joinLink: "#" },
  { id: "s-2", time: "10:00", topic: "Bio lab prep", group: "Bio Foundations", status: "live", joinLink: "#" },
  { id: "s-3", time: "13:00", topic: "SAT reading drills", group: "SAT Mastery", status: "upcoming", joinLink: "#" },
  { id: "s-4", time: "15:30", topic: "Chem stoichiometry clinic", group: "Chem Readiness", status: "upcoming", joinLink: "#" },
  { id: "s-5", time: "18:00", topic: "Parent-ready summary window", group: "SAT Mastery", status: "completed", joinLink: "#" }
];

export const students: Student[] = [
  { id: "st-1", name: "Noor Patel", cohort: "SAT Mastery", mastery: 82, risk: "medium", notes: "Needs pacing reminders" },
  { id: "st-2", name: "Elias Kim", cohort: "Algebra Sprint A", mastery: 74, risk: "high", notes: "Flagged for missed practice" },
  { id: "st-3", name: "Rina Chen", cohort: "Bio Foundations", mastery: 91, risk: "low", notes: "Requesting more challenge" },
  { id: "st-4", name: "Samuel Jones", cohort: "Chem Readiness", mastery: 68, risk: "high", notes: "Concept gaps in stoichiometry" },
  { id: "st-5", name: "Lucia Gomez", cohort: "SAT Mastery", mastery: 79, risk: "medium", notes: "Needs vocabulary reinforcement" },
  { id: "st-6", name: "Kai Morgan", cohort: "Bio Foundations", mastery: 88, risk: "low", notes: "Consistent and proactive" },
  { id: "st-7", name: "Maya Rivera", cohort: "Algebra Sprint A", mastery: 83, risk: "medium", notes: "Careless errors decreasing" },
  { id: "st-8", name: "Gus Hart", cohort: "History Deep Dive", mastery: 72, risk: "medium", notes: "Late submissions twice" },
  { id: "st-9", name: "Ivy Tran", cohort: "SAT Mastery", mastery: 95, risk: "low", notes: "Ready for stretch goals" },
  { id: "st-10", name: "Omar Rahman", cohort: "Chem Readiness", mastery: 64, risk: "high", notes: "Needs lab safety reminders" }
];

export const homeworkItems: HomeworkItem[] = [
  { id: "hw-1", title: "Quadratic drills", student: "Elias Kim", due: "Today", status: "pending", difficulty: "medium" },
  { id: "hw-2", title: "Bio diagrams", student: "Kai Morgan", due: "Today", status: "pending", difficulty: "easy" },
  { id: "hw-3", title: "Essay outline", student: "Gus Hart", due: "Tomorrow", status: "scheduled", difficulty: "medium" },
  { id: "hw-4", title: "Stoichiometry set", student: "Samuel Jones", due: "Today", status: "pending", difficulty: "hard" },
  { id: "hw-5", title: "Reading drill set", student: "Noor Patel", due: "Today", status: "scheduled", difficulty: "medium" },
  { id: "hw-6", title: "Vocabulary flashcards", student: "Lucia Gomez", due: "Tomorrow", status: "completed", difficulty: "easy" },
  { id: "hw-7", title: "Parent summary draft", student: "SAT Mastery", due: "Friday", status: "scheduled", difficulty: "medium" },
  { id: "hw-8", title: "Lab safety form", student: "Chem Readiness", due: "Friday", status: "pending", difficulty: "easy" }
];

export const evaluationItems: EvaluationItem[] = [
  { id: "ev-1", student: "Noor Patel", metric: "Reading speed", score: "Pending", status: "pending" },
  { id: "ev-2", student: "Elias Kim", metric: "Algebra mastery", score: "Pending", status: "pending" },
  { id: "ev-3", student: "Rina Chen", metric: "Bio lab safety", score: "87%", status: "completed" },
  { id: "ev-4", student: "Samuel Jones", metric: "Chem accuracy", score: "Pending", status: "pending" },
  { id: "ev-5", student: "Lucia Gomez", metric: "Vocabulary", score: "82%", status: "completed" },
  { id: "ev-6", student: "Ivy Tran", metric: "SAT verbal", score: "92%", status: "completed" }
];

export const questionBank: QuestionItem[] = [
  { id: "q-1", type: "MCQ", prompt: "Identify vertex form quickly", subject: "Algebra", difficulty: "Medium" },
  { id: "q-2", type: "Case Study", prompt: "Analyze lab results", subject: "Biology", difficulty: "Hard" },
  { id: "q-3", type: "MCQ", prompt: "Grammar rewrite", subject: "English", difficulty: "Easy" },
  { id: "q-4", type: "MCQ", prompt: "Energy transfer", subject: "Physics", difficulty: "Medium" },
  { id: "q-5", type: "Case Study", prompt: "Source reliability", subject: "History", difficulty: "Medium" },
  { id: "q-6", type: "MCQ", prompt: "Logical reasoning", subject: "Test Prep", difficulty: "Medium" },
  { id: "q-7", type: "Case Study", prompt: "Design a revision sprint", subject: "Meta-Study", difficulty: "Hard" },
  { id: "q-8", type: "MCQ", prompt: "Acid-base pairs", subject: "Chemistry", difficulty: "Medium" }
];

export const revisionPlans: RevisionPlan[] = [
  { id: "rp-1", focus: "Factoring speed", cadence: "3x week", owner: "Algebra Sprint A", status: "active" },
  { id: "rp-2", focus: "Bio diagrams", cadence: "2x week", owner: "Bio Foundations", status: "scheduled" },
  { id: "rp-3", focus: "SAT pacing", cadence: "Daily", owner: "SAT Mastery", status: "active" },
  { id: "rp-4", focus: "Stoichiometry accuracy", cadence: "3x week", owner: "Chem Readiness", status: "draft" },
  { id: "rp-5", focus: "Essay structure", cadence: "Weekly", owner: "History Deep Dive", status: "scheduled" }
];

export const projects: Project[] = [
  { id: "pr-1", title: "Bio Lab Portfolio", cohort: "Bio Foundations", milestone: "Specimen report", status: "on-track" },
  { id: "pr-2", title: "SAT Parent Dossier", cohort: "SAT Mastery", milestone: "Evidence pull", status: "at-risk" },
  { id: "pr-3", title: "Historical Debate", cohort: "History Deep Dive", milestone: "Outline", status: "on-track" },
  { id: "pr-4", title: "Chem Safety Audit", cohort: "Chem Readiness", milestone: "Checklists", status: "behind" }
];

export const reports: Report[] = [
  { id: "re-1", type: "Weekly pulse", audience: "Parents", status: "ready", period: "May 12-18" },
  { id: "re-2", type: "Cohort overview", audience: "Academic Lead", status: "draft", period: "May" },
  { id: "re-3", type: "Risk alert set", audience: "Parents", status: "sent", period: "Today" },
  { id: "re-4", type: "Progress packets", audience: "Counselor", status: "ready", period: "This week" }
];

export const automationRules: AutomationRule[] = [
  { id: "ar-1", name: "Missed practice ping", trigger: "No submission 48h", action: "Send SMS reminder", channel: "SMS", status: "active" },
  { id: "ar-2", name: "At-risk parent alert", trigger: "Risk score > 80", action: "Send parent email", channel: "Email", status: "active" },
  { id: "ar-3", name: "Session recap", trigger: "Session completed", action: "Generate summary draft", channel: "Internal", status: "paused" },
  { id: "ar-4", name: "Homework nudge", trigger: "Due in 24h", action: "Send in-app message", channel: "In-app", status: "active" },
  { id: "ar-5", name: "Evaluation queue", trigger: "Pending > 5", action: "Escalate to lead tutor", channel: "Email", status: "active" }
];
