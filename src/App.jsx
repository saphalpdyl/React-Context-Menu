import useContextMenu from "./hooks/useContextMenu";
import ContextMenuContainer from "./components/ContextMenuContainer";

const App = () => {
  const { menuAreaRef, menuContainerAttrs } = useContextMenu();

  return <div 
    ref={menuAreaRef}
    className='h-screen w-screen bg-slate-950 flex items-center justify-center'>
      <ContextMenuContainer {...menuContainerAttrs}>
        <div 
          className={`
            fixed
            h-full w-full
            bg-gray-800
            rounded-xl border-2 border-gray-600
            shadow-lg
            flex flex-col
            transition
            divide-y-[1px] divide-gray-600
            overflow-hidden
          `}>
            <span className="text-white text-xs p-3">Settings</span>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
      </ContextMenuContainer>
  </div>;
}

// Example Menu Item
function MenuItem() {
  return (
        <div className="text-white font-bold px-3 py-3 hover:bg-slate-900 cursor-pointer">
          Abc
        </div>
  );
}

export default App;