import cn from "../utils/cn";

const ContextMenuContainer = ({ children, isShown, position, className, style }) => {
  return (
    <div
      style={{
        top: position ? position.y : 0,
        left: position ? position.x : 0,
        ...style
      }}
      className={cn(`
        fixed
        w-52 h-64
        transition
        translate-x-5
        ${isShown ? "-translate-y-0" : "-translate-y-10"}
        ${isShown ? "opacity-100" : "opacity-0"}
        `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default ContextMenuContainer;
