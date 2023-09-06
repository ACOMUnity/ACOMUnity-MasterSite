// import React, { ReactElement, useEffect, useRef, useState } from "react";
// import styled, { keyframes, css } from "styled-components";

// function flip(flipcard, newNumber, flag) {
//   const cardTop = flipcard.querySelector("[data-card-top]");
//   console.log(cardTop);
//   const startNumber = cardTop ? parseInt(cardTop.textContent as string, 10) : 0;

//   const cardBot = flipcard.querySelector("[data-card-bot]"),
//     topFlip = flipcard.querySelector("[data-flip-top]"),
//     botFlip = flipcard.querySelector("[data-flip-bot]"),
//     topFlipNum = flipcard.querySelector("[data-flip-top-num]"),
//     botFlipNum = flipcard.querySelector("[data-flip-bot-num]");

//   if (newNumber === startNumber) return;

//   const displayStartNum = String(startNumber).padStart(2, "0");

//   const displayNewNum = String(newNumber).padStart(2, "0");

//   if (flag) console.log("displayStartNum", displayStartNum, displayNewNum);

//   const anim = (el, event, callback) => {
//     const handler = () => {
//       el.removeEventListener(event, handler);
//       callback();
//     };

//     el.addEventListener(event, handler);
//   };

//   //   cardTop.textContent = displayStartNum;
//   //   cardBot.textContent = displayStartNum;
//   //   topFlipNum.textContent = displayStartNum;
//   //   botFlipNum.textContent = displayNewNum;

//   topFlip.classList.add("flip-card-top");
//   botFlip.classList.add("flip-card-bottom");

//   anim(topFlip, "animationstart", () => {
//     cardTop.textContent = displayNewNum;
//   });

//   anim(topFlip, "animationend", () => {
//     topFlipNum.innerText = displayNewNum;
//     topFlip.classList.remove("flip-card-top");
//   });

//   anim(botFlip, "animationend", () => {
//     cardBot.textContent = displayNewNum;
//     botFlip.classList.remove("flip-card-bottom");
//   });
// }
// const CountDown = () => {
//   const [timeRemaining, setTimeRemaining] = useState(0);
//   const flipcardRef = useRef(null);

//   const countToDate = new Date();
//   countToDate.setDate(countToDate.getDate() + 9);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const currentDate = new Date();
//       const timeBetweenDates = Math.ceil((+countToDate - +currentDate) / 1000);
//       setTimeRemaining(timeBetweenDates);
//     }, 250);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const days = Math.floor(timeRemaining / 86400);
//     const hours = Math.floor((timeRemaining % 86400) / 3600);
//     const minutes = Math.floor((timeRemaining % 3600) / 60);
//     const seconds = timeRemaining % 60;

//     // Assuming flipcardRef is a ref to your flip card element
//     // const flipcard = flipcardRef.current;

//     // flip(flipcard, days, true);
//     // flip(flipcard, hours);
//     // flip(flipcard, minutes);
//     // flip(flipcard, seconds);
//   }, [timeRemaining]);

//   return (
//     <Countdown ref={flipcardRef}>
//       <div className="text-4xl font-bold tracking-[14px] mb-10 text-grayishBlue">
//         WE'RE LAUNCHING SOON
//       </div>
//       <div className="flex gap-40">
//         {/* Days */}
//         <FlipCard data-days>
//           <h1 className="text-2xl font-bold text-grayishBlue mb-10">DAYS</h1>
//           <CardContainer>
//             <AnimatedFlipTop isFlipping={timeRemaining !== 0}>
//               <div>
//                 <div></div>
//               </div>
//               <div>
//                 <div></div>
//               </div>
//               <span class="translate-y-[46px]" data-card-top="">
//                 08
//               </span>
//               <span data-flip-top="">
//                 <div>
//                   <div></div>
//                 </div>
//                 <div>
//                   <div></div>
//                 </div>
//                 <span data-flip-top-num="" data-card-top="">
//                   08
//                 </span>
//               </span>
//             </AnimatedFlipTop>
//             <AnimatedFlipBottom isFlipping={timeRemaining !== 0}>
//               <div>
//                 <div></div>
//               </div>
//               <div>
//                 <div></div>
//               </div>
//               <span data-card-bot="">08</span>
//               <span data-flip-bot="">
//                 <div>
//                   <div></div>
//                 </div>
//                 <div>
//                   <div></div>
//                 </div>
//                 <span data-flip-bot-num="">08</span>
//               </span>
//             </AnimatedFlipBottom>
//           </CardContainer>
//         </FlipCard>

