"use client"
import React from 'react';
import Banner from "@/components/banner"
import './style.css';
import Image from 'next/image'

function IpadPage() {
    return (
        <>
            <Banner />

            {/* Section Ipad-pro */}
            <section className='section section-ipad-pro hero-section'>
                <div className='section-content'>
                    <div className='row'>
                        <div className="text-col column large-3 medium-4 small-12 medium-offset-0 theme-dark">
                            <div className='text-content'>
                                <h2 className='typography-hero-headline'>
                                    iPad Pro
                                </h2>
                                <p className='typography-hero-eyebrow'>
                                    Supercharged by
                                    <span className='visuallyhidden'>M2</span>
                                </p>
                                <figure className='image-pro-chip'></figure>
                                <p></p>
                                <p className='typography-body'>
                                    From $799
                                </p>
                                <a
                                    href="/us/shop/goto/ipad_pro/select"
                                    aria-label="Buy iPad Pro"
                                    className="button"
                                >
                                    Buy
                                </a>
                            </div>
                        </div>
                        <div className='img-col column large-9 medium-8 small-12'>
                            <figure
                                className="image-ipad-pro"
                                aria-label="iPad Pro with white Magic Keyboard and Apple Pencil displaying Stage Manager app sits slightly behind another iPad Pro with black Magic Keyboard showing wallpaper"
                                role="img">
                            </figure>
                        </div>
                    </div>
                </div>
            </section >

            {/* Section ipad-10-9 */}
            <section className='section section-ipad-10-9 hero-section'>
                <div className='section-content'>
                    {/* a href="/ipad-10-9" */}
                    <div className='row'>
                        <div className="img-col column large-6 small-12 large-offset-1 small-offset-0">
                            <figure
                                className="image-ipad-10-9"
                                aria-label="Four iPads in front view overlap to show one of each color: silver, yellow, pink, and blue."
                                role="img" >
                            </figure>
                        </div>
                        <div className='text-col column large-3 medium-4 small-12 flipped'>
                            <div className='text-content'>
                                <h2 className="typography-hero-headline">
                                    iPad
                                </h2>
                                <p className="typography-hero-eyebrow">
                                    Lovable. Drawable. <br />Magical.
                                </p>
                                <p className="typography-body has-dynamic-content">From $449</p>
                                <a
                                    href="/us/shop/goto/buy_ipad/ipad"
                                    aria-label="Buy iPad 10.9-inch"
                                    className="button"
                                >
                                    Buy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Compare */}
            <section className='section section-compare section-content section-content-oversized'>
                <div className='wrapper'>
                    <h2 className="typography-compare-section-headline">Which iPad is right for you?</h2>

                    <div className='compare-grid'>

                        {/* iPad Pro */}
                        <div className='ipad-pro device grid-cell'>
                            <h3 className="typography-compare-device-headline product">
                                iPad&nbsp;Pro
                            </h3>
                            <div className='image-wrap'>
                                <a
                                    href="/ipad-pro/"
                                    aria-label="Learn more about iPad Pro"
                                >
                                    <figure className="image-ipad-pro">
                                    </figure>
                                </a>
                            </div>
                            <figure
                                className="image-ipad-pro-swatches image-swatches"
                                role="img"
                                aria-label="Available in Silver, and Space Gray"
                            >
                            </figure>
                        </div>
                        <div className="ipad-pro tagline grid-cell">
                            <p className="typography-compare-tagline">The ultimate iPad experience with the&nbsp;most advanced technology.</p>
                        </div>
                        <div className='ipad-pro buy grid-cell'>
                            <p className="typography-compare-copy pricing has-dynamic-content">From $799</p>
                            <a
                                href="/us/shop/goto/ipad_pro/select"
                                aria-label="Buy iPad Pro"
                                className="button button-reduced"
                            >
                                Buy
                            </a>
                        </div>
                        <div className="ipad-pro display grid-cell feature-cell">
                            <h4 className="typography-compare-features-headline">12.9″ or 11″</h4>
                        </div>
                        <div className="ipad-pro display-row2 grid-cell feature-cell">
                            <p className="typography-caption">Liquid&nbsp;Retina&nbsp;XDR&nbsp;display or Liquid&nbsp;Retina&nbsp;display</p>
                        </div>
                        <div className="ipad-pro display-row3 grid-cell feature-cell">
                            <p className="typography-caption">ProMotion technology</p>
                        </div>
                        <div className="ipad-pro display-row4 grid-cell feature-cell">
                            <p className="typography-caption">P3 wide color</p>
                        </div>
                        <div className="ipad-pro display-row5 grid-cell feature-cell">
                            <p className="typography-caption">Antireflective coating</p>
                        </div>
                        <div className="ipad-pro chip grid-cell feature-cell">
                            <figure className="image-icon-chip-m2 image-icon"></figure>
                            <p className="typography-caption">M2 chip</p>
                        </div>
                        <div className="ipad-pro front-camera grid-cell feature-cell">
                            <figure className="image-icon-camera-front-portrait image-icon"></figure>
                            <p className="typography-caption">
                                12MP Ultra Wide
                                <br />
                                front camera
                            </p>
                        </div>
                        <div className="ipad-pro front-camera-row2 grid-cell feature-cell">
                            <p className="typography-caption">TrueDepth camera <br />system</p>
                        </div>
                        <div className="ipad-pro wide-camera grid-cell feature-cell">
                            <figure className="image-icon-camera-dual-lens-1 image-icon"></figure>
                            <p className="typography-caption">12MP Wide camera</p>
                        </div>
                        <div className="ipad-pro wide-camera-row2 grid-cell feature-cell">
                            <p className="typography-caption">10MP Ultra Wide camera</p>
                        </div>
                        <div className="ipad-pro wide-camera-row3 grid-cell feature-cell">
                            <p className="typography-caption">4K video, ProRes</p>
                        </div>
                        <div className="ipad-pro authentication grid-cell feature-cell">
                            <figure className="image-icon-authentication-face image-icon"></figure>
                            <p className="typography-caption">Face&nbsp;ID</p>
                        </div>
                        <div className="ipad-pro connector grid-cell feature-cell">
                            <figure className="image-icon-connector-thunderbolt-usb-c image-icon" data-anim-lazy-image=""></figure>
                            <p className="typography-caption">USB‑C connector <br />with support for <br />Thunderbolt / USB 4</p>
                        </div>
                        <div className="ipad-pro cellular grid-cell feature-cell">
                            <figure className="image-icon-cellular-5g image-icon" data-anim-lazy-image=""></figure>
                            <p className="typography-caption">5G cellular</p>
                        </div>
                        <div className="ipad-pro pencil grid-cell feature-cell">
                            <figure className="image-icon-pencil-2ndgen-usbc image-icon"></figure>
                            <p className="typography-caption">Supports Apple&nbsp;Pencil (2nd&nbsp;generation)</p>
                        </div>
                        <div className="ipad-pro pencil-row2 grid-cell feature-cell">
                            <p className="typography-caption">Supports Apple&nbsp;Pencil (USB‑C)</p>
                        </div>
                        <div className="ipad-pro keyboard grid-cell feature-cell">
                            <figure className="image-icon-keyboard-magic image-icon"></figure>
                            <p className="typography-caption">Supports Magic <br />Keyboard</p>
                        </div>

                        {/* iPad Air */}
                        <div className="ipad-air device grid-cell">
                            <h3 className="typography-compare-device-headline product">
                                iPad&nbsp;Air
                            </h3>
                            <div className="image-wrap">
                                <a
                                    href="/ipad-air/"
                                    aria-label="Learn more about iPad Air"
                                >
                                    <figure className="image-ipad-air"></figure>
                                </a>
                            </div>
                            <figure
                                className="image-ipad-air-swatches image-swatches"
                                role="img"
                                aria-label="Available in Starlight, Blue, Pink, Purple, and Space Gray"
                            >
                            </figure>
                        </div>
                        <div className="ipad-air tagline grid-cell">
                            <p className="typography-compare-tagline">Serious performance in a thin and light design.</p>
                        </div>
                        <div className="ipad-air buy grid-cell">
                            <p className="typography-compare-copy pricing has-dynamic-content">From $599</p>
                            <a
                                href="/us/shop/goto/buy_ipad/ipad_air"
                                aria-label="Buy iPad Air"
                                className="button button-reduced"
                            >
                                Buy
                            </a>
                        </div>
                        <div className="ipad-air display grid-cell feature-cell">
                            <h4 className="typography-compare-features-headline">10.9″</h4>
                        </div>
                        <div className="ipad-air display-row2 grid-cell feature-cell">
                            <p className="typography-caption">Liquid&nbsp;Retina&nbsp;display1</p>
                        </div>
                        <div className="ipad-air display-row3 grid-cell feature-cell">
                            <p className="typography-caption" aria-hidden="true">—</p>
                        </div>
                        <div className="ipad-air display-row4 grid-cell feature-cell">
                            <p className="typography-caption">P3 wide color</p>
                        </div>
                        <div className="ipad-air display-row5 grid-cell feature-cell">
                            <p className="typography-caption">Antireflective coating</p>
                        </div>
                        <div className="ipad-air chip grid-cell feature-cell">
                            <figure className="image-icon-chip-m1 image-icon"></figure>
                            <p className="typography-caption">M1 chip</p>
                        </div>
                        <div className="ipad-air front-camera grid-cell feature-cell">
                            <figure className="image-icon-camera-front-portrait image-icon"></figure>
                            <p className="typography-caption">12MP Ultra Wide <br />front camera</p>
                        </div>
                        <div className="ipad-air front-camera-row2 grid-cell feature-cell">
                            <p className="typography-caption" aria-hidden="true">—</p>
                        </div>
                        <div className="ipad-air wide-camera grid-cell feature-cell">
                            <figure className="image-icon-camera-single-lens-6 image-icon"></figure>
                            <p className="typography-caption">12MP Wide camera</p>
                        </div>
                        <div className="ipad-air wide-camera-row2 grid-cell feature-cell">
                            <p className="typography-caption" aria-hidden="true">—</p>
                        </div>
                        <div className="ipad-air wide-camera-row3 grid-cell feature-cell">
                            <p className="typography-caption">4K video</p>
                        </div>
                        <div className="ipad-air authentication grid-cell feature-cell">
                            <figure className="image-icon-authentication-vertical-touch image-icon"></figure>
                            <p className="typography-caption">Touch&nbsp;ID in top button</p>
                        </div>
                        <div className="ipad-air connector grid-cell feature-cell">
                            <figure className="image-icon-connector-usb-c image-icon"></figure>
                            <p className="typography-caption">USB‑C connector</p>
                        </div>
                        <div className="ipad-air cellular grid-cell feature-cell">
                            <figure className="image-icon-cellular-5g image-icon" data-anim-lazy-image=""></figure>
                            <p className="typography-caption">5G cellular<sup className="footnote footnote-number">2</sup></p>
                        </div>
                        <div className="ipad-air pencil grid-cell feature-cell">
                            <figure className="image-icon-pencil-2ndgen-usbc image-icon"></figure>
                            <p className="typography-caption">Supports Apple&nbsp;Pencil (2nd&nbsp;generation)</p>
                        </div>
                        <div className="ipad-air pencil-row2 grid-cell feature-cell">
                            <p className="typography-caption">Supports Apple&nbsp;Pencil (USB‑C)</p>
                        </div>
                        <div className="ipad-air keyboard grid-cell feature-cell">
                            <figure className="image-icon-keyboard-magic image-icon"></figure>
                            <p className="typography-caption">Supports Magic <br />Keyboard</p>
                        </div>

                        {/* iPad 10th Generation */}
                        <div className="ipad-10-9 device grid-cell">
                            <h3 className="typography-compare-device-headline product">
                                iPad
                                <span className="generation typography-compare-generation">10th generation</span>
                            </h3>
                            <div className="image-wrap">
                                <a
                                    href="/ipad-10.9/"
                                    aria-label="Learn more about iPad 10.9-inch"
                                >
                                    <figure className="image-ipad-10-9"></figure>
                                </a>
                            </div>
                            <figure
                                className="image-ipad-10-9-swatches image-swatches"
                                role="img"
                                aria-label="Available in Silver, Blue, Pink, and Yellow"
                            >
                            </figure>
                        </div>
                        <div className="ipad-10-9 tagline grid-cell">
                            <p className="typography-compare-tagline">The colorful, all‑screen iPad for the things you&nbsp;do every&nbsp;day.</p>
                        </div>
                        <div className="ipad-10-9 buy grid-cell">
                            <p className="typography-compare-copy pricing has-dynamic-content">From $449</p>
                            <a
                                href="/us/shop/goto/buy_ipad/ipad"
                                aria-label="Buy iPad 10.9-inch"
                                className="button button-reduced"
                            >
                                Buy
                            </a>
                        </div>
                        <div className="ipad-10-9 display grid-cell feature-cell">
                            <h4 className="typography-compare-features-headline">10.9″</h4>
                        </div>
                        <div className="ipad-10-9 display-row2 grid-cell feature-cell">
                            <p className="typography-caption">Liquid&nbsp;Retina&nbsp;display<sup className="footnote footnote-number">1</sup></p>
                        </div>
                        <div className="ipad-10-9 display-row3 grid-cell feature-cell">
                            <p className="typography-caption" aria-hidden="true">—</p>
                        </div>
                        <div className="ipad-10-9 display-row4 grid-cell feature-cell">
                            <p className="typography-caption">sRGB color</p>
                        </div>
                        <div className="ipad-10-9 display-row5 grid-cell feature-cell">
                            <p className="typography-caption" aria-hidden="true">—</p>
                        </div>
                        <div className="ipad-10-9 chip grid-cell feature-cell">
                            <figure className="image-icon-chip-a14 image-icon"></figure>
                            <p className="typography-caption">A14&nbsp;Bionic chip</p>
                        </div>
                        <div className="ipad-10-9 front-camera grid-cell feature-cell">
                            <figure className="image-icon-camera-front-landscape image-icon"></figure>
                            <p className="typography-caption">Landscape 12MP Ultra Wide front&nbsp;camera</p>
                        </div>
                        <div className="ipad-10-9 front-camera-row2 grid-cell feature-cell">
                            <p className="typography-caption" aria-hidden="true">—</p>
                        </div>
                        <div className="ipad-10-9 wide-camera grid-cell feature-cell">
                            <figure className="image-icon-camera-single-lens-6 image-icon"></figure>
                            <p className="typography-caption">12MP Wide camera</p>
                        </div>
                        <div className="ipad-10-9 wide-camera-row2 grid-cell feature-cell">
                            <p className="typography-caption" aria-hidden="true">—</p>
                        </div>
                        <div className="ipad-10-9 wide-camera-row3 grid-cell feature-cell">
                            <p className="typography-caption">4K video</p>
                        </div>
                        <div className="ipad-10-9 authentication grid-cell feature-cell">
                            <figure className="image-icon-authentication-vertical-touch image-icon"></figure>
                            <p className="typography-caption">Touch&nbsp;ID in top button</p>
                        </div>
                        <div className="ipad-10-9 connector grid-cell feature-cell">
                            <figure className="image-icon-connector-usb-c image-icon"></figure>
                            <p className="typography-caption">USB‑C connector</p>
                        </div>
                        <div className="ipad-10-9 cellular grid-cell feature-cell">
                            <figure className="image-icon-cellular-5g image-icon"></figure>
                            <p className="typography-caption">5G cellular<sup className="footnote footnote-number">2</sup></p>
                        </div>
                        <div className="ipad-10-9 pencil grid-cell feature-cell">
                            <figure className="image-icon-pencil-usbc-1stgen image-icon"></figure>
                            <p className="typography-caption">Supports Apple&nbsp;Pencil (USB‑C)</p>
                        </div>
                        <div className="ipad-10-9 pencil-row2 grid-cell feature-cell">
                            <p className="typography-caption">Supports Apple&nbsp;Pencil (1st&nbsp;generation)<sup className="footnote footnote-number">3</sup></p>
                        </div>
                        <div className="ipad-10-9 keyboard grid-cell feature-cell">
                            <figure className="image-icon-keyboard-magic-folio image-icon"></figure>
                            <p className="typography-caption">Supports Magic <br />Keyboard Folio</p>
                        </div>

                        {/* iPad 9th Generation */}
                        <div className="ipad-10-2 device grid-cell">
                            <h3 className="typography-compare-device-headline product">
                                iPad
                                <span className="generation typography-compare-generation">9th generation</span>
                            </h3>
                            <div className="image-wrap">
                                <a href="/ipad-10.2/" aria-label="Learn more about iPad 10.2-inch">
                                    <figure className="image-ipad-10-2"></figure>
                                </a>
                            </div>
                            <figure
                                className="image-ipad-10-2-swatches image-swatches"
                                role="img"
                                aria-label="Available in Silver, and Space Gray"
                            >
                            </figure>
                        </div>
                        <div className="ipad-10-2 tagline grid-cell">
                            <p className="typography-compare-tagline">All the essentials in the most affordable iPad.</p>
                        </div>
                        <div className="ipad-10-2 buy grid-cell">
                            <p className="typography-compare-copy pricing has-dynamic-content">From $329</p>
                            <a
                                href="/us/shop/goto/buy_ipad/ipad"
                                aria-label="Buy iPad 10.2-inch"
                                className="button button-reduced"
                            >
                                Buy
                            </a>
                        </div>
                        <div className="ipad-10-2 display grid-cell feature-cell">
                            <h4 className="typography-compare-features-headline">10.2″</h4>
                        </div>
                        <div className="ipad-10-2 display-row2 grid-cell feature-cell">
                            <p className="typography-caption">Retina&nbsp;display</p>
                        </div>
                        <div className="ipad-10-2 display-row3 grid-cell feature-cell">
                            <p className="typography-caption" aria-hidden="true">—</p>
                        </div>
                        <div className="ipad-10-2 display-row4 grid-cell feature-cell">
                            <p className="typography-caption">sRGB color</p>
                        </div>
                        <div className="ipad-10-2 display-row5 grid-cell feature-cell">
                            <p className="typography-caption" aria-hidden="true">—</p>
                        </div>
                        <div className="ipad-10-2 chip grid-cell feature-cell">
                            <figure className="image-icon-chip-a13 image-icon"></figure>
                            <p className="typography-caption">A13&nbsp;Bionic chip</p>
                        </div>
                        <div className="ipad-10-2 front-camera grid-cell feature-cell">
                            <figure className="image-icon-camera-front-portrait image-icon"></figure>
                            <p className="typography-caption">12MP Ultra Wide <br />front camera</p>
                        </div>
                        <div className="ipad-10-2 front-camera-row2 grid-cell feature-cell">
                            <p className="typography-caption" aria-hidden="true">—</p>
                        </div>
                        <div className="ipad-10-2 wide-camera grid-cell feature-cell">
                            <figure className="image-icon-camera-single-lens-3 image-icon"></figure>
                            <p className="typography-caption">8MP Wide camera</p>
                        </div>
                        <div className="ipad-10-2 wide-camera-row2 grid-cell feature-cell">
                            <p className="typography-caption" aria-hidden="true">—</p>
                        </div>
                        <div className="ipad-10-2 wide-camera-row3 grid-cell feature-cell">
                            <p className="typography-caption">1080p HD video</p>
                        </div>
                        <div className="ipad-10-2 authentication grid-cell feature-cell">
                            <figure className="image-icon-authentication-touch image-icon"></figure>
                            <p className="typography-caption">Touch&nbsp;ID in Home button</p>
                        </div>
                        <div className="ipad-10-2 connector grid-cell feature-cell">
                            <figure className="image-icon-connector-lightning image-icon" data-anim-lazy-image=""></figure>
                            <p className="typography-caption">Lightning connector</p>
                        </div>
                        <div className="ipad-10-2 cellular grid-cell feature-cell">
                            <figure className="image-icon-cellular-4g image-icon"></figure>
                            <p className="typography-caption">4G LTE cellular<sup className="footnote footnote-number">2</sup></p>
                        </div>
                        <div className="ipad-10-2 pencil grid-cell feature-cell">
                            <figure className="image-icon-pencil-1stgen image-icon"></figure>
                            <p className="typography-caption">Supports Apple&nbsp;Pencil (1st&nbsp;generation)</p>
                        </div>
                        <div className="ipad-10-2 pencil-row2 grid-cell feature-cell">
                            <p className="typography-caption" aria-hidden="true"></p>
                        </div>
                        <div className="ipad-10-2 keyboard grid-cell feature-cell">
                            <figure className="image-icon-keyboard-smart image-icon"></figure>
                            <p className="typography-caption">Supports <br />Smart Keyboard</p>
                        </div>

                        {/* iPad mini */}
                        <div className="ipad-mini device grid-cell">
                            <h3 className="typography-compare-device-headline product">
                                iPad&nbsp;mini
                            </h3>
                            <div className="image-wrap">
                                <a href="/ipad-mini/" aria-label="Learn more about iPad mini">
                                    <figure className="image-ipad-mini"></figure>
                                </a>
                            </div>
                            <figure
                                className="image-ipad-mini-swatches image-swatches"
                                role="img"
                                aria-label="Available in Starlight, Pink, Purple, and Space Gray"
                            >
                            </figure>
                        </div>
                        <div className="ipad-mini tagline grid-cell">
                            <p className="typography-compare-tagline">The full iPad experience designed to&nbsp;fit in one&nbsp;hand.</p>
                        </div>
                        <div className="ipad-mini buy grid-cell">
                            <p className="typography-compare-copy pricing has-dynamic-content">From $499</p>
                            <a
                                href="/us/shop/goto/buy_ipad/ipad"
                                aria-label="Buy iPad mini"
                                className="button button-reduced"
                            >
                                Buy
                            </a>
                        </div>
                        <div className="ipad-mini display grid-cell feature-cell">
                            <h4 className="typography-compare-features-headline">8.3″</h4>
                        </div>
                        <div className="ipad-mini display-row2 grid-cell feature-cell">
                            <p className="typography-caption">Liquid&nbsp;Retina&nbsp;display</p>
                        </div>
                        <div className="ipad-mini display-row3 grid-cell feature-cell">
                            <p className="typography-caption" aria-hidden="true">—</p>
                        </div>
                        <div className="ipad-mini display-row4 grid-cell feature-cell">
                            <p className="typography-caption">P3 wide color</p>
                        </div>
                        <div className="ipad-mini display-row5 grid-cell feature-cell">
                            <p className="typography-caption">Antireflective coating</p>
                        </div>
                        <div className="ipad-mini chip grid-cell feature-cell">
                            <figure className="image-icon-chip-a15 image-icon"></figure>
                            <p className="typography-caption">A15&nbsp;Bionic chip</p>
                        </div>
                        <div className="ipad-mini front-camera grid-cell feature-cell">
                            <figure className="image-icon-camera-front-portrait image-icon"></figure>
                            <p className="typography-caption">12MP Ultra Wide <br />front camera</p>
                        </div>
                        <div className="ipad-mini front-camera-row2 grid-cell feature-cell">
                            <p className="typography-caption" aria-hidden="true">—</p>
                        </div>
                        <div className="ipad-mini wide-camera grid-cell feature-cell">
                            <figure className="image-icon-camera-single-lens-7 image-icon"></figure>
                            <p className="typography-caption">12MP Wide camera</p>
                        </div>
                        <div className="ipad-mini wide-camera-row2 grid-cell feature-cell">
                            <p className="typography-caption" aria-hidden="true">—</p>
                        </div>
                        <div className="ipad-mini wide-camera-row3 grid-cell feature-cell">
                            <p className="typography-caption">4K video</p>
                        </div>
                        <div className="ipad-mini authentication grid-cell feature-cell">
                            <figure className="image-icon-authentication-vertical-touch image-icon"></figure>
                            <p className="typography-caption">Touch&nbsp;ID in top button</p>
                        </div>
                        <div className="ipad-mini connector grid-cell feature-cell">
                            <figure className="image-icon-connector-usb-c image-icon"></figure>
                            <p className="typography-caption">USB‑C connector</p>
                        </div>
                        <div className="ipad-mini cellular grid-cell feature-cell">
                            <figure className="image-icon-cellular-5g image-icon"></figure>
                            <p className="typography-caption">5G cellular<sup className="footnote footnote-number">2</sup></p>
                        </div>
                        <div className="ipad-mini pencil grid-cell feature-cell">
                            <figure className="image-icon-pencil-2ndgen-usbc image-icon"></figure>
                            <p className="typography-caption">Supports Apple&nbsp;Pencil (2nd&nbsp;generation)</p>
                        </div>
                        <div className="ipad-mini pencil-row2 grid-cell feature-cell">
                            <p className="typography-caption">Supports Apple&nbsp;Pencil (USB‑C)</p>
                        </div>
                        <div className="ipad-mini keyboard grid-cell feature-cell">
                            <figure className="image-icon-keyboard-bluetooth image-icon"></figure>
                            <p className="typography-caption">Supports <br />Bluetooth keyboards</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IpadPage;