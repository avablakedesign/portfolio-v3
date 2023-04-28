import { useEffect, useRef, useState } from "react"
export default (props:any) => {
    const [observed, setObserved] = useState(false);
    const observedRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if (observedRef.current) {
            const Observer = new IntersectionObserver(
                (entries:any, observer:any) => {
                    if (entries[0].isIntersecting) {
                        props.callback(entries, observer);
                        setObserved(true)
                    }
                },
                {
                    threshold:props.observerThreshold
                }
            )
            Observer.observe(observedRef.current)
        }
    },[])
    return (
        <div className={`observer-wrapper ${props.baseClasses} ${observed && props.observedClass}`} ref={observedRef}>
            {props.children}
        </div>
    )
}