//         {/* Hours */}
//       </div>
//     </Countdown>
//   );
// };

// export default CountDown;

// const Countdown = styled.section`
//   background: linear-gradient(to bottom, #111d2c, #1a2333);
//   height: 100vh;
//   font-family: "Red Hat Text", sans-serif;
//   color: hsl(237, 18%, 59%);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const FlipCard = styled.div`
//   display: flex;
//   flex-direction: column-reverse;
//   justify-content: center;
//   align-items: center;
//   margin: 0 20px;
// `;

// const CardContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;

//   > div {
//     display: flex;
//     flex-direction: column;
//     box-shadow: 0px 17px 12px 1px rgba(0, 0, 0, 0.75);
//     color: hsl(345, 95%, 68%);
//   }
// `;

// const FlipTopAnimation = keyframes`
//   100% {
//     transform: rotateX(90deg);
//   }
// `;

// const FlipBottomAnimation = keyframes`
//   100% {
//     transform: rotateX(0deg);
//   }
// `;

// const AnimatedFlipTop = styled.span`
//   font-size: 6rem;
//   line-height: 1;
//   border-top-right-radius: 0.75rem;
//   border-top-left-radius: 0.75rem;
//   overflow: hidden;
//   justify-content: center;
//   align-items: flex-end;
//   width: 180px;
//   height: 90px;
//   display: flex;
//   position: relative;
//   background-color: hsl(236, 21%, 20%);

//   > div {
//     justify-content: flex-start;
//     align-items: flex-end;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     position: absolute;

//     > div {
//       border-top-right-radius: 9999px;

//       width: 10px;
//       height: 8px;
//       background-color: hsl(235, 16%, 14%);
//     }
//   }

//   > span:first-child {
//     --tw-translate-y: 46px;
//     transform: translate(0, var(--tw-translate-y)) rotate(0) skewX(0) skewY(0)
//       scaleX(1) scaleY(1);
//   }

//   > span:last-child {
//     font-size: 6rem;
//     line-height: 1;
//     border-top-right-radius: 0.75rem;
//     border-top-left-radius: 0.75rem;
//     overflow: hidden;
//     justify-content: center;
//     align-items: flex-end;
//     width: 180px;
//     height: 90px;
//     display: flex;
//     position: absolute;
//     -webkit-box-shadow: inset 0px 2px 1px 0px rgba(0, 0, 0, 0.42);
//     -moz-box-shadow: inset 0px 2px 1px 0px rgba(0, 0, 0, 0.42);
//     box-shadow: inset 0px 2px 1px 0px rgba(0, 0, 0, 0.42);
//     background-color: hsl(236, 21%, 20%);

//     > div:first-child {
//       justify-content: flex-start;
//       align-items: flex-end;
//       width: 100%;
//       height: 100%;
//       display: flex;
//       position: absolute;
//     }

//     > div:nth-child(2) {
//       justify-content: flex-end;
//       align-items: flex-end;
//       width: 100%;
//       height: 100%;
//       display: flex;
//       position: absolute;
//     }

//     > span {
//       --tw-translate-y: 46px;
//       transform: translate(0, var(--tw-translate-y)) rotate(0) skewX(0) skewY(0)
//         scaleX(1) scaleY(1);
//     }
//   }
// `;
// /* position: relative;
//   width: 180px;
//   height: 90px;
//   background-color: hsl(236, 21%, 20%);
//   overflow: hidden;
//   border-top-left-radius: 15px;
//   border-top-right-radius: 15px;
//   display: flex;
//   justify-content: center;
//   align-items: flex-end;
//   font-size: 8rem;
//   color: white;
//   transform-origin: bottom; */
// //`;
// //transform: translateY(${(props) => (props.isFlipping ? "-45px" : "0")});
// //animation: ${(props) =>
// // props.isFlipping
// //   ? css`
// //      ${FlipTopAnimation} 350ms ease-in
// //   `
// //: "none"};

