import React, { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 406 55.35"
      {...props}
    >
      <defs></defs>
      <polygon
        className="cls-1"
        style={{
          fill: "#ec1c24",
        }}
        points="378.33 0 364.5 13.82 364.5 13.86 378.33 27.68 364.5 41.5 364.5 41.53 378.33 55.35 406 27.68 378.33 0"
      />
      <polygon
        className="cls-1"
        style={{
          fill: "#ec1c24",
        }}
        points="350.66 0 364.47 13.82 364.47 13.86 350.66 27.68 364.47 41.5 364.47 41.53 350.66 55.35 322.98 27.68 350.66 0"
      />
      <path
        className="cls-1"
        style={{
          fill: "#ec1c24",
        }}
        d="m6.19,41.45v-21.07H0v-6.53h19.9v6.53h-6.19v21.07h-7.52Zm17.38,0V13.85h16.92v6.04h-9.58v4.8h9.04v5.92h-9.04v4.65h9.58v6.19h-16.92Zm41.91-26.54v8.24c-1.04-1.15-2.06-1.98-3.08-2.52-1.02-.54-2.13-.8-3.29-.8-2.17,0-3.91.75-5.25,2.21-1.34,1.48-2.01,3.39-2.01,5.78,0,2.22.69,4.05,2.05,5.52,1.37,1.46,3.1,2.18,5.22,2.18,1.16,0,2.27-.26,3.29-.81,1.02-.53,2.04-1.38,3.08-2.54v8.25c-1.2.57-2.39,1.01-3.57,1.3-1.18.29-2.37.42-3.59.42-1.51,0-2.9-.17-4.17-.54-1.28-.35-2.45-.91-3.52-1.64-2.07-1.38-3.64-3.11-4.71-5.2-1.09-2.12-1.62-4.47-1.62-7.11,0-2.11.34-4.02,1.03-5.76.68-1.73,1.72-3.3,3.11-4.71,1.29-1.34,2.77-2.34,4.42-3.01,1.63-.67,3.46-.99,5.47-.99,1.22,0,2.41.14,3.59.42,1.18.29,2.37.73,3.57,1.3m4.24,26.54V13.85h7.52v10.73h10.04v-10.73h7.54v27.6h-7.54v-11.24h-10.04v11.24h-7.52Zm50.97-26.54v8.24c-1.02-1.15-2.04-1.98-3.08-2.52-1.02-.54-2.12-.8-3.28-.8-2.17,0-3.92.75-5.25,2.21-1.35,1.48-2.01,3.39-2.01,5.78,0,2.22.68,4.05,2.05,5.52,1.36,1.46,3.1,2.18,5.21,2.18,1.16,0,2.27-.26,3.28-.81,1.04-.53,2.06-1.38,3.08-2.54v8.25c-1.19.57-2.37,1.01-3.56,1.3-1.17.29-2.38.42-3.58.42-1.51,0-2.9-.17-4.17-.54-1.28-.35-2.45-.91-3.53-1.64-2.06-1.38-3.63-3.11-4.71-5.2-1.08-2.12-1.62-4.47-1.62-7.11,0-2.11.35-4.02,1.03-5.76.68-1.73,1.72-3.3,3.1-4.71,1.32-1.34,2.78-2.34,4.43-3.01,1.64-.67,3.46-.99,5.47-.99,1.2,0,2.41.14,3.58.42,1.18.29,2.37.73,3.56,1.3m32.6,12.8c0,1.98-.36,3.85-1.1,5.58-.72,1.73-1.79,3.28-3.19,4.66-1.41,1.36-3.01,2.4-4.83,3.14-1.81.74-3.68,1.12-5.64,1.12s-3.86-.37-5.67-1.12c-1.81-.74-3.39-1.78-4.77-3.14-1.43-1.38-2.5-2.93-3.24-4.68-.73-1.74-1.09-3.6-1.09-5.56s.36-3.83,1.09-5.57c.73-1.75,1.81-3.3,3.24-4.68,1.38-1.35,2.96-2.39,4.77-3.14,1.8-.72,3.69-1.1,5.67-1.1s3.85.38,5.66,1.1c1.82.75,3.42,1.79,4.8,3.14,1.38,1.37,2.44,2.93,3.18,4.67.74,1.74,1.1,3.61,1.1,5.59m-14.75,8.11c2.09,0,3.81-.78,5.17-2.3,1.37-1.54,2.05-3.48,2.05-5.81s-.7-4.25-2.08-5.81c-1.38-1.54-3.1-2.31-5.14-2.31s-3.81.78-5.17,2.31c-1.37,1.54-2.05,3.48-2.05,5.81s.67,4.3,2.01,5.82c1.34,1.52,3.08,2.29,5.21,2.29m51.13,5.63h-7.03l-1.62-11.94c-.11-.83-.21-1.77-.31-2.8-.11-1.03-.19-2.15-.27-3.38-.17,1.18-.52,2.64-1.04,4.39-.12.37-.19.62-.24.8l-3.75,12.94h-5.02l-3.76-12.94c-.05-.18-.13-.44-.22-.8-.53-1.75-.88-3.2-1.04-4.36-.08,1.05-.17,2.08-.26,3.1-.11,1.04-.24,2.06-.36,3.07l-1.62,11.94h-7.01l4.27-27.6h7.44l4.17,14.24c.03.09.08.26.14.49.4,1.26.64,2.35.75,3.26.04-.49.14-1.04.28-1.63.14-.58.32-1.32.57-2.15l4.21-14.2h7.46l4.24,27.6Z"
      />
      <path
        className="cls-2"
        style={{
          fill: "#061922",
        }}
        d="m200.67,24.92h1.5c1.88,0,3.15-.21,3.84-.63.68-.4,1.04-1.11,1.04-2.12s-.33-1.77-.98-2.2c-.63-.41-1.9-.63-3.77-.63h-1.63v5.57Zm-6.98,16.58V13.87h7.57c3.11,0,5.29.1,6.53.3,1.24.19,2.3.56,3.2,1.04,1.01.57,1.79,1.33,2.33,2.28.53.95.8,2.04.8,3.3,0,1.58-.4,2.82-1.19,3.75-.81.92-2.09,1.62-3.83,2.09,1.96.16,3.49.85,4.6,2.08,1.12,1.22,1.67,2.86,1.67,4.91,0,1.47-.31,2.77-.93,3.89-.62,1.12-1.51,1.99-2.67,2.6-.94.5-2.11.86-3.48,1.07-1.38.22-3.65.33-6.8.33h-7.79Zm6.98-5.64h2.65c1.78,0,3.05-.23,3.79-.68.74-.45,1.12-1.2,1.12-2.23,0-1.16-.34-1.96-1.02-2.42-.68-.46-1.94-.7-3.77-.7h-2.76v6.03Zm26.54-4.7h7.49l-2.82-9.1c-.08-.28-.2-.73-.35-1.34-.15-.62-.35-1.41-.6-2.38-.15.68-.31,1.33-.48,1.94-.15.61-.31,1.2-.48,1.78l-2.77,9.1Zm-10.55,10.34l9.53-27.63h9.44l9.55,27.63h-7.5l-1.4-4.95h-10.7l-1.44,4.95h-7.49Zm31.16,0V13.87h7.26l10.44,14.22c.2.28.53.86.99,1.74.46.88.96,1.91,1.51,3.13-.15-1.14-.25-2.17-.33-3.07-.07-.88-.11-1.67-.11-2.36v-13.64h7.24v27.63h-7.24l-10.44-14.27c-.21-.29-.54-.86-1.01-1.74-.45-.88-.95-1.9-1.49-3.09.14,1.16.26,2.18.33,3.08.07.9.1,1.68.1,2.38v13.64h-7.26Zm32.93,0V13.87h7.45v12.54l8.75-12.54h8.77l-10.21,13.48,11.1,14.15h-9.41l-9.01-12.41v12.41h-7.45Z"
      />
    </svg>
  );
};

export default Logo;
