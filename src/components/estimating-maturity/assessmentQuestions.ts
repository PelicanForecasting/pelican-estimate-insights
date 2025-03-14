
import { Question } from './types';

export const assessmentQuestions: Question[] = [
  {
    id: "q1",
    text: "How would you describe your current estimating process?",
    options: [
      { label: "Ad-hoc (different approach for each estimate)", value: "ad-hoc", points: 1 },
      { label: "Informal (consistent but not documented)", value: "informal", points: 2 },
      { label: "Standardized (documented process followed by all estimators)", value: "standardized", points: 3 },
      { label: "Optimized (standardized with continuous improvement)", value: "optimized", points: 4 },
    ]
  },
  {
    id: "q2",
    text: "How are estimating standards maintained in your organization?",
    options: [
      { label: "Tribal knowledge (experience-based, not documented)", value: "tribal", points: 1 },
      { label: "Basic templates and checklists", value: "basic", points: 2 },
      { label: "Comprehensive estimating manual with standards", value: "comprehensive", points: 3 },
      { label: "Standards with regular review and updates", value: "regular-updates", points: 4 },
    ]
  },
  {
    id: "q3",
    text: "How do you incorporate lessons learned from completed projects?",
    options: [
      { label: "Informally or rarely", value: "rarely", points: 1 },
      { label: "Post-project reviews but limited integration into future estimates", value: "limited", points: 2 },
      { label: "Structured feedback process for major projects", value: "structured", points: 3 },
      { label: "Systematic analysis of all projects with database of learnings", value: "systematic", points: 4 },
    ]
  },
  {
    id: "q4",
    text: "What tools do you currently use for estimating? (Select the most advanced option that applies)",
    options: [
      { label: "Spreadsheets (Excel, Google Sheets)", value: "spreadsheets", points: 1 },
      { label: "Specialized estimating software (HCSS HeavyBid, etc.)", value: "specialized", points: 2 },
      { label: "Custom-built solutions", value: "custom", points: 3 },
      { label: "ERP system with estimating module", value: "erp", points: 4 },
    ]
  },
  {
    id: "q5",
    text: "How do you store and access historical project data?",
    options: [
      { label: "Paper records/Filing cabinets", value: "paper", points: 1 },
      { label: "Digital files (folders on server/cloud)", value: "digital", points: 2 },
      { label: "Basic database", value: "database", points: 3 },
      { label: "Integrated system with search capabilities", value: "integrated", points: 4 },
    ]
  },
  {
    id: "q6",
    text: "How do your estimating systems connect with other business systems?",
    options: [
      { label: "No integration (manual data transfer)", value: "none", points: 1 },
      { label: "Limited export/import capabilities", value: "limited", points: 2 },
      { label: "Partial integration with some systems", value: "partial", points: 3 },
      { label: "Full integration across platforms", value: "full", points: 4 },
    ]
  },
  {
    id: "q7",
    text: "How do you analyze the accuracy of past estimates?",
    options: [
      { label: "Limited or no formal analysis", value: "limited", points: 1 },
      { label: "Basic comparison of estimated vs. actual costs", value: "basic", points: 2 },
      { label: "Structured analysis for selected projects", value: "structured", points: 3 },
      { label: "Comprehensive analysis with statistical methods", value: "comprehensive", points: 4 },
    ]
  },
  {
    id: "q8",
    text: "How do you forecast production rates for new projects?",
    options: [
      { label: "Industry standards or rules of thumb", value: "industry", points: 1 },
      { label: "General company experience", value: "general", points: 2 },
      { label: "Historical averages from similar projects", value: "historical", points: 3 },
      { label: "Statistical analysis with confidence intervals", value: "statistical", points: 4 },
    ]
  },
  {
    id: "q9",
    text: "How do you make bid/no-bid decisions?",
    options: [
      { label: "Gut feeling/experience", value: "gut", points: 1 },
      { label: "Basic criteria checklist", value: "basic", points: 2 },
      { label: "Formal scoring system", value: "formal", points: 3 },
      { label: "Data-driven analysis with multiple factors", value: "data-driven", points: 4 },
    ]
  },
  {
    id: "q10",
    text: "How is estimating knowledge transferred in your organization?",
    options: [
      { label: "On-the-job learning", value: "on-job", points: 1 },
      { label: "Informal mentoring", value: "mentoring", points: 2 },
      { label: "Structured training program", value: "structured", points: 3 },
      { label: "Comprehensive development with certification", value: "comprehensive", points: 4 },
    ]
  },
  {
    id: "q11",
    text: "What happens when experienced estimators leave your company?",
    options: [
      { label: "Significant knowledge loss", value: "significant", points: 1 },
      { label: "Some documentation but substantial impact", value: "substantial", points: 2 },
      { label: "Key information documented but nuances lost", value: "documented", points: 3 },
      { label: "Minimal impact due to knowledge management systems", value: "minimal", points: 4 },
    ]
  },
  {
    id: "q12",
    text: "How confident are your estimators in their productivity assumptions?",
    options: [
      { label: "Limited confidence (high contingencies)", value: "limited", points: 1 },
      { label: "Moderate confidence for familiar work", value: "moderate", points: 2 },
      { label: "Good confidence with some uncertainty", value: "good", points: 3 },
      { label: "High confidence based on data analysis", value: "high", points: 4 },
    ]
  },
];
