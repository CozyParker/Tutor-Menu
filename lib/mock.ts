import {
  AlarmClock,
  Atom,
  BarChart3,
  BellRing,
  BookOpenCheck,
  Brain,
  CheckSquare,
  ClipboardList,
  Cog,
  Flag,
  Gamepad2,
  Hammer,
  Layers,
  ListChecks,
  NotebookPen,
  Presentation,
  Sparkles,
  Users,
} from "lucide-react";
import { AutomationRule, ClassGroup, EvaluationItem, HomeworkItem, Insight, NavItem, Project, QuestionItem, Report, RevisionPlan, Session, Student, Tutor } from "./types";

export const navItems: NavItem[] = [
  { id: "dashboard", label: "Today", route: "/", icon: AlarmClock },
  { id: "classes", label: "Classes & Cohorts", route: "/classes", icon: Users },
  { id: "progress", label: "Progress & Evaluation", route: "/progress", icon: BarChart3 },
  { id: "homework", label: "Homework Manager", route: "/homework", icon: ClipboardList },
  { id: "assessments", label: "Assessment Builder", route: "/assessments", icon: Hammer },
  { id: "revision", label: "Revision Planner", route: "/revision", icon: Brain },
  { id: "visuals", label: "Visual Teaching Tools", route: "/visuals", icon: Presentation },
  { id: "gamification", label: "Gamification Controls", route: "/gamification", icon: Gamepad2 },
  { id: "projects", label: "Projects & Cases", route: "/projects", icon: Layers },
  { id: "reports", label: "Reports", route: "/reports", icon: NotebookPen },
  { id: "automations", label: "Automation & Rules", route: "/automations", icon: Sparkles },
  { id: "settings", label: "Tutor Settings", route: "/settings", icon: Cog },
];

export const tutor: Tutor = {
  id: "tutor-1",
  name: "Marina Ross",
  email: "marina.ross@oriontutors.com",
  phone: "+1 555-402-1188",
  subjectFocus: ["Algebra", "Physics", "Critical Writing"],
  timezone: "GMT-5 Eastern",
};

export const classGroups: ClassGroup[] = [
  {
    id: "c1",
    name: "Algebra Foundations",
    level: "Grade 8",
    schedule: "Mon & Wed · 4:00 PM",
    tutorId: "tutor-1",
    students: 14,
  },
  {
    id: "c2",
    name: "Physics Problem Lab",
    level: "Grade 10",
    schedule: "Tue & Thu · 5:30 PM",
    tutorId: "tutor-1",
    students: 10,
  },
  {
    id: "c3",
    name: "Essay Craft Studio",
    level: "Grade 11",
    schedule: "Fri · 3:00 PM",
    tutorId: "tutor-1",
    students: 8,
  },
  {
    id: "c4",
    name: "SAT Math Sprint",
    level: "Exam Track",
    schedule: "Sat · 9:00 AM",
    tutorId: "tutor-1",
    students: 12,
  },
  {
    id: "c5",
    name: "STEM Scholars",
    level: "Grade 9",
    schedule: "Wed · 6:30 PM",
    tutorId: "tutor-1",
    students: 9,
  },
  {
    id: "c6",
    name: "Calculus Prep Lab",
    level: "Grade 12",
    schedule: "Tue · 7:30 PM",
    tutorId: "tutor-1",
    students: 11,
  },
  {
    id: "c7",
    name: "Chem Lab Skills",
    level: "Grade 10",
    schedule: "Thu · 4:30 PM",
    tutorId: "tutor-1",
    students: 13,
  },
  {
    id: "c8",
    name: "Writing Lab Intensive",
    level: "Grade 12",
    schedule: "Sun · 10:00 AM",
    tutorId: "tutor-1",
    students: 7,
  },
];

