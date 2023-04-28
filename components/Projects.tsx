import ObserverWrapper from "./ObserverWrapper"
import localFontOne from 'next/font/local'
import Glitch from "./Glitch"
import * as PIXI from 'pixi.js'
import { useEffect, useState, useRef } from "react"
import ProjectOne from "./ProjectOne"
import ProjectTwo from "./ProjectTwo"
import ProjectThree from "./ProjectThree"

const fontMain = localFontOne({
    src: "../public/coolvetica rg.otf"
})
const projects = [
    {
        id: 0,
        baseClasses: "section section-one",
        observedClass: "section-one-entered",
        observerThreshold: 0.1,
        callback: (entries: any, observer: any) => {
            console.log("intersecting", entries[0])

        },
        Component: () => <ProjectOne />
    },
    {
        id: 1,
        baseClasses: "section section-one",
        observedClass: "section-one-entered",
        observerThreshold: 0.1,
        callback: () => {
            console.log("intersecting")
        },
        Component: () => <ProjectTwo />
    },
    {
        id: 2,
        baseClasses: "section section-one",
        observedClass: "section-one-entered",
        observerThreshold: 0.1,
        callback: () => {
            console.log("intersecting")
        },
        Component: () => <ProjectThree />
    },
    // {
    //     id:3,
    //     baseClasses:"section section-one",
    //     observedClass:"section-one-entered",
    //     observerThreshold:0.1,
    //     callback:() => {
    //         console.log("intersecting")
    //     },
    //     Component: () => <ProjectFour/>
    // }
];
export default () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [projectSelectedIndex, setProjectSelectedIndex] = useState(0);
    
    useEffect(() => {
        if (scrollRef.current) {
            console.log(scrollRef);
            let scrollTracker = 0;
            const createScrollTimer = () => setTimeout(() => scrollTracker = 0, 500);
            scrollRef.current.onwheel = (event: any) => {
                event.preventDefault();
                console.log(projectSelectedIndex, "project number");
                // if (scrollTracker === 0) {
                //     createScrollTimer()
                // }
                scrollTracker += Math.sign(event.deltaY);
                console.log(scrollTracker);
                if (scrollTracker > 4) {
                    if (projects[projectSelectedIndex + 1]) {
                        setProjectSelectedIndex(projectSelectedIndex + 1);
                    }
                }
                if (scrollTracker < -1) {
                    if (projects[projectSelectedIndex - 1]) {
                        setProjectSelectedIndex(projectSelectedIndex - 1);
                    }
                }
            }
        }
    }, [])
    const renderScrolledProject = () => {
        const projectSelected = projects[projectSelectedIndex]
        return (
            <div key={projectSelected.id}>
                {/* <ObserverWrapper
                    baseClasses={projectSelected.baseClasses}
                    observedClass={projectSelected.observedClass}
                    observerThreshold={projectSelected.observerThreshold}
                    callback={projectSelected.callback}
                >
                    <projectSelected.Component />
                </ObserverWrapper> */}
                <projectSelected.Component />
            </div>
        )
    }
    return (
        <div ref={scrollRef}>
            {renderScrolledProject()}
        </div>
    )
}