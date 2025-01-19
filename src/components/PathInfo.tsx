// REACT IMPORTS
import { useEffect, useState } from "react";

// REACT ROUTER IMPORTS
import { useLocation } from "react-router";


// This is a Custom Hook whose function is to return the
// current, parent and grand-parent routes as strings.
// It's main purpose is for conditional rendering of
// nested routes.


interface PathInfoResult {
    currentPath: string | null;
    parentPath: string | null;
    grandParentPath: string | null;
}


const usePathInfo = (): PathInfoResult => {

    // useLocation Hook tells us the current path e.g. ".admin/users/singleUser"
    const location = useLocation();

    // paths are initialized as null
    const [pathInfo, setPathInfo] = useState<PathInfoResult>({
        currentPath: null,
        parentPath: null,
        grandParentPath: null,
    });

    // useEffect hook updates paths everytime the location variable changes
    useEffect(() => {
        const pathArray = location.pathname             // store the current path
        .split("/")                                     // split the path into an array
        .filter((part) => part !== "");                 // remove empty spaces

        // Extract the paths
        const currentPath = pathArray[pathArray.length - 1] || null;
        const parentPath = pathArray[pathArray.length - 2] || null;
        const grandParentPath = pathArray[pathArray.length - 3] || null;

        // Update the state
        setPathInfo({ currentPath, parentPath, grandParentPath });
    }, [location]);

    return pathInfo;
};

export default usePathInfo;