export const sessions: Session[] = [
  { id: "s1", title: "Algebra Foundations", time: "9:00 AM", status: "live", classId: "c1", studentOrClass: "14 students", actionLabel: "Join" },
  { id: "s2", title: "Physics Problem Lab", time: "11:00 AM", status: "upcoming", classId: "c2", studentOrClass: "10 students", actionLabel: "Prep" },
  { id: "s3", title: "1:1 with Maya T.", time: "1:00 PM", status: "upcoming", classId: "c5", studentOrClass: "Maya T.", actionLabel: "Notes" },
  { id: "s4", title: "Essay Craft Studio", time: "3:30 PM", status: "completed", classId: "c3", studentOrClass: "8 students", actionLabel: "Wrap" },
  { id: "s5", title: "Calculus Prep Lab", time: "5:00 PM", status: "upcoming", classId: "c6", studentOrClass: "11 students", actionLabel: "Prep" },
  { id: "s6", title: "Chem Lab Skills", time: "6:15 PM", status: "upcoming", classId: "c7", studentOrClass: "13 students", actionLabel: "Prep" },
  { id: "s7", title: "Writing Lab Intensive", time: "7:30 PM", status: "upcoming", classId: "c8", studentOrClass: "7 students", actionLabel: "Prep" },
  { id: "s8", title: "Check-in: Ines D.", time: "8:30 PM", status: "completed", classId: "c5", studentOrClass: "1:1", actionLabel: "Notes" },
];

export const students: Student[] = [
  {
    id: "st1",
    name: "Maya Thompson",
    cohort: "Algebra Foundations",
    riskLevel: "high",
    mastery: 58,
    recentErrors: ["Linear equations setup", "Fraction simplification"],
    notes: "Needs slower pacing and visuals for fractions.",
  },
  {
    id: "st2",
    name: "Leo Carter",
    cohort: "Physics Problem Lab",
    riskLevel: "medium",
    mastery: 72,
    recentErrors: ["Vector decomposition"],
    notes: "Benefits from guided practice sessions.",
  },
  {
    id: "st3",
    name: "Sara Patel",
    cohort: "Essay Craft Studio",
    riskLevel: "low",
    mastery: 86,
    recentErrors: ["Thesis clarity"],
    notes: "Add more peer-review prompts.",
  },
  {
    id: "st4",
    name: "Julian Brooks",
    cohort: "SAT Math Sprint",
    riskLevel: "medium",
    mastery: 68,
    recentErrors: ["Data analysis charts", "Probability basics"],
    notes: "Assign timed drills twice weekly.",
  },
  {
    id: "st5",
    name: "Ines Duarte",
    cohort: "STEM Scholars",
    riskLevel: "high",
    mastery: 49,
    recentErrors: ["Unit conversions", "Scientific notation"],
    notes: "Flag for parent check-in.",
  },
  {
    id: "st6",
    name: "Mikhail Ivanov",
    cohort: "Physics Problem Lab",
    riskLevel: "low",
    mastery: 91,
    recentErrors: ["Momentum sign"],
    notes: "Ready for stretch challenges.",
  },
  {
    id: "st7",
    name: "Priya Desai",
    cohort: "Algebra Foundations",
    riskLevel: "medium",
    mastery: 74,
    recentErrors: ["Quadratic factorization"],
    notes: "Pair with Maya for peer explanation.",
  },
  {
    id: "st8",
    name: "Owen Lee",
    cohort: "SAT Math Sprint",
    riskLevel: "low",
    mastery: 83,
    recentErrors: ["Circle geometry"],
    notes: "Encourage self-checklists.",
  },
];

export const homeworkQueue: HomeworkItem[] = [
  { id: "h1", title: "Linear Equation Set", status: "pending", dueDate: "Today", classId: "c1", submissions: 12 },
  { id: "h2", title: "Lab Report Outline", status: "scheduled", dueDate: "Tomorrow", classId: "c2", submissions: 8 },
  { id: "h3", title: "SAT Drill #4", status: "completed", dueDate: "Yesterday", classId: "c4", submissions: 12 },
  { id: "h4", title: "Essay Hook Draft", status: "pending", dueDate: "Today", classId: "c3", submissions: 7 },
  { id: "h5", title: "Fractions Review", status: "scheduled", dueDate: "Friday", classId: "c1", submissions: 13 },
  { id: "h6", title: "Force Diagrams", status: "completed", dueDate: "Monday", classId: "c2", submissions: 10 },
  { id: "h7", title: "Probability Quick Check", status: "pending", dueDate: "Tomorrow", classId: "c4", submissions: 11 },
  { id: "h8", title: "Research Sources", status: "scheduled", dueDate: "Saturday", classId: "c3", submissions: 6 },
];

