import localFontOne from 'next/font/local'
import React, { useState, useEffect, useRef } from 'react'
import * as PIXI from 'pixi.js'
const fontMain = localFontOne({
    src: "../public/Kinetic-Outlined.otf"
})

export default () => {
    const pixiCanvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if(pixiCanvasRef.current){

        const app = new PIXI.Application({
            antialias: true,
            resizeTo: pixiCanvasRef.current,
            autoDensity: false,
            view: pixiCanvasRef.current,
            backgroundColor: 0x000000,
            resolution: 1,
        });
        
        // document.body.appendChild(app.view);
        
        // create a new Sprite from an image path
        const bunny = PIXI.Sprite.from('./slimegirl.png');
        
        // center the sprite's anchor point
        bunny.anchor.set(0.5);
        
        // move the sprite to the center of the screen
        bunny.x = app.screen.width / 2;
        bunny.y = app.screen.height / 2;
        
        app.stage.addChild(bunny);          
        }
    },[]);
    return (
        <section className={`${fontMain.className} section`}>
            <div>
                <canvas ref={pixiCanvasRef} />
            </div>
            <h1>
                <span>About</span>
            </h1>
            <div className="content">
                
                <p>
                    This is my design portfolio. I have various projects from my career as a Product Designer.
                </p>
            </div>
        </section>
    )
}