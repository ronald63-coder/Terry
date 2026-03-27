import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/root-layout";
import { LoginPage } from "./components/login-page";
import { RegistrationPage } from "./components/registration-page";
import { DashboardPage } from "./components/dashboard-page";
import { FileAnalysisPage } from "./components/file-analysis-page";
import { ScanResultsPage } from "./components/scan-results-page";
import { UserMonitoringPage } from "./components/user-monitoring-page";
import { ThreatHistoryPage } from "./components/threat-history-page";
import { SystemHealthPage } from "./components/system-health-page";
import { AgentControlPage } from "./components/agent-control-page";
import { NC4ReportingPage } from "./components/nc4-reporting-page";
import { BackendTestPage } from "./components/backend-test-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: LoginPage },
      { path: "register", Component: RegistrationPage },
      { path: "dashboard", Component: DashboardPage },
      { path: "file-analysis", Component: FileAnalysisPage },
      { path: "scan-results", Component: ScanResultsPage },
      { path: "user-monitoring", Component: UserMonitoringPage },
      { path: "threat-history", Component: ThreatHistoryPage },
      { path: "system-health", Component: SystemHealthPage },
      { path: "agent-control", Component: AgentControlPage },
      { path: "nc4-reporting", Component: NC4ReportingPage },
      { path: "backend-test", Component: BackendTestPage },
    ],
  },
]);