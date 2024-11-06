import "./App.css";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";
function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <main className="flex-1 p-4 bg-white">
          <></>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
