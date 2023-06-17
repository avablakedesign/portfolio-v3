import { AnimatedGIF } from '@pixi/gif';
import * as PIXI from 'pixi.js'
import { useEffect, useRef, Fragment } from 'react';
import { AsciiFilter } from '@pixi/filter-ascii';
import ObserverWrapper from './ObserverWrapper';

export default () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if (canvasRef.current) {
            const app: any = new PIXI.Application({
                antialias: true,
                view: canvasRef.current,
                // resizeTo: canvasRef.current,
                // backgroundColor: 0xF00000,
                autoDensity: false,
                resolution: 1
            });
            window.onresize = (event: any) => {
                app.view.width = canvasRef.current?.width
                app.view.height = canvasRef.current?.height
            }
            const asciified = (app: any, filter: any) => {
                let count = 0;
                app.ticker.add(() => {
                    count += 1
                    if (count < 250) {
                        app.stage.filters = [];
                    }
                    else if (count >= 250 && count < 500) {
                        app.stage.filters = [filter];
                        filter.size += 0.25
                        // filter.size = ((20)/(1+(Math.E ** (-1 * ((0.031 * count)-5)))))
                    }
                    else if (count >= 500 && count < 750) {
                        filter.size -= 0.25
                        // filter.size = ((20)/(1+(Math.E ** (1 * ((0.031 * count)-5)))))
                    }
                    else {
                        count = 0
                    }
                    // console.log(count);
                    // filter.size = Math.floor(Math.sin(count)*20);
                });
            };
            const draw = async () => {
                const koiTexture = PIXI.Texture.from('../koifish.mp4');
                const koiSprite = new PIXI.Sprite(koiTexture);
                // @ts-ignore
                koiTexture.baseTexture.resource.autoPlay = true;
                // @ts-ignore
                koiTexture.baseTexture.resource.source.loop = true;
                // @ts-ignore
                koiTexture.baseTexture.resource.source.muted = true;
                koiSprite.width = app.view.width;
                koiSprite.height = app.view.height;
                // koiSprite.x = (app.view.width * .5) - (koiSprite.width *.5);
                // koiSprite.y = app.view.height * .33 ;

                app.stage.addChild(koiSprite);
                const asciiFilter = new AsciiFilter(0)
                app.stage.filters = [asciiFilter];
                asciified(app, asciiFilter);
            }
            draw();
        }
    }, [])
    const renderLainDesigns = () => {
        const designsArray = new Array(12).fill(1);
        return designsArray.map((design, index) => {
            return (
                <ObserverWrapper
                    key={index}
                    baseClasses={`designs-app-screen designs-app-screen-lain designs-app-screen-lain-${index}`}
                    observedClass={"lain-enter"}
                    observerThreshold={0.2}
                    callback={
                        () => {
                            console.log("lain entered")
                        }
                    }
                >
                        <img src={`designs/Lain/screen-${index}.png`} />
                </ObserverWrapper> 
            )
        });
    };
    const renderBohemianFireDesigns = () => {
        const designsArray = new Array(2).fill(1);
        return designsArray.map((design, index) => {
            return (
                <div className={`designs-app-screen designs-app-screen-bohemianFire designs-app-screen-bohemianFire-${index}`} key={index}>
                    <img src={`designs/BohemianFire/screen-${index}.png`} />
                </div>
            )
        });
    };
    return (
        <div className="appwrapper">
            <div className="designs">
                <div className="canvasContainer koiFish">
                    <canvas ref={canvasRef} />
                </div>
                <div className="designs-app">
                    <div className="designs-app-window designs-app-window-1">
                        {renderLainDesigns()}
                        <ObserverWrapper
                            baseClasses={"section section-one"}
                            observedClass={"section-one-entered"}
                            observerThreshold={0.2}
                            callback={
                                () => {
                                    console.log("intersecting")
                                }
                            }
                        >
                            <div className="lainwrapper">
                                <h3>
                                    Lain | Encrypted Social Media
                                </h3>
                                <h4 className="lainwrapper-quote">
                                    <div>
                                    "The simulacrum is never what hides the truth-- it is truth that hides the fact that there is none. The simulacrum is true."
                                    </div>
                                    <div>
                                    「シミュラクラムは決して真実を隠すものではありません-何もないという事実を隠すのは真実です。シミュラクラムは真実です。」
                                    </div>
                                </h4>
                            </div>
                        </ObserverWrapper>
                    </div>
                    <div className="designs-app-window designs-app-window-2">
                        <ObserverWrapper
                            baseClasses={"section section-two"}
                            observedClass={"section-two-entered"}
                            observerThreshold={0.2}
                            callback={
                                () => {
                                    console.log("intersecting")
                                }
                            }
                        >
                            {renderBohemianFireDesigns()}
                            <div className="bohemianFirewrapper">
                                <h3>
                                    Bohemian Fire | The Next Revolution in Film.
                                </h3>
                                <h4 className="designs-quote">
                                    <div>
                                    "The greatest art is to set a fire in the minds of men, and to inflame their hearts."
                                    </div>
                                    <div>
                                    「最大の芸術は、男性の心に火をつけ、彼らの心を燃やすことです。」
                                    </div>
                                </h4> 
                            </div>
                        </ObserverWrapper>
                    </div>
                </div>
            </div>
        </div>
    )
}