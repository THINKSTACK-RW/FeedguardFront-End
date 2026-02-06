import { WebDashboard } from "./components/WebDashboard";
import { LanguageProvider } from "./LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="size-full bg-gray-100">
        <WebDashboard />
      </div>
    </LanguageProvider>
  );
}