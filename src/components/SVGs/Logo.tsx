import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="500"
      height="97"
      viewBox="0 0 500 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_202_3)">
        <rect width="500" height="97" fill="white" />
        <path
          d="M50.2075 25.915H56.8726L73.4717 58.7324C75.7568 54.5007 77.9785 50.3747 80.1367 46.3545C81.0465 44.6406 81.9881 42.8633 82.9614 41.0225C83.9347 39.1816 84.8869 37.3726 85.8179 35.5952C86.77 33.7967 87.6693 32.0723 88.5156 30.4219C89.362 28.7715 90.1237 27.2692 90.8008 25.915H96.7041V68H90.8643V33.5005L73.186 68H71.853L53.3496 32.0405V68H50.2075V25.915ZM130.125 68.9839C126.951 68.9839 123.988 68.402 121.238 67.2383C118.508 66.0745 116.128 64.4876 114.097 62.4775C112.065 60.4463 110.468 58.0871 109.304 55.3999C108.14 52.6916 107.559 49.8034 107.559 46.7354C107.559 43.7096 108.14 40.8743 109.304 38.2295C110.468 35.5846 112.065 33.2783 114.097 31.3105C116.128 29.3428 118.508 27.7982 121.238 26.6768C123.988 25.5342 126.951 24.9629 130.125 24.9629C133.298 24.9629 136.261 25.5342 139.011 26.6768C141.762 27.7982 144.153 29.3428 146.184 31.3105C148.215 33.2783 149.813 35.5846 150.977 38.2295C152.14 40.8743 152.722 43.7096 152.722 46.7354C152.722 49.8034 152.14 52.6916 150.977 55.3999C149.813 58.0871 148.215 60.4463 146.184 62.4775C144.153 64.4876 141.762 66.0745 139.011 67.2383C136.261 68.402 133.298 68.9839 130.125 68.9839ZM130.125 66.8892C132.642 66.8892 134.864 66.3919 136.79 65.3975C138.736 64.3818 140.365 62.9748 141.677 61.1763C142.989 59.3778 143.984 57.2513 144.661 54.7969C145.338 52.3424 145.676 49.6553 145.676 46.7354C145.676 43.8366 145.338 41.1812 144.661 38.769C143.984 36.3569 142.989 34.2834 141.677 32.5483C140.365 30.7922 138.736 29.438 136.79 28.4858C134.864 27.5125 132.642 27.0259 130.125 27.0259C127.585 27.0259 125.343 27.5125 123.396 28.4858C121.449 29.438 119.82 30.7922 118.508 32.5483C117.218 34.2834 116.234 36.3569 115.557 38.769C114.901 41.1812 114.573 43.8366 114.573 46.7354C114.573 49.6553 114.901 52.3424 115.557 54.7969C116.234 57.2513 117.218 59.3778 118.508 61.1763C119.82 62.9748 121.449 64.3818 123.396 65.3975C125.343 66.3919 127.585 66.8892 130.125 66.8892ZM162.878 25.915H169.543L186.143 58.7324C188.428 54.5007 190.649 50.3747 192.808 46.3545C193.717 44.6406 194.659 42.8633 195.632 41.0225C196.606 39.1816 197.558 37.3726 198.489 35.5952C199.441 33.7967 200.34 32.0723 201.187 30.4219C202.033 28.7715 202.795 27.2692 203.472 25.915H209.375V68H203.535V33.5005L185.857 68H184.524L166.021 32.0405V68H162.878V25.915ZM222.102 25.915H227.91V68H222.102V25.915ZM240.002 25.915H243.494L271.868 57.5264V25.915H274.978V68.8569H273.391L243.208 34.2305V68H240.002V25.915ZM318.84 25.915V28.6445H303.606V68H297.798V28.6445H282.563V25.915H318.84ZM355.022 25.915V28.6445H332.837V43.6885H347.69V46.418H332.837V65.2705H355.022V68H327.029V25.915H355.022ZM370.002 47.1162C370.002 50.0573 370.457 52.7021 371.367 55.0508C372.298 57.3783 373.568 59.3566 375.176 60.9858C376.805 62.5939 378.709 63.8317 380.889 64.6992C383.089 65.5456 385.47 65.9688 388.03 65.9688C389.363 65.9688 390.696 65.6725 392.029 65.0801C393.362 64.4665 394.621 63.6942 395.806 62.7632C396.991 61.811 398.059 60.7531 399.011 59.5894C399.985 58.4256 400.757 57.283 401.328 56.1616L404.089 58.0659C403.201 59.5047 402.174 60.88 401.011 62.1919C399.847 63.5037 398.503 64.6675 396.98 65.6831C395.457 66.6776 393.743 67.471 391.838 68.0635C389.955 68.6771 387.861 68.9839 385.554 68.9839C382.169 68.9839 379.09 68.402 376.318 67.2383C373.547 66.0745 371.166 64.4982 369.177 62.5093C367.209 60.5203 365.686 58.2035 364.607 55.5586C363.528 52.8926 362.988 50.0785 362.988 47.1162C362.988 45.1484 363.232 43.2336 363.718 41.3716C364.226 39.4884 364.945 37.7323 365.876 36.103C366.829 34.4526 367.971 32.9504 369.304 31.5962C370.658 30.2209 372.182 29.0465 373.875 28.0732C375.567 27.0788 377.419 26.3171 379.429 25.7881C381.46 25.238 383.618 24.9629 385.903 24.9629C388.04 24.9629 390.019 25.2697 391.838 25.8833C393.679 26.4757 395.361 27.2798 396.885 28.2954C398.408 29.2899 399.762 30.4536 400.947 31.7866C402.153 33.0985 403.201 34.4632 404.089 35.8809L401.455 37.8169C400.651 36.3781 399.699 35.0557 398.599 33.8496C397.52 32.6436 396.366 31.6068 395.139 30.7393C393.933 29.8717 392.695 29.1947 391.426 28.708C390.156 28.2214 388.95 27.978 387.808 27.978C385.374 27.978 383.079 28.4224 380.92 29.311C378.762 30.1997 376.868 31.4692 375.239 33.1196C373.631 34.77 372.351 36.7801 371.399 39.1499C370.468 41.4985 370.002 44.154 370.002 47.1162ZM420.879 68H415.071V25.915H420.879V45.085H443.286V25.915H449.094V68H443.286V47.8145H420.879V68Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_202_3">
          <rect width="500" height="97" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;