export const evaluationQueue: EvaluationItem[] = [
  { id: "e1", studentId: "st1", type: "Weekly mastery", status: "pending", updated: "08:10" },
  { id: "e2", studentId: "st2", type: "Physics quiz", status: "in-review", updated: "Yesterday" },
  { id: "e3", studentId: "st3", type: "Essay draft", status: "pending", updated: "Today" },
  { id: "e4", studentId: "st5", type: "Skills diagnostic", status: "completed", updated: "Mon" },
  { id: "e5", studentId: "st4", type: "SAT drill", status: "pending", updated: "09:05" },
  { id: "e6", studentId: "st6", type: "Physics lab", status: "pending", updated: "Today" },
  { id: "e7", studentId: "st7", type: "Checkpoint", status: "in-review", updated: "Yesterday" },
  { id: "e8", studentId: "st8", type: "Practice test", status: "completed", updated: "Tue" },
];

export const questions: QuestionItem[] = [
  { id: "q1", prompt: "Derive the slope for a line passing through two points", type: "Short", subject: "Algebra", difficulty: "medium", lastUsed: "Today" },
  { id: "q2", prompt: "Vector decomposition of a 2D force", type: "Case Study", subject: "Physics", difficulty: "hard", lastUsed: "Yesterday" },
  { id: "q3", prompt: "Select the strongest thesis statement", type: "MCQ", subject: "Writing", difficulty: "easy", lastUsed: "Mon" },
  { id: "q4", prompt: "Probability of independent events", type: "MCQ", subject: "Math", difficulty: "medium", lastUsed: "Today" },
  { id: "q5", prompt: "Analyze this free-body diagram", type: "Case Study", subject: "Physics", difficulty: "medium", lastUsed: "Tue" },
  { id: "q6", prompt: "Simplify rational expressions", type: "MCQ", subject: "Algebra", difficulty: "hard", lastUsed: "Wed" },
  { id: "q7", prompt: "Revise this introduction paragraph", type: "Short", subject: "Writing", difficulty: "medium", lastUsed: "Today" },
  { id: "q8", prompt: "Momentum conservation scenario", type: "MCQ", subject: "Physics", difficulty: "hard", lastUsed: "Fri" },
];

export const revisionPlans: RevisionPlan[] = [
  { id: "rp1", focus: "Fractions & Ratios", durationWeeks: 3, owner: "Maya Thompson", milestones: ["Concrete examples", "Visual scaffolds", "Timed practice"] },
  { id: "rp2", focus: "Vector fundamentals", durationWeeks: 2, owner: "Leo Carter", milestones: ["Short demos", "Mini-labs", "Peer teaching"] },
  { id: "rp3", focus: "Thesis & evidence", durationWeeks: 4, owner: "Sara Patel", milestones: ["Model samples", "Practice outlines", "Feedback loops"] },
  { id: "rp4", focus: "Probability basics", durationWeeks: 2, owner: "Julian Brooks", milestones: ["Flash drills", "Scenario practice", "Confidence checks"] },
  { id: "rp5", focus: "Scientific notation", durationWeeks: 3, owner: "Ines Duarte", milestones: ["Video primer", "Guided notes", "Exit tickets"] },
  { id: "rp6", focus: "Calculus readiness", durationWeeks: 3, owner: "Calculus Prep Lab", milestones: ["Limit basics", "Derivative intro", "Product rule"] },
  { id: "rp7", focus: "Lab safety language", durationWeeks: 1, owner: "Chem Lab Skills", milestones: ["Safety quiz", "Equipment ID", "Protocol drill"] },
  { id: "rp8", focus: "Advanced outlines", durationWeeks: 2, owner: "Writing Lab", milestones: ["Thesis variants", "Evidence bank", "Counter-arguments"] },
];

