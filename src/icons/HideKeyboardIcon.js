import React from "react";

const BackspaceIcon = ({ viewBox = "0 0 510 510", width = 36, height = 36, fill }) =>
  <svg {...{ width, height, fill, viewBox }}>
    <path d="M459,0H51C22.95,0,0,22.95,0,51v255c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z M229.5,76.5h51v51h-51V76.5z M229.5,153h51v51h-51V153z M153,76.5h51v51h-51V76.5z M153,153h51v51h-51V153z M127.5,204h-51v-51 h51V204z M127.5,127.5h-51v-51h51V127.5z M357,306H153v-51h204V306z M357,204h-51v-51h51V204z M357,127.5h-51v-51h51V127.5z M433.5,204h-51v-51h51V204z M433.5,127.5h-51v-51h51V127.5z M255,510l102-102H153L255,510z" />
  </svg>;

export default BackspaceIcon;