// const AnimatedFlipBottom = styled.span`
//   --tw-space-y-reverse: 0;
//   margin-top: calc(1px * calc(1 - var(--tw-space-y-reverse)));
//   margin-bottom: calc(1px * var(--tw-space-y-reverse));
//   font-size: 6rem;
//   line-height: 1;
//   border-bottom-right-radius: 0.75rem;
//   border-bottom-left-radius: 0.75rem;
//   overflow: hidden;
//   justify-content: center;
//   align-items: flex-end;
//   width: 180px;
//   height: 90px;
//   display: flex;
//   position: relative;
//   -webkit-box-shadow: inset 0px -2px 1px 0px rgba(0, 0, 0, 0.42);
//   -moz-box-shadow: inset 0px -2px 1px 0px rgba(0, 0, 0, 0.42);
//   box-shadow: inset 0px -2px 1px 0px rgba(0, 0, 0, 0.42);
//   background-color: hsl(236, 21%, 26%);

//   > div:first-child {
//     justify-content: flex-start;
//     align-items: flex-start;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     position: absolute;

//     > div {
//       border-bottom-right-radius: 9999px;
//       width: 10px;
//       height: 8px;
//       background-color: hsl(235, 16%, 14%);
//     }
//   }

//   > div:nth-child(2) {
//     justify-content: flex-end;
//     align-items: flex-start;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     position: absolute;

//     > div {
//       border-bottom-left-radius: 9999px;
//       width: 10px;
//       height: 8px;
//       background-color: hsl(235, 16%, 14%);
//     }
//   }

//   > span:first-child {
//     --tw-translate-y: -45px;
//     transform: translate(var(--tw-translate-x), var(--tw-translate-y))
//       rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
//       scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
//   }

//   > span:last-child {
//     font-size: 6rem;
//     line-height: 1;
//     border-bottom-right-radius: 0.75rem;
//     border-bottom-left-radius: 0.75rem;
//     overflow: hidden;
//     justify-content: center;
//     align-items: flex-end;
//     width: 180px;
//     height: 90px;
//     display: flex;
//     position: absolute;
//     -webkit-box-shadow: inset 0px -2px 1px 0px rgba(0, 0, 0, 0.42);
//     -moz-box-shadow: inset 0px -2px 1px 0px rgba(0, 0, 0, 0.42);
//     box-shadow: inset 0px -2px 1px 0px rgba(0, 0, 0, 0.42);
//     background-color: hsl(236, 21%, 26%);

//     > div:first-child {
//       justify-content: flex-start;
//       align-items: flex-start;
//       width: 100%;
//       height: 100%;
//       display: flex;
//       position: absolute;

//       > div {
//         border-bottom-right-radius: 9999px;
//         width: 10px;
//         height: 8px;
//         background-color: hsl(235, 16%, 14%);
//       }
//     }

//     > div:last-child {
//       justify-content: flex-end;
//       align-items: flex-start;
//       width: 100%;
//       height: 100%;
//       display: flex;
//       position: absolute;

//       > div {
//         border-bottom-left-radius: 9999px;
//         width: 10px;
//         height: 8px;
//         background-color: hsl(235, 16%, 14%);
//       }
//     }

//     span {
//       --tw-translate-y: -45px;
//       transform: translate(0, var(--tw-translate-y)) rotate(0) skewX(var(0))
//         skewY(0) scaleX(1) scaleY(1);
//     }
//   }
// `;
// // position: relative;
// // width: 180px;
// // height: 90px;
// // background-color: hsl(236, 21%, 26%);
// // overflow: hidden;
// // border-bottom-left-radius: 15px;
// // border-bottom-right-radius: 15px;
// // display: flex;
// // justify-content: center;
// // align-items: flex-end;
// // font-size: 8rem;
// // color: white;
// // transform: translateY(${(props) => (props.isFlipping ? "45px" : "0")});
// // animation: ${(props) =>
// //   props.isFlipping
// //     ? css`
// //         ${FlipBottomAnimation} 350ms ease-in-out 350ms
// //       `
// //     : "none"};
// // transform-origin: top;

// /* <div className="flex gap-30 mt-20">
//         <div className="group">
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
//             {/* Your SVG path here */
// //}
// //   </svg>
// // </div>
// // <div className="group">
// //   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
// //     {/* Your SVG path here */}
// //   </svg>
// // </div>
// // <div className="group">
// //   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
// //     {/* Your SVG path here */}
// //   </svg>
// // </div>
// //  </div>
