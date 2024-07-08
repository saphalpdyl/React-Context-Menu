import { useState, useEffect, useRef } from "react";

const useContextMenu = () => {
    const [ isShown, setIsShown ] = useState(false);
    const [ position, setPosition ] = useState(null);
    const menuAreaRef = useRef();

    useEffect(() => {
        window.addEventListener("contextmenu", (e) => e.preventDefault());
    }, [])
    
    function _changeMousePosition(e, isDelayed=true) {
        setTimeout(() => {
            setPosition({
            x: e.pageX,
            y: e.pageY,
            })
        }, isDelayed ? 150 : 0);
    }

    const handleContextMenu = (e) => {
        setIsShown(isShown => {
            if ( isShown )
              _changeMousePosition(e);
            else 
              _changeMousePosition(e, false);
            return !isShown;
        });
    }
    
    const handleClick = (e) => {
        setIsShown(_ => {
            _changeMousePosition(e);
            return false;
        });
    }

    useEffect(() => {
        window.addEventListener("contextmenu", (e) => e.preventDefault());

        if ( menuAreaRef.current ) {
            menuAreaRef.current.addEventListener("contextmenu", handleContextMenu)
            menuAreaRef.current.addEventListener("click", handleClick)
        }
        
        return () => {
            if ( menuAreaRef.current ) {
                menuAreaRef.current.removeEventListener("contextmenu", handleContextMenu)
                menuAreaRef.current.removeEventListener("click", handleClick)
            }
        }
      }, [])
    
    
    return { 
        menuAreaRef,
        contextMenuShowing : isShown,
        mousePosition: position,
        menuContainerAttrs: {
            isShown,
            position,
        },
    };
}

export default useContextMenu;