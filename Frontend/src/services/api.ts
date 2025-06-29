import axios from "axios";

// ! in PRODUZIONE: da spostare in .env il dominio e gli endpoints
export const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  withXSRFToken: true,
});

// ***** GUEST *****
export const userEndpoint = "/api/user";
export const courseEndpoint = "/api/courses";
export const subjectsEndpoint = "/api/subjects";
export const studentsEndpoint = "/api/students";
export const presencesEndpoint = "/api/presences";
export const lessonScheduleEndpoint = "/api/lesson_schedules";
export const assignmentEndpoint = "/api/assignments";
export const profileEndpoint = "/api/profile";
export const examsEndpoint = "/api/exams";
export const gradesEndpoint = "/api/grades";
export const announcementsEndpoint = "/api/announcements";

// ***** ADMIN *****

export const adminTeachersEndpoint = "/api/admin/teachers";
export const adminCoursesEndpoint = "/api/admin/courses";
export const adminSubjectsEndpoint = "/api/admin/subjects";