export const projects: Project[] = [
  {
    id: "p1",
    title: "Physics Wind Tunnel",
    cohort: "Physics Problem Lab",
    milestones: [
      { label: "Proposal approved", status: "done", due: "Last week" },
      { label: "Prototype built", status: "in-progress", due: "Today" },
      { label: "Testing", status: "pending", due: "Next Tue" },
    ],
    rubric: [
      { label: "Scientific accuracy", checked: true, weight: 40 },
      { label: "Data quality", checked: false, weight: 35 },
      { label: "Presentation", checked: false, weight: 25 },
    ],
  },
  {
    id: "p2",
    title: "Op-Ed on AI Ethics",
    cohort: "Essay Craft Studio",
    milestones: [
      { label: "Topic lock", status: "done", due: "Mon" },
      { label: "Draft 1", status: "in-progress", due: "Thu" },
      { label: "Peer review", status: "pending", due: "Next Mon" },
    ],
    rubric: [
      { label: "Argument strength", checked: true, weight: 35 },
      { label: "Evidence quality", checked: false, weight: 35 },
      { label: "Tone and clarity", checked: false, weight: 30 },
    ],
  },
  {
    id: "p3",
    title: "SAT Math Drill Series",
    cohort: "SAT Math Sprint",
    milestones: [
      { label: "Baseline assessment", status: "done", due: "Last Fri" },
      { label: "Drill pack", status: "in-progress", due: "Today" },
      { label: "Timed mock", status: "pending", due: "Next Thu" },
    ],
    rubric: [
      { label: "Accuracy", checked: true, weight: 40 },
      { label: "Pacing", checked: false, weight: 30 },
      { label: "Reflection", checked: false, weight: 30 },
    ],
  },
  {
    id: "p4",
    title: "Calculus Concept Map",
    cohort: "Calculus Prep Lab",
    milestones: [
      { label: "Topic mapping", status: "done", due: "Yesterday" },
      { label: "Peer review", status: "in-progress", due: "Today" },
      { label: "Revision", status: "pending", due: "Next Wed" },
    ],
    rubric: [
      { label: "Completeness", checked: true, weight: 30 },
      { label: "Accuracy", checked: false, weight: 40 },
      { label: "Clarity", checked: false, weight: 30 },
    ],
  },
  {
    id: "p5",
    title: "Chemical Reaction Demo",
    cohort: "Chem Lab Skills",
    milestones: [
      { label: "Safety review", status: "done", due: "Today" },
      { label: "Trial run", status: "in-progress", due: "Tomorrow" },
      { label: "Presentation", status: "pending", due: "Next Fri" },
    ],
    rubric: [
      { label: "Safety", checked: true, weight: 40 },
      { label: "Clarity of steps", checked: false, weight: 35 },
      { label: "Observation notes", checked: false, weight: 25 },
    ],
  },
  {
    id: "p6",
    title: "Data Storytelling",
    cohort: "STEM Scholars",
    milestones: [
      { label: "Data collection", status: "done", due: "Last Tue" },
      { label: "Chart drafts", status: "in-progress", due: "Today" },
      { label: "Narrative", status: "pending", due: "Next Thu" },
    ],
    rubric: [
      { label: "Accuracy", checked: true, weight: 35 },
      { label: "Narrative", checked: false, weight: 35 },
      { label: "Design", checked: false, weight: 30 },
    ],
  },
  {
    id: "p7",
    title: "Parent Workshop Slides",
    cohort: "Essay Craft Studio",
    milestones: [
      { label: "Outline", status: "done", due: "Today" },
      { label: "Slide draft", status: "in-progress", due: "Tomorrow" },
      { label: "Rehearsal", status: "pending", due: "Next Mon" },
    ],
    rubric: [
      { label: "Clarity", checked: true, weight: 30 },
      { label: "Evidence", checked: false, weight: 40 },
      { label: "Delivery", checked: false, weight: 30 },
    ],
  },
  {
    id: "p8",
    title: "1:1 Improvement Plan",
    cohort: "1:1 Coaching",
    milestones: [
      { label: "Baseline notes", status: "done", due: "Mon" },
      { label: "Goal setting", status: "in-progress", due: "Today" },
      { label: "Parent sync", status: "pending", due: "Fri" },
    ],
    rubric: [
      { label: "Specific goals", checked: true, weight: 40 },
      { label: "Feasibility", checked: false, weight: 30 },
      { label: "Follow-up", checked: false, weight: 30 },
    ],
  },
];

