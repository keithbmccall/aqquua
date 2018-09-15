import React, { Fragment } from "react";
import Anime from "react-anime";

const LogoAnimation = props => {
  return (
    <div className="Logo-animation">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="350.223px"
        height="85.966px"
        viewBox="-2.993 1.433 350.223 85.966"
        className="image centered"
      >
        {props.landingCount == 1 ? <AnimatedPath /> : <NormalPath />}
      </svg>
    </div>
  );
};
export default LogoAnimation;

const AnimatedPath = () => (
  <Anime
    easing="easeOutQuad"
    duration={5000}
    loop={false}
    delay={4400}
    strokeDashoffset={el => {
      var pathLength = 0;
      if (el.getTotalLength) {
        pathLength = el.getTotalLength();
        el.setAttribute("stroke-dasharray", pathLength);
      }
      return [pathLength, 0];
    }}
  >
    <path
      d="M219.829,12.561v13.734v29.657c0,1.096-1.098,1.988-2.188,1.988c-1.194,0-2.188-0.896-2.188-1.988V47.69
	c-3.583,6.565-9.854,11.246-17.812,11.246c-12.739,0-19.807-10.25-19.807-21V12.561c0-0.995,0.896-1.99,2.188-1.99
	s2.188,0.995,2.188,1.99v25.378c0,8.559,5.271,17.019,15.522,17.019c14.433,0,17.812-12.44,17.812-26.274V12.561
	c0-0.995,0.896-1.99,2.188-1.99C218.734,10.57,219.829,11.565,219.829,12.561"
    />
    <path
      d="M270.783,12.561v13.734v29.657c0,1.096-1.097,1.988-2.189,1.988c-1.191,0-2.188-0.896-2.188-1.988V47.69
	c-3.481,6.565-9.854,11.246-17.813,11.246c-12.736,0-19.804-10.25-19.804-21V12.561c0-0.995,0.896-1.99,2.188-1.99
	s2.188,0.995,2.188,1.99v25.378c0,8.559,5.271,17.019,15.521,17.019c14.435,0,17.812-12.44,17.812-26.274V12.561
	c0-0.995,0.896-1.99,2.188-1.99C269.789,10.57,270.783,11.565,270.783,12.561"
    />
    <path
      d="M115.034,62.719c0,10.648,8.459,20.7,20.399,20.7v3.98c-14.433,0-24.683-11.743-24.683-24.686l0.001-8.592v-7.729
	c-4.277,7.267-12.239,12.342-21.497,12.342c-14.43,0-24.681-11.941-24.681-24.68c-0.1-12.838,10.151-24.781,24.583-24.781
	c9.255,0,17.217,4.976,21.494,12.341V12.16c0-0.995,0.896-1.99,2.188-1.99c1.294,0,2.188,0.995,2.188,1.991v50.557L115.034,62.719
	L115.034,62.719z M109.66,33.958c0-10.648-8.263-20.7-20.402-20.7c-11.94,0-20.399,10.052-20.399,20.7
	c0,10.648,8.459,20.701,20.399,20.701C101.3,54.758,109.66,44.604,109.66,33.958"
    />
    <path
      d="M324.977,43.36c-3.331,8.417-12.604,14.979-22.942,14.979c-14.434,0-24.685-11.742-24.685-24.681
	c0-12.739,10.251-24.681,24.685-24.681c14.43,0,24.88,11.942,24.88,24.681l0,0c0,10.647,8.376,20.45,20.315,20.45v3.979
	C336.672,58.088,328.682,51.802,324.977,43.36L324.977,43.36z M322.534,33.659c0-10.45-8.264-20.601-20.401-20.601
	c-11.941,0-20.4,10.052-20.4,20.601c0,10.646,8.459,20.699,20.4,20.699C314.174,54.358,322.534,44.31,322.534,33.659"
    />
    <path
      d="M47.627,43.36c-3.331,8.417-12.604,14.979-22.943,14.979C10.251,58.339,0,46.597,0,33.658
	C0,20.919,10.251,8.977,24.684,8.977c14.43,0,24.88,11.942,24.88,24.681l0,0c0,10.647,8.376,20.45,20.316,20.45v3.979
	C59.323,58.088,51.332,51.802,47.627,43.36L47.627,43.36z M45.185,33.659c0-10.45-8.263-20.601-20.4-20.601
	c-11.941,0-20.4,10.052-20.4,20.601c0,10.646,8.459,20.699,20.4,20.699C36.824,54.358,45.185,44.31,45.185,33.659"
    />
    <path
      d="M327.697,4.127h1.363c0.072,0,0.136,0.025,0.188,0.075c0.051,0.051,0.077,0.113,0.077,0.188
	c0,0.075-0.026,0.136-0.077,0.184c-0.053,0.048-0.112,0.071-0.188,0.071h-1.363v6.734c0,0.075-0.022,0.136-0.073,0.183
	c-0.053,0.048-0.112,0.072-0.188,0.072c-0.069,0-0.13-0.024-0.183-0.072c-0.05-0.047-0.075-0.108-0.075-0.183V4.645h-1.114
	c-0.079,0-0.146-0.023-0.193-0.071c-0.052-0.048-0.075-0.109-0.075-0.184c0-0.074,0.023-0.137,0.075-0.188
	c0.051-0.05,0.114-0.075,0.193-0.075h1.114V1.689c0-0.075,0.025-0.135,0.075-0.184c0.053-0.048,0.108-0.072,0.183-0.072
	s0.136,0.024,0.188,0.072c0.051,0.048,0.073,0.109,0.073,0.184V4.127z"
    />
    <path
      d="M332.789,5.347c0.109-0.182,0.242-0.346,0.396-0.495c0.15-0.148,0.315-0.276,0.495-0.383c0.177-0.106,0.364-0.19,0.566-0.25
	c0.202-0.062,0.412-0.092,0.63-0.092c0.245,0,0.479,0.035,0.697,0.103c0.221,0.069,0.428,0.165,0.616,0.288
	c0.189,0.122,0.359,0.269,0.512,0.438c0.146,0.17,0.271,0.359,0.374,0.566c0.109-0.207,0.252-0.396,0.419-0.566
	c0.168-0.169,0.354-0.316,0.562-0.438c0.207-0.123,0.427-0.218,0.657-0.288c0.229-0.068,0.468-0.103,0.706-0.103
	c0.335,0,0.646,0.061,0.94,0.183c0.291,0.123,0.549,0.291,0.769,0.506c0.22,0.215,0.395,0.466,0.524,0.753
	c0.134,0.287,0.205,0.592,0.218,0.917c0.005,0.01,0.007,0.029,0.007,0.056v4.829c0,0.075-0.022,0.138-0.07,0.188
	c-0.051,0.051-0.105,0.076-0.18,0.076c-0.075,0-0.143-0.025-0.188-0.076c-0.053-0.05-0.074-0.113-0.074-0.188V6.542
	c0-0.271-0.059-0.522-0.17-0.753c-0.109-0.231-0.259-0.432-0.44-0.602c-0.187-0.17-0.396-0.303-0.635-0.398
	c-0.238-0.096-0.488-0.144-0.748-0.144c-0.271,0-0.53,0.053-0.777,0.16c-0.245,0.107-0.464,0.248-0.646,0.426
	c-0.188,0.178-0.338,0.384-0.45,0.618c-0.114,0.234-0.171,0.48-0.171,0.742v4.781c0,0.075-0.024,0.138-0.072,0.188
	c-0.047,0.051-0.107,0.076-0.186,0.076c-0.066,0-0.13-0.025-0.185-0.076c-0.053-0.05-0.078-0.113-0.078-0.188V6.526
	c-0.008-0.265-0.062-0.514-0.174-0.745c-0.107-0.231-0.253-0.43-0.434-0.597c-0.183-0.167-0.392-0.299-0.626-0.395
	c-0.236-0.096-0.482-0.144-0.736-0.144c-0.269,0-0.521,0.051-0.762,0.152c-0.241,0.101-0.456,0.237-0.646,0.407
	c-0.188,0.17-0.343,0.368-0.454,0.593c-0.114,0.226-0.179,0.466-0.188,0.721v4.845c0,0.075-0.024,0.138-0.077,0.191
	c-0.051,0.053-0.108,0.08-0.179,0.08c-0.073,0-0.139-0.026-0.188-0.08c-0.052-0.053-0.076-0.117-0.076-0.191V4.398
	c0-0.074,0.022-0.138,0.071-0.191c0.05-0.053,0.108-0.08,0.185-0.08c0.073,0,0.138,0.026,0.188,0.08
	c0.053,0.054,0.077,0.117,0.077,0.191L332.789,5.347L332.789,5.347z"
    />
    <path d="M115.034,23.375" />
    <path
      d="M170.701,62.719c0,10.648,8.459,20.7,20.399,20.7v3.98c-14.433,0-24.683-11.743-24.683-24.686l0.001-8.592v-7.729
	c-4.277,7.267-12.239,12.342-21.497,12.342c-14.43,0-24.681-11.941-24.681-24.68c-0.102-12.838,10.149-24.781,24.582-24.781
	c9.255,0,17.217,4.976,21.494,12.341V12.16c0-0.995,0.896-1.99,2.189-1.99s2.188,0.995,2.188,1.991v50.557L170.701,62.719
	L170.701,62.719z M165.327,33.958c0-10.648-8.263-20.7-20.402-20.7c-11.94,0-20.399,10.052-20.399,20.7
	c0,10.648,8.459,20.701,20.399,20.701C156.967,54.758,165.327,44.604,165.327,33.958"
    />
    <path d="M170.701,23.375" />
  </Anime>
);
const NormalPath = () => (
  <Fragment>
    <path
      d="M219.829,12.561v13.734v29.657c0,1.096-1.098,1.988-2.188,1.988c-1.194,0-2.188-0.896-2.188-1.988V47.69
c-3.583,6.565-9.854,11.246-17.812,11.246c-12.739,0-19.807-10.25-19.807-21V12.561c0-0.995,0.896-1.99,2.188-1.99
s2.188,0.995,2.188,1.99v25.378c0,8.559,5.271,17.019,15.522,17.019c14.433,0,17.812-12.44,17.812-26.274V12.561
c0-0.995,0.896-1.99,2.188-1.99C218.734,10.57,219.829,11.565,219.829,12.561"
    />
    <path
      d="M270.783,12.561v13.734v29.657c0,1.096-1.097,1.988-2.189,1.988c-1.191,0-2.188-0.896-2.188-1.988V47.69
c-3.481,6.565-9.854,11.246-17.813,11.246c-12.736,0-19.804-10.25-19.804-21V12.561c0-0.995,0.896-1.99,2.188-1.99
s2.188,0.995,2.188,1.99v25.378c0,8.559,5.271,17.019,15.521,17.019c14.435,0,17.812-12.44,17.812-26.274V12.561
c0-0.995,0.896-1.99,2.188-1.99C269.789,10.57,270.783,11.565,270.783,12.561"
    />
    <path
      d="M115.034,62.719c0,10.648,8.459,20.7,20.399,20.7v3.98c-14.433,0-24.683-11.743-24.683-24.686l0.001-8.592v-7.729
c-4.277,7.267-12.239,12.342-21.497,12.342c-14.43,0-24.681-11.941-24.681-24.68c-0.1-12.838,10.151-24.781,24.583-24.781
c9.255,0,17.217,4.976,21.494,12.341V12.16c0-0.995,0.896-1.99,2.188-1.99c1.294,0,2.188,0.995,2.188,1.991v50.557L115.034,62.719
L115.034,62.719z M109.66,33.958c0-10.648-8.263-20.7-20.402-20.7c-11.94,0-20.399,10.052-20.399,20.7
c0,10.648,8.459,20.701,20.399,20.701C101.3,54.758,109.66,44.604,109.66,33.958"
    />
    <path
      d="M324.977,43.36c-3.331,8.417-12.604,14.979-22.942,14.979c-14.434,0-24.685-11.742-24.685-24.681
c0-12.739,10.251-24.681,24.685-24.681c14.43,0,24.88,11.942,24.88,24.681l0,0c0,10.647,8.376,20.45,20.315,20.45v3.979
C336.672,58.088,328.682,51.802,324.977,43.36L324.977,43.36z M322.534,33.659c0-10.45-8.264-20.601-20.401-20.601
c-11.941,0-20.4,10.052-20.4,20.601c0,10.646,8.459,20.699,20.4,20.699C314.174,54.358,322.534,44.31,322.534,33.659"
    />
    <path
      d="M47.627,43.36c-3.331,8.417-12.604,14.979-22.943,14.979C10.251,58.339,0,46.597,0,33.658
C0,20.919,10.251,8.977,24.684,8.977c14.43,0,24.88,11.942,24.88,24.681l0,0c0,10.647,8.376,20.45,20.316,20.45v3.979
C59.323,58.088,51.332,51.802,47.627,43.36L47.627,43.36z M45.185,33.659c0-10.45-8.263-20.601-20.4-20.601
c-11.941,0-20.4,10.052-20.4,20.601c0,10.646,8.459,20.699,20.4,20.699C36.824,54.358,45.185,44.31,45.185,33.659"
    />
    <path
      d="M327.697,4.127h1.363c0.072,0,0.136,0.025,0.188,0.075c0.051,0.051,0.077,0.113,0.077,0.188
c0,0.075-0.026,0.136-0.077,0.184c-0.053,0.048-0.112,0.071-0.188,0.071h-1.363v6.734c0,0.075-0.022,0.136-0.073,0.183
c-0.053,0.048-0.112,0.072-0.188,0.072c-0.069,0-0.13-0.024-0.183-0.072c-0.05-0.047-0.075-0.108-0.075-0.183V4.645h-1.114
c-0.079,0-0.146-0.023-0.193-0.071c-0.052-0.048-0.075-0.109-0.075-0.184c0-0.074,0.023-0.137,0.075-0.188
c0.051-0.05,0.114-0.075,0.193-0.075h1.114V1.689c0-0.075,0.025-0.135,0.075-0.184c0.053-0.048,0.108-0.072,0.183-0.072
s0.136,0.024,0.188,0.072c0.051,0.048,0.073,0.109,0.073,0.184V4.127z"
    />
    <path
      d="M332.789,5.347c0.109-0.182,0.242-0.346,0.396-0.495c0.15-0.148,0.315-0.276,0.495-0.383c0.177-0.106,0.364-0.19,0.566-0.25
c0.202-0.062,0.412-0.092,0.63-0.092c0.245,0,0.479,0.035,0.697,0.103c0.221,0.069,0.428,0.165,0.616,0.288
c0.189,0.122,0.359,0.269,0.512,0.438c0.146,0.17,0.271,0.359,0.374,0.566c0.109-0.207,0.252-0.396,0.419-0.566
c0.168-0.169,0.354-0.316,0.562-0.438c0.207-0.123,0.427-0.218,0.657-0.288c0.229-0.068,0.468-0.103,0.706-0.103
c0.335,0,0.646,0.061,0.94,0.183c0.291,0.123,0.549,0.291,0.769,0.506c0.22,0.215,0.395,0.466,0.524,0.753
c0.134,0.287,0.205,0.592,0.218,0.917c0.005,0.01,0.007,0.029,0.007,0.056v4.829c0,0.075-0.022,0.138-0.07,0.188
c-0.051,0.051-0.105,0.076-0.18,0.076c-0.075,0-0.143-0.025-0.188-0.076c-0.053-0.05-0.074-0.113-0.074-0.188V6.542
c0-0.271-0.059-0.522-0.17-0.753c-0.109-0.231-0.259-0.432-0.44-0.602c-0.187-0.17-0.396-0.303-0.635-0.398
c-0.238-0.096-0.488-0.144-0.748-0.144c-0.271,0-0.53,0.053-0.777,0.16c-0.245,0.107-0.464,0.248-0.646,0.426
c-0.188,0.178-0.338,0.384-0.45,0.618c-0.114,0.234-0.171,0.48-0.171,0.742v4.781c0,0.075-0.024,0.138-0.072,0.188
c-0.047,0.051-0.107,0.076-0.186,0.076c-0.066,0-0.13-0.025-0.185-0.076c-0.053-0.05-0.078-0.113-0.078-0.188V6.526
c-0.008-0.265-0.062-0.514-0.174-0.745c-0.107-0.231-0.253-0.43-0.434-0.597c-0.183-0.167-0.392-0.299-0.626-0.395
c-0.236-0.096-0.482-0.144-0.736-0.144c-0.269,0-0.521,0.051-0.762,0.152c-0.241,0.101-0.456,0.237-0.646,0.407
c-0.188,0.17-0.343,0.368-0.454,0.593c-0.114,0.226-0.179,0.466-0.188,0.721v4.845c0,0.075-0.024,0.138-0.077,0.191
c-0.051,0.053-0.108,0.08-0.179,0.08c-0.073,0-0.139-0.026-0.188-0.08c-0.052-0.053-0.076-0.117-0.076-0.191V4.398
c0-0.074,0.022-0.138,0.071-0.191c0.05-0.053,0.108-0.08,0.185-0.08c0.073,0,0.138,0.026,0.188,0.08
c0.053,0.054,0.077,0.117,0.077,0.191L332.789,5.347L332.789,5.347z"
    />
    <path d="M115.034,23.375" />
    <path
      d="M170.701,62.719c0,10.648,8.459,20.7,20.399,20.7v3.98c-14.433,0-24.683-11.743-24.683-24.686l0.001-8.592v-7.729
c-4.277,7.267-12.239,12.342-21.497,12.342c-14.43,0-24.681-11.941-24.681-24.68c-0.102-12.838,10.149-24.781,24.582-24.781
c9.255,0,17.217,4.976,21.494,12.341V12.16c0-0.995,0.896-1.99,2.189-1.99s2.188,0.995,2.188,1.991v50.557L170.701,62.719
L170.701,62.719z M165.327,33.958c0-10.648-8.263-20.7-20.402-20.7c-11.94,0-20.399,10.052-20.399,20.7
c0,10.648,8.459,20.701,20.399,20.701C156.967,54.758,165.327,44.604,165.327,33.958"
    />
    <path d="M170.701,23.375" />
  </Fragment>
);