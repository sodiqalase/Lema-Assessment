import clsx from "clsx";
import Loader from "./Loader";

export const Fallback = ({ screen = false }: { screen?: boolean }) => {
    return (
        <div className={clsx(screen ? "h-screen w-screen" : "h-[40vh] w-full")}>
            <div className="flex h-full justify-center items-center w-full">
                <Loader />
            </div>
        </div>
    );
};

export default Fallback;