export const reports: Report[] = [
  { id: "r1", student: "Maya Thompson", type: "Weekly digest", status: "draft", updated: "Today" },
  { id: "r2", student: "Leo Carter", type: "Lab summary", status: "ready", updated: "Yesterday" },
  { id: "r3", student: "Sara Patel", type: "Writing feedback", status: "sent", updated: "Mon" },
  { id: "r4", student: "Julian Brooks", type: "SAT prep", status: "draft", updated: "Today" },
  { id: "r5", student: "Ines Duarte", type: "STEM catch-up", status: "ready", updated: "Tue" },
  { id: "r6", student: "Mikhail Ivanov", type: "Physics stretch", status: "sent", updated: "Yesterday" },
  { id: "r7", student: "Priya Desai", type: "Algebra checkpoint", status: "ready", updated: "Today" },
  { id: "r8", student: "Owen Lee", type: "SAT math pacing", status: "draft", updated: "Today" },
];

export const automations: AutomationRule[] = [
  { id: "a1", name: "Flag low mastery", trigger: "Mastery < 60%", action: "Create revision plan", channel: "In-app", active: true },
  { id: "a2", name: "Homework overdue", trigger: "Due date passed", action: "Send reminder", channel: "Email", active: true },
  { id: "a3", name: "Evaluation ready", trigger: "Pending > 5", action: "Notify tutor", channel: "Push", active: false },
  { id: "a4", name: "At-risk noted", trigger: "Risk = high", action: "Schedule parent call", channel: "SMS", active: true },
  { id: "a5", name: "Project slip", trigger: "Milestone delayed", action: "Add catch-up", channel: "In-app", active: false },
  { id: "a6", name: "Report ready", trigger: "Report status = ready", action: "Send to parent", channel: "Email", active: false },
  { id: "a7", name: "Streak broken", trigger: "Missed streak > 2", action: "Send nudge", channel: "Push", active: true },
  { id: "a8", name: "Session swap", trigger: "Session rescheduled", action: "Update reminder", channel: "SMS", active: true },
];

export const insights: Insight[] = [
  {
    id: "i1",
    title: "Maya needs a visual warm-up",
    description: "Start Algebra Foundations with a 5-minute fraction tiles demo to reduce errors.",
    intent: "warn",
  },
  {
    id: "i2",
    title: "Physics group pacing",
    description: "Group B is 1.5 sessions behind—consider swapping in async mini-labs.",
    intent: "info",
  },
  {
    id: "i3",
    title: "Homework approvals",
    description: "8 submissions ready; batch approve after spot-checking 3 flagged attempts.",
    intent: "action",
  },
  {
    id: "i4",
    title: "Cohort pacing drift",
    description: "SAT Math Sprint is trending 0.8 sessions behind—drop a micro-drill today.",
    intent: "warn",
  },
  {
    id: "i5",
    title: "Parent-ready report",
    description: "Leo’s lab summary is marked ready. Export before 6 PM for parent review.",
    intent: "info",
  },
];

export const insightShortcuts = [
  { id: "reminder", label: "Send reminders", icon: BellRing },
  { id: "approve", label: "Approve all", icon: CheckSquare },
  { id: "flag", label: "Flag students", icon: Flag },
  { id: "plan", label: "Create revision", icon: Atom },
  { id: "notes", label: "Add tutor note", icon: BookOpenCheck },
  { id: "rules", label: "Automation", icon: Sparkles },
];
