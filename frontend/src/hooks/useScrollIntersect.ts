import { useState, useRef, useEffect } from "react";

export default function useScrollIntersect() {

    const [isIntersecting, setIsIntersecting] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isIntersecting) { // only once
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setIsIntersecting(entry.isIntersecting);
                },
                {rootMargin: "-300px"}
            );
            console.log(isIntersecting)
            if (ref.current) {
                observer.observe(ref.current);
            }
            return () => observer.disconnect();
        }

    }, [isIntersecting]) 

    return {isIntersecting, ref}
}

