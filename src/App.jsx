import React, { useState, useEffect } from 'react';
import LogoLoader from './LogoLoader';
import ThreeScene from './ThreeScene';
import './App.css';
import MemoryCarousel from './MemoryCarousel';
import Card from './Card';
import GlassCursor from './GlassCursor';
import { VideoText } from './VideoText';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import SplitText from "./SplitText";
export default function App() {
  const [loading, setLoading] = useState(true);
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const { scrollY } = useScroll();

  // Map the scroll position (0px to 500px) to the water's vertical position.
  // It starts with just the 60px wave visible and rises to fill 100% of the screen.
  const waterY = useTransform(scrollY, [0, 500], ["calc(100% - 60px)", "0%"]);

  if (loading) return <LogoLoader />;

  return (
    <div className="App">
      <GlassCursor />
      
      <div className="pin-container">
        {/* 🔷 Top Spline Section */}
        <div className="spline-container">
          <Spline scene="https://prod.spline.design/x8pviGljQ1dRsMWf/scene.splinecode" />
          <div className="wave-fill">
            <motion.div className="water" style={{ y: waterY }}>
              <span className="wave"></span>
              <span className="deep-water">
                <style>
                  {`
                    @keyframes spin-around {
                      from {
                        transform: rotate(0deg);
                      }
                      to {
                        transform: rotate(360deg);
                      }
                    }
                    .hackathon-title {
                      --font-selector: RlI7SW50ZXJEaXNwbGF5LUJsYWNr;
                      --framer-font-family: "Inter Display", sans-serif;
                      font-family: var(--framer-font-family);
                      font-size: calc(var(--framer-root-font-size, 1rem) * 2.4);
                      font-weight: 900;
                      line-height: 0.9em;
                      color: rgba(254, 253, 224, 0.6);
                      text-transform: uppercase;
                      text-shadow: 0 2px 20px rgba(254, 253, 224, 0.5);
                    }
                    .final-awards-text {
                      text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
                    }
                    .show-text {
                      text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 227, 167, 0.5), 0 0 30px rgba(255, 227, 167, 0.5);
                    }
                    .text-glow {
                      text-shadow: 0 0 8px rgba(254, 253, 224, 0.5);
                    }
                  `}
                </style>
                <div
                  className="framer-m6y2cn"
                  data-framer-name="Left content"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "1rem",
                    padding: "2rem",
                    textAlign: "left",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                      WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      gap: '2rem'
                    }}
                  >
                    <div
                      className="framer-x4jot6"
                      data-framer-name="World's Largest Hackathon"
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <div className="ssr-variant hidden-ld6hgi hidden-zs0ihs">
                          <div
                            className="framer-rhy99g"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              outline: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              flexShrink: 0,
                              transform: "none",
                            }}
                          >
                            <SplitText
                              text="World's Largest UI/UX Hackathon"
                              tag="h1"
                              className="hackathon-title"
                              onLetterAnimationComplete={handleAnimationComplete}
                            />
                          </div>
                        </div>
                        <div className="framer-19r107h-container" style={{width: '120px', height: '120px'}}>
                        <div
                          className="framer-zyQBs framer-1njatxn framer-v-1njatxn"
                          data-framer-name="Variant 1"
                          style={{
                            backdropFilter: "blur(100px)",
                            background:
                              "linear-gradient(222deg, rgba(64, 56, 47, 0.77) 19%, rgba(7, 7, 13, 0.76) 87%)",
                            opacity: 1,
                            borderRadius: "100%",
                            boxShadow: "rgba(0, 0, 0, 0.73) -9px 5px 40px 0px",
                          }}
                        >
                          <div
                            className="framer-13eaxbw-container"
                            style={{
                              willChange: "transform",
                              opacity: 1,
                              animation: "spin-around 10s linear infinite",
                            }}
                          >
                            {/*$--*/}
                            <svg
                              className="transform-origin-center-center"
                              style={{
                                width: "100%",
                                height: "100%",
                                transformOrigin: "center",
                              }}
                              viewBox="0 0 100 100"
                              overflow="visible"
                            >
                              <path
                                id="curve-wnxkz4"
                                d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50"
                                strokeWidth="none"
                                fill="transparent"
                              />
                              <text>
                                <textPath
                                  href="#curve-wnxkz4"
                                  startOffset={0}
                                  dominantBaseline="Hanging"
                                  style={{
                                    letterSpacing: "0.6px",
                                    fontFamily:
                                      '"Inter Display", "Inter Display Placeholder", sans-serif',
                                    fontSize: "9.4px",
                                    fontStyle: "normal",
                                    fontWeight: 800,
                                    lineHeight: "1em",
                                    fill: "var(--token-cdf9483a-a826-4f60-bfff-9d5ba9eefe40, rgb(254, 253, 224))",
                                  }}
                                >
                                  TOTAL PRIZE POOL • TOTAL PRIZE POOL • TOTAL
                                  PRIZE POOL •
                                </textPath>
                              </text>
                            </svg>
                            {/*/$--*/}
                          </div>
                          <div
                            className="framer-1603ywk"
                            style={{
                              outline: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              flexShrink: 0,
                              "--extracted-r6o4lv":
                                "var(--token-cdf9483a-a826-4f60-bfff-9d5ba9eefe40, rgb(254, 253, 224))",
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                              transform: "rotate(8deg)",
                              opacity: 1,
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                              <SplitText
                                text="$1M+"
                                tag="p"
                                className="framer-text text-glow"
                                style={{
                                  "--font-selector": "RlI7SW50ZXJEaXNwbGF5LUJsYWNr",
                                  "--framer-font-family":
                                    '"Inter Display", sans-serif',
                                  "--framer-font-size":
                                    "calc(var(--framer-root-font-size, 1rem) * 1.73)",
                                  "--framer-font-weight": 900,
                                  "--framer-letter-spacing": "0.91px",
                                  "--framer-line-height": "0.9em",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-cdf9483a-a826-4f60-bfff-9d5ba9eefe40, rgb(254, 253, 224)))",
                                }}
                                onLetterAnimationComplete={handleAnimationComplete}
                              />
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div
                      className="framer-bkxhw5"
                      data-framer-name="Final Awards Show"
                    >
                      <div className="ssr-variant hidden-ld6hgi hidden-zs0ihs">
                        <div
                          className="framer-7la0gx"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            outline: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            flexShrink: 0,
                            transform: "none",
                          }}
                        >
                            <SplitText
                              text="Final Awards"
                              tag="p"
                              className="framer-text final-awards-text"
                              style={{
                                "--font-selector": "RlI7SW50ZXJEaXNwbGF5LUJsYWNr",
                                "--framer-font-family":
                                  '"Inter Display", sans-serif',
                                "--framer-font-size":
                                  "calc(var(--framer-root-font-size, 1rem) * 3)",
                                "--framer-font-weight": 900,
                                "--framer-line-height": "0.9em",
                                "--framer-text-transform": "uppercase",
                                backgroundImage:
                                  "linear-gradient(90deg, rgb(254, 253, 224) -4%, rgb(255, 227, 167) 100%)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent",
                              }}
                              onLetterAnimationComplete={handleAnimationComplete}
                            />
                        </div>
                      </div>
                      <div className="framer-yin914">
                        <div className="ssr-variant hidden-ld6hgi hidden-zs0ihs">
                          <div
                            className="framer-pbtrsq"
                            data-framer-component-type="RichTextContainer"
                            style={{
                              outline: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              flexShrink: 0,
                              transform: "none",
                            }}
                          >
                              <SplitText
                                text="Show"
                                tag="p"
                                className="framer-text show-text"
                                style={{
                                  "--font-selector": "RlI7SW50ZXJEaXNwbGF5LUJsYWNr",
                                  "--framer-font-family":
                                    '"Inter Display", sans-serif',
                                  "--framer-font-size":
                                    "calc(var(--framer-root-font-size, 1rem) * 3)",
                                  "--framer-font-weight": 900,
                                  "--framer-line-height": "0.9em",
                                  "--framer-text-color": "rgb(254, 253, 224)",
                                  "--framer-text-transform": "uppercase",
                                }}
                                onLetterAnimationComplete={handleAnimationComplete}
                              />
                          </div>
                        </div>
                        <div className="framer-x9wa85">
                          <div
                            className="framer-idcy8f"
                            style={{
                              outline: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              flexShrink: 0,
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                              <SplitText
                                text="JULY 26, 2025"
                                tag="p"
                                className="framer-text text-glow"
                                style={{
                                  "--font-selector":
                                    "RlI7SW50ZXJEaXNwbGF5LU1lZGl1bQ==",
                                  "--framer-font-family":
                                    '"Inter Display", "Inter Display Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-font-weight": 500,
                                  "--framer-letter-spacing": "0.5px",
                                  "--framer-line-height": "0.9em",
                                  "--framer-text-color":
                                    "var(--token-cdf9483a-a826-4f60-bfff-9d5ba9eefe40, rgb(254, 253, 224))",
                                }}
                                onLetterAnimationComplete={handleAnimationComplete}
                              />
                          </div>
                          <div
                            className="framer-1qw1x0q"
                            style={{
                              outline: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              flexShrink: 0,
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                              <SplitText
                                text="10 AM PT / 1 PM ET (17:00 UTC)"
                                tag="p"
                                className="framer-text text-glow"
                                style={{
                                  "--font-selector":
                                    "RlI7SW50ZXJEaXNwbGF5LU1lZGl1bQ==",
                                  "--framer-font-family":
                                    '"Inter Display", "Inter Display Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-font-weight": 500,
                                  "--framer-letter-spacing": "0.5px",
                                  "--framer-line-height": "0.9em",
                                  "--framer-text-color":
                                    "var(--token-cdf9483a-a826-4f60-bfff-9d5ba9eefe40, rgb(254, 253, 224))",
                                }}
                                onLetterAnimationComplete={handleAnimationComplete}
                              />
                          </div>
                          <div
                            data-framer-component-type="SVG"
                            data-framer-name="Top left"
                            style={{
                              imageRendering: "pixelated",
                              flexShrink: 0,
                              backgroundSize: "100% 100%",
                              backgroundImage:
                                "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 9.45 9.45\" overflow=\"visible\"><path d=\"M 1.05 1.05 L 1.05 0 L 0 0 L 0 1.05 Z M 1.05 1.05 L 1.05 2.1 L 9.45 2.1 L 9.45 0 L 1.05 0 Z M 1.05 9.45 L 2.1 9.45 L 2.1 1.05 L 0 1.05 L 0 9.45 Z\" fill=\"rgb(254,253,224)\"></path></svg>')",
                            }}
                            className="framer-11q46t0"
                            aria-hidden="true"
                          />
                          <div className="ssr-variant hidden-ld6hgi hidden-zs0ihs">
                            <div
                              data-framer-component-type="SVG"
                              data-framer-name="Top right"
                              className="framer-12wket0"
                              aria-hidden="true"
                              style={{
                                imageRendering: "pixelated",
                                flexShrink: 0,
                                backgroundSize: "100% 100%",
                                backgroundImage:
                                  "url(\"data:image/svg+xml,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" viewBox=\\\"0 0 10 10\\\" overflow=\\\"visible\\\"><path d=\\\"M 8.4 1.05 L 8.4 0 L 9.45 0 L 9.45 1.05 Z M 8.4 1.05 L 8.4 2.1 L 0 2.1 L 0 0 L 8.4 0 Z M 8.4 9.45 L 7.35 9.45 L 7.35 1.05 L 9.45 1.05 L 9.45 9.45 Z\\\" fill=\\\"rgb(254,253,224)\\\"></path></svg>\")",
                              }}
                            />
                          </div>
                          <div
                            data-framer-component-type="SVG"
                            data-framer-name="Bottom left"
                            style={{
                              imageRendering: "pixelated",
                              flexShrink: 0,
                              backgroundSize: "100% 100%",
                              backgroundImage:
                                "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 9.45 9.45\" overflow=\"visible\"><path d=\"M 1.05 8.4 L 1.05 9.45 L 0 9.45 L 0 8.4 Z M 1.05 8.4 L 1.05 7.35 L 9.45 7.35 L 9.45 9.45 L 1.05 9.45 Z M 1.05 0 L 2.1 0 L 2.1 8.4 L 0 8.4 L 0 0 Z\" fill=\"rgb(254,253,224)\"></path></svg>')",
                            }}
                            className="framer-ye063f"
                            aria-hidden="true"
                          />
                          <div className="ssr-variant hidden-ld6hgi hidden-zs0ihs">
                            <div
                              data-framer-component-type="SVG"
                              data-framer-name="Bottom right"
                              className="framer-vt1wh4"
                              aria-hidden="true"
                              style={{
                                imageRendering: "pixelated",
                                flexShrink: 0,
                                backgroundSize: "100% 100%",
                                backgroundImage:
                                  "url(\"data:image/svg+xml,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" viewBox=\\\"0 0 10 10\\\" overflow=\\\"visible\\\"><path d=\\\"M 8.4 8.4 L 8.4 9.45 L 9.45 9.45 L 9.45 8.4 Z M 8.4 8.4 L 8.4 7.35 L 0 7.35 L 0 9.45 L 8.4 9.45 Z M 8.4 0 L 7.35 0 L 7.35 8.4 L 9.45 8.4 L 9.45 0 Z\\\" fill=\\\"rgb(254,253,224)\\\"></path></svg>\")",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div><div
                    className="ssr-variant hidden-ld6hgi hidden-zs0ihs"
                    style={{ marginTop: "2rem" }}
                  >
                    <div
                      className="framer-vubgzb"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        outline: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        flexShrink: 0,
                        transform: "none",
                      }}
                    >
                        <SplitText
                          text="Who will be the winners of the $1M+ prize pool?"
                          tag="p"
                          className="framer-text text-glow"
                          style={{
                            "--font-selector":
                              "RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk",
                            "--framer-font-family":
                              '"Inter Display", "Inter Display Placeholder", sans-serif',
                            "--framer-font-size":
                              "calc(var(--framer-root-font-size, 1rem) * 1)",
                            "--framer-font-weight": 600,
                            "--framer-text-color": "rgb(254, 253, 224)",
                          }}
                          onLetterAnimationComplete={handleAnimationComplete}
                        />
                        <SplitText
                          text="Tune in live."
                          tag="p"
                          className="framer-text text-glow"
                          style={{
                            "--font-selector":
                              "RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk",
                            "--framer-font-family":
                              '"Inter Display", "Inter Display Placeholder", sans-serif',
                            "--framer-font-size":
                              "calc(var(--framer-root-font-size, 1rem) * 1)",
                            "--framer-font-weight": 600,
                            "--framer-text-color": "rgb(254, 253, 224)",
                          }}
                          onLetterAnimationComplete={handleAnimationComplete}
                        />
                    </div>
                  </div>
                  <div
                    className="framer-1iszw9v"
                    data-framer-name="Buttons"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "1rem",
                      marginTop: "1rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <div className="framer-6wwmar-container">
                      {/*$--*/}
                      <a
                        className="framer-j5U74 framer-1qakzfu framer-v-1eg7tlw framer-19r67fy"
                        data-border="true"
                        data-framer-name="Large variant 2"
                        style={{
                          "--border-bottom-width": "2px",
                          "--border-color":
                            "var(--token-cdf9483a-a826-4f60-bfff-9d5ba9eefe40, rgb(254, 253, 224))",
                          "--border-left-width": "2px",
                          "--border-right-width": "2px",
                          "--border-style": "solid",
                          "--border-top-width": "2px",
                          backgroundColor:
                            "var(--token-cdf9483a-a826-4f60-bfff-9d5ba9eefe40, rgb(254, 253, 224))",
                          borderRadius: "30px",
                          opacity: 1,
                        }}
                        href="https://app.getriver.io/beta/events/worlds-largest-hackathon-award-ceremony-cxnk"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div
                          className="framer-19klhnk"
                          style={{
                            outline: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            flexShrink: 0,
                            "--extracted-r6o4lv":
                              "var(--token-2b6fad43-75a1-464a-bb3f-6e593177abb0, rgb(0, 0, 0))",
                            transform: "none",
                            opacity: 1,
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            style={{
                              "--font-selector":
                                "RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk",
                              "--framer-font-family":
                                '"Inter Display", "Inter Display Placeholder", sans-serif',
                              "--framer-font-weight": 600,
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-2b6fad43-75a1-464a-bb3f-6e593177abb0, rgb(0, 0, 0)))",
                              "--framer-text-transform": "uppercase",
                            }}
                            className="framer-text"
                          >
                            RSVP NOW
                          </p>
                        </div>
                      </a>
                      {/*/$--*/}
                    </div>
                    <div className="framer-6ap0we-container">
                      {/*$--*/}
                      <a
                        className="framer-j5U74 framer-1qakzfu framer-v-1u6hr7k framer-19r67fy"
                        data-border="true"
                        data-framer-name="Large variant 1"
                        style={{
                          "--border-bottom-width": "2px",
                          "--border-color":
                            "var(--token-cdf9483a-a826-4f60-bfff-9d5ba9eefe40, rgb(254, 253, 224))",
                          "--border-left-width": "2px",
                          "--border-right-width": "2px",
                          "--border-style": "solid",
                          "--border-top-width": "2px",
                          backgroundColor: "rgba(0, 0, 0, 0)",
                          borderRadius: "30px",
                          opacity: 1,
                        }}
                        href="https://discord.bolt.new"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div
                          className="framer-19klhnk"
                          style={{
                            outline: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            flexShrink: 0,
                            "--extracted-r6o4lv":
                              "var(--token-cdf9483a-a826-4f60-bfff-9d5ba9eefe40, rgb(254, 253, 224))",
                            transform: "none",
                            opacity: 1,
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            style={{
                              "--font-selector":
                                "RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk",
                              "--framer-font-family":
                                '"Inter Display", "Inter Display Placeholder", sans-serif',
                              "--framer-font-weight": 600,
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-cdf9483a-a826-4f60-bfff-9d5ba9eefe40, rgb(254, 253, 224)))",
                              "--framer-text-transform": "uppercase",
                            }}
                            className="framer-text"
                          >
                            JOIN DISCORD
                          </p>
                        </div>
                      </a>
                      {/*/$--*/}
                    </div>
                  </div>
                </div>
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="scroll-content">
        {/* 🔷 Add Liquid Scroll Transition Here */}
      <SplitText
  text="Hello, GSAP!"
  className="text-2xl font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>
        {/* 🔷 Background Video Section */}
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://dl.dropboxusercontent.com/scl/fi/ecqld2ikghhnwm0xou04y/hero-bg-copy.mp4?rlkey=ue9hwk67xrj1v3eydnaqojd6o&st=7yv7kizp&dl=0"
            type="video/mp4"
          />
        </video>

        {/* 🔷 3D Scene Content */}
        <div className="content">
          <ThreeScene />
          <hr className="separator" />
        </div>

        <MemoryCarousel />
        <Card />

        

        <div className="sera-ui-video-text">
          <VideoText
            src="https://github.com/Mohammad-Afzal123/ACM-WDraft/raw/refs/heads/main/vecteezy_glowing-blue-neon-reflection-tech-tunnel-corridor-space-dj-loop_2020121%20(1)%20(1).mp4"
          />
        </div>
      </div>
    </div>
  );
}
