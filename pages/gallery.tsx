import Head from "next/head"
import { useEffect, useRef, useState } from "react"
import Footer from "@/components/Footer"
import GlitchButton from "@/components/GlitchButton"
import Link from "next/link"
import ObserverWrapper from '@/components/ObserverWrapper';

const galleryArray = [
    {
        img: "Candy/gummycats.jpg",
        header: "Mad Science Candy",
        description: ["A Mad Scientist needs a favorite pet and so they were made Gummy in a Lab!", "Gummy Cats!"],
        link: "#"
    },    
    {
        img: "Candy/candy1.jpg",
        header: "Mad Science Candy",
        description: ["A Mad Scientist created these, soon the world will become candy!", "Fizzy Electric Pops! A kaleidoscope of sour and sweet science — chewy, gooey goodness."],
        link: "#"
    },
    {
        img: "Candy/candyparty.jpg",
        header: "Mad Science Candy",
        description: ["Candy Party!", "The world has become candified! Let's all love candy!", "Choose from a range of flavors, bluerazzleberry, jellybean dream, orange creamsicle, and much much MORE!"],
        link: "#"
    },
    {
        img: "Candy/RainbowMountainSherbetTwist.jpg",
        header: "Mad Science Candy",
        description: ["A mountain can't be made of sherbet they said! Hahahaha!", "Rainbow Mountain Sherbet Twist - all the flavors extracted from a Double Rainbow."],
        link: "#"
    }
]
export default function Page() {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {

    }, [])
    const renderDescriptions = (descriptions:string[]) => {
        return descriptions.map((d,i)=>{
            return (
                <p key={d}>
                    {d}
                </p>
            )
        })
    }
    const renderImages = (images:string[]) => {
        return images.map((img,i)=>{
            return (
                <ObserverWrapper
                key={img}
                baseClasses={``}
                observedClass={""}
                observerThreshold={0.2}
                callback={
                    () => {
                        console.log("candyfied!")
                        setCurrentIndex(i);
                    }
                }
            >
                    <img src={`/designs/${img}`}/>
                </ObserverWrapper> 
            )
        })
    }
    const renderGalleryText = () => {
        const currentGalleryItem = galleryArray[currentIndex];
        return (
            <div className={`project-description`} key={currentGalleryItem.header}>
                <div className="project-description-header">
                    <h2>
                        {currentGalleryItem.header}
                    </h2>
                </div>
                <div>
                    {renderDescriptions(currentGalleryItem.description)}
                </div>
                <div className="project-description-links">
                    <div>
                        <Link href={`${currentGalleryItem.link}`}>
                            <GlitchButton text="View" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <Head>
                <title>Gallery | Eva K Design</title>
                {/*Change the content of the site so that it is detailed.*/}
                <meta name="description" content="Eva K Designs Gallery" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/slimegirl2.png" />
            </Head>
            <main className="about">
                <div>
                    <div className="aboutHeader">
                        <h1>Gallery</h1>
                    </div>
                </div>
                <section className="gallery">
                    <div className="gallery-desc">
                        <div>
                            <div className={`smiley`}></div>
                            {renderGalleryText()}
                        </div>
                    </div>

                    <div className="gallery-pictures">
                            {renderImages(galleryArray.map((item)=>item.img))}
                    </div>
                </section>
                <div className="no-slime">
                    <Footer page="/" pageName="Home" />
                </div>
            </main>
            {/* <div className="about-glitch-button">
                        <GlitchButton text="Homepage" color="turquoise" />
                    </div> */}
        </>
    )
}
