import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUpView from "../views/SignUpView.vue";
import LogInView from "../views/LogInView.vue";
import RegistrationView from "../views/RegistrationView.vue";
//User
import UserDashboardLayout from "../layouts/UserDashboardLayout.vue";
import DashboardView from "../views/Users/DashboardView.vue";
import AssessmentView from "../views/Users/AssessmentView.vue";
import QuestionsView from "../views/Users/QuestionsView.vue";
import ResultsView from "../views/Users/ResultsView.vue";
//Adim
import AdminLoginView from "../views/Admin/AdminLoginView.vue";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout.vue";
import AdminDashboardView from "../views/Admin/AdminDashboardView.vue";
import CreateApplicationView from "../views/Admin/CreateApplicationView.vue";
import ApplicationEntriesView from "../views/Admin/ApplicationEntriesView.vue";
import ComposeAssessmentView from "../views/Admin/ComposeAssessmentView.vue";
import AssessmentHistoryView from "../views/Admin/AssessmentHistoryView.vue";
import AssessmentResultView from "../views/Admin/AssessmentResultView.vue";
import SettingsView from "../views/Admin/SettingsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpView,
    },
    {
      path: "/login",
      name: "login",
      component: LogInView,
    },
    {
      path: "/registration",
      name: "registration",
      component: RegistrationView,
    },
    /*
     * USER ROUTES
     */
    {
      path: "/user",
      name: "users",
      component: UserDashboardLayout,
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: DashboardView
        },
        {
          path: "/assessment",
          name: "assessment",
          component: AssessmentView
        },
        {
          path: "/questions",
          name: "questions",
          component: QuestionsView
        },
        {
          path: "/results",
          name: "results",
          component: ResultsView
        },
      ],
    },
    /*
     * ADMIN ROUTES
     */
    {
      path: "/adminLogin",
      name: "adminLogin",
      component: AdminLoginView,
    },
    {
      path: "/admins",
      component: AdminDashboardLayout,
      children: [
        {
          path: "login",
          component: AdminLoginView,
          meta: {
            noAuth: true,
          },
        },
        {
          path: "/admin-dashboard",
          name: "adminDashboard",
          component: AdminDashboardView,
        },
        {
          path: "/create-application",
          name: "createApplication",
          component: CreateApplicationView,
        },
        {
          path: "/application-entries",
          name: "applicationEntries",
          component: ApplicationEntriesView,
        },
        {
          path: "/compose-assessment",
          name: "composeAssessment",
          component: ComposeAssessmentView,
        },
        {
          path: "/assessment-history",
          name: "assessmentHistory",
          component: AssessmentHistoryView,
        },
        {
          path: "/assessment-result",
          name: "assessmentResult",
          component: AssessmentResultView,
        },
        {
          path: "/settings",
          name: "settings",
          component: SettingsView,
        },
      ],
    },
    {
      path: "/adminlogin",
      name: "adminlogin",
      component: AdminLoginView
    },
  ],
});

export default router;
