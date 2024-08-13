import Header from "./components/Header";
import ButtonGradient from "./assets/ButtonGradient";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <div className="container h-[2000px] flex items-center flex-col p-8 lg:p-32">
        <h1 className="text-[32px] lg:text-[42px] xl:text-[52px] ">Content</h1>